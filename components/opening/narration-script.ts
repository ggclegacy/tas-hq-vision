export type NarrationId = "opening" | "overview";

export type NarrationScript = {
  id: NarrationId;
  lines: readonly string[];
  text: string;
  cues: readonly number[];
  nominalDuration: number;
  longPausesAfter: readonly number[];
};

export const OPENING_NARRATION: NarrationScript = {
  id: "opening",
  lines: [
    "Welcome, Blair and Bailey.",
    "Thank you for taking a few moments to explore this vision.",
    "This experience was created with one goal…",
    "…to explore ideas that could support the incredible team you’ve built together.",
    "Welcome…",
    "…to TAS HQ.",
  ],
  text: [
    "Welcome, Blair and Bailey.",
    "Thank you for taking a few moments to explore this vision.",
    "This experience was created with one goal… to explore ideas that could support the incredible team you’ve built together.",
    "Welcome… to TAS HQ.",
  ].join(" "),
  cues: [0, 2.8, 6.7, 9.8, 15.3, 17.2],
  nominalDuration: 20,
  longPausesAfter: [0, 1, 3],
};

export const OVERVIEW_NARRATION: NarrationScript = {
  id: "overview",
  lines: [
    "TAS HQ is more than an employee app.",
    "It is an AI-powered operating system for the people behind The Apothecary Shoppe.",
    "Built around four connected pillars.",
    "Service strengthens every patient experience.",
    "Standard carries what you’ve built across the entire team.",
    "Collective keeps every store, shift, and teammate connected.",
    "Growth makes learning, coaching, and recognition part of everyday work.",
    "Four pillars. One headquarters. One connected team.",
  ],
  text: [
    "TAS HQ is more than an employee app.",
    "It is an AI-powered operating system for the people behind The Apothecary Shoppe.",
    "Built around four connected pillars.",
    "Service strengthens every patient experience.",
    "Standard carries what you’ve built across the entire team.",
    "Collective keeps every store, shift, and teammate connected.",
    "Growth makes learning, coaching, and recognition part of everyday work.",
    "Four pillars. One headquarters. One connected team.",
  ].join(" "),
  cues: [0, 2.9, 7.2, 9.5, 12.5, 16.1, 19.5, 23.4],
  nominalDuration: 27,
  longPausesAfter: [1, 2, 6],
};

export const NARRATION_SCRIPTS: Record<NarrationId, NarrationScript> = {
  opening: OPENING_NARRATION,
  overview: OVERVIEW_NARRATION,
};
