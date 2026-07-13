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
    "This experience is a vision…",
    "…for the future of The Apothecary Shoppe.",
    "A connected intelligence platform.",
    "Designed around your people.",
    "Built around your standards.",
    "Executive Preview Access Granted.",
  ],
  text: [
    "Welcome, Blair.",
    "This experience is a vision… for the future of The Apothecary Shoppe.",
    "A connected intelligence platform.",
    "Designed around your people.",
    "Built around your standards.",
    "Executive Preview Access Granted.",
  ].join(" "),
  cues: [0, 2.7, 5.2, 9.2, 12.2, 15.1, 18.4],
  nominalDuration: 22,
  longPausesAfter: [0, 2, 5],
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
