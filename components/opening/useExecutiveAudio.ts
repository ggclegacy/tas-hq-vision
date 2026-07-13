"use client";

import { useCallback, useEffect, useRef } from "react";
import {
  NARRATION_CUES,
  NARRATION_LINES,
  NOMINAL_NARRATION_DURATION,
} from "./narration-script";

type CaptionSetter = (caption: string) => void;

function wait(milliseconds: number) {
  return new Promise<void>((resolve) => window.setTimeout(resolve, milliseconds));
}

export function useExecutiveAudio() {
  const contextRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const ambientRef = useRef<{ source: AudioBufferSourceNode; gain: GainNode } | null>(null);
  const narrationSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const captionTimersRef = useRef<number[]>([]);
  const runRef = useRef(0);

  const ensureContext = useCallback(async () => {
    if (!contextRef.current) {
      const context = new AudioContext();
      const master = context.createGain();
      master.gain.value = 1;
      master.connect(context.destination);
      contextRef.current = context;
      masterRef.current = master;
    }

    if (contextRef.current.state === "suspended") {
      await contextRef.current.resume();
    }

    return contextRef.current;
  }, []);

  const startAmbient = useCallback(async () => {
    const context = await ensureContext();
    if (ambientRef.current || !masterRef.current) return;

    const frameCount = context.sampleRate * 4;
    const buffer = context.createBuffer(1, frameCount, context.sampleRate);
    const channel = buffer.getChannelData(0);
    let last = 0;

    for (let index = 0; index < frameCount; index += 1) {
      const white = Math.random() * 2 - 1;
      last = last * 0.985 + white * 0.015;
      channel[index] = last * 2.6;
    }

    const source = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();
    source.buffer = buffer;
    source.loop = true;
    filter.type = "lowpass";
    filter.frequency.value = 420;
    filter.Q.value = 0.4;
    gain.gain.setValueAtTime(0, context.currentTime);
    gain.gain.linearRampToValueAtTime(0.032, context.currentTime + 2.4);
    source.connect(filter).connect(gain).connect(masterRef.current);
    source.start();
    ambientRef.current = { source, gain };
  }, [ensureContext]);

  const stopNarration = useCallback(() => {
    runRef.current += 1;
    captionTimersRef.current.forEach(window.clearTimeout);
    captionTimersRef.current = [];
    narrationSourceRef.current?.stop();
    narrationSourceRef.current = null;
    window.speechSynthesis?.cancel();
  }, []);

  const narrateWithBrowserVoice = useCallback(async (setCaption: CaptionSetter, run: number) => {
    if (!("speechSynthesis" in window)) {
      for (const line of NARRATION_LINES) {
        if (runRef.current !== run) return;
        setCaption(line);
        await wait(line.includes("Granted") ? 1700 : 2400);
      }
      return;
    }

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (voice) => voice.lang.startsWith("en") && /Daniel|Alex|Arthur|Google UK English Male/i.test(voice.name),
    );

    for (let index = 0; index < NARRATION_LINES.length; index += 1) {
      if (runRef.current !== run) return;
      const line = NARRATION_LINES[index];
      setCaption(line);
      await new Promise<void>((resolve) => {
        const utterance = new SpeechSynthesisUtterance(line.replaceAll("…", ""));
        utterance.voice = preferredVoice ?? null;
        utterance.rate = 0.82;
        utterance.pitch = 0.72;
        utterance.volume = 0.82;
        utterance.onend = () => resolve();
        utterance.onerror = () => resolve();
        window.speechSynthesis.speak(utterance);
      });
      await wait(index === 0 || index === 2 || index === 5 ? 720 : 280);
    }
  }, []);

  const playNarration = useCallback(
    async (setCaption: CaptionSetter) => {
      stopNarration();
      const run = runRef.current;
      const context = await ensureContext();

      try {
        const response = await fetch("/api/narration", { method: "POST" });
        if (!response.ok || response.status === 204 || !masterRef.current) {
          await narrateWithBrowserVoice(setCaption, run);
          return;
        }

        const audioBuffer = await context.decodeAudioData(await response.arrayBuffer());
        if (runRef.current !== run) return;

        const source = context.createBufferSource();
        const narrationGain = context.createGain();
        narrationGain.gain.value = 0.92;
        source.buffer = audioBuffer;
        source.connect(narrationGain).connect(masterRef.current);
        narrationSourceRef.current = source;

        const scale = audioBuffer.duration / NOMINAL_NARRATION_DURATION;
        NARRATION_CUES.forEach((cue, index) => {
          const timer = window.setTimeout(() => {
            if (runRef.current === run) setCaption(NARRATION_LINES[index]);
          }, cue * scale * 1000);
          captionTimersRef.current.push(timer);
        });

        await new Promise<void>((resolve) => {
          source.onended = () => resolve();
          source.start();
        });
      } catch {
        if (runRef.current === run) await narrateWithBrowserVoice(setCaption, run);
      }
    },
    [ensureContext, narrateWithBrowserVoice, stopNarration],
  );

  const setMuted = useCallback((muted: boolean) => {
    const context = contextRef.current;
    const master = masterRef.current;
    if (!context || !master) return;
    master.gain.cancelScheduledValues(context.currentTime);
    master.gain.setTargetAtTime(muted ? 0 : 1, context.currentTime, 0.16);
  }, []);

  useEffect(
    () => () => {
      stopNarration();
      ambientRef.current?.source.stop();
      void contextRef.current?.close();
    },
    [stopNarration],
  );

  return { startAmbient, playNarration, stopNarration, setMuted };
}
