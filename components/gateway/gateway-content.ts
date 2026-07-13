export type PlatformId = "tas" | "compass";

export type PlatformDefinition = {
  id: PlatformId;
  name: string;
  category: string;
  statement: string;
  status: string;
  action: string;
  value: string;
};

export const PLATFORMS: Record<PlatformId, PlatformDefinition> = {
  tas: {
    id: "tas",
    name: "TAS HQ",
    category: "AI-Powered Employee Operating System",
    statement: "Empower the team. Strengthen the standard.",
    status: "Primary Vision",
    action: "Begin with TAS HQ",
    value: "One headquarters for communication, intelligence, training, culture, service, and growth.",
  },
  compass: {
    id: "compass",
    name: "Apothecary Compass",
    category: "Personal Cannabis Intelligence Platform",
    statement: "Help every patient understand their own journey.",
    status: "Future Vision",
    action: "Preview the Vision",
    value: "A personalized platform for discovery, education, experience tracking, patient insight, and better-prepared store visits.",
  },
};

export const COMPASS_FEATURES = [
  "Strain and terpene discovery",
  "Personal experience journal",
  "AI-powered preference insights",
  "Pharmacist-ready Visit Brief",
] as const;
