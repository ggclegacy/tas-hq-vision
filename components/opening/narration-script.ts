export type NarrationId = "opening" | "gateway";

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
    "Welcome, Blair.",
    "Thank you for taking a few moments to explore this vision.",
    "This experience was created with one goal…",
    "…to explore ideas that could support the incredible team you’ve built.",
    "Welcome…",
    "…to TAS HQ.",
  ],
  text: [
    "Welcome, Blair.",
    "Thank you for taking a few moments to explore this vision.",
    "This experience was created with one goal… to explore ideas that could support the incredible team you’ve built.",
    "Welcome… to TAS HQ.",
  ].join(" "),
  cues: [0, 2.8, 6.7, 9.8, 15.3, 17.2],
  nominalDuration: 20,
  longPausesAfter: [0, 1, 3],
};

export const GATEWAY_NARRATION: NarrationScript = {
  id: "gateway",
  lines: [
    "The Apothecary Shoppe has built more than a company.",
    "It has built a standard.",
    "This vision extends that standard across two connected experiences.",
    "TAS HQ empowers the team.",
    "Apothecary Compass empowers the patient.",
    "Together, they create a more intelligent Apothecary ecosystem.",
  ],
  text: [
    "The Apothecary Shoppe has built more than a company.",
    "It has built a standard.",
    "This vision extends that standard across two connected experiences.",
    "TAS HQ empowers the team.",
    "Apothecary Compass empowers the patient.",
    "Together, they create a more intelligent Apothecary ecosystem.",
  ].join(" "),
  cues: [0, 3.9, 6.8, 11.8, 14.6, 18.1],
  nominalDuration: 23,
  longPausesAfter: [0, 1, 2, 4],
};

export const NARRATION_SCRIPTS: Record<NarrationId, NarrationScript> = {
  opening: OPENING_NARRATION,
  gateway: GATEWAY_NARRATION,
};
