import { NextResponse } from "next/server";
import { NARRATION_TEXT } from "@/components/opening/narration-script";

export const runtime = "nodejs";

export async function POST() {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const voiceId = process.env.ELEVENLABS_VOICE_ID ?? "5os40wnynMhpbBkIvStO";

  // A 204 tells the client to use its local speech fallback during development.
  if (!apiKey) {
    return new NextResponse(null, { status: 204 });
  }

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voiceId)}`,
    {
      method: "POST",
      headers: {
        Accept: "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": apiKey,
      },
      body: JSON.stringify({
        text: NARRATION_TEXT,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.7,
          similarity_boost: 0.8,
          style: 0.22,
          use_speaker_boost: true,
        },
      }),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Narration provider is temporarily unavailable." },
      { status: 502 },
    );
  }

  return new NextResponse(response.body, {
    headers: {
      "Content-Type": response.headers.get("content-type") ?? "audio/mpeg",
      "Cache-Control": "private, no-store",
    },
  });
}
