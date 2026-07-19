export type PillarId = "service" | "standard" | "collective" | "growth";

export type PillarDefinition = {
  id: PillarId;
  index: string;
  name: string;
  signal: string;
  description: string;
  outcome: string;
};

export const PILLARS: PillarDefinition[] = [
  {
    id: "service",
    index: "01",
    name: "Service",
    signal: "Patient Experience",
    description: "Equip every employee to create informed, human, and consistent patient experiences.",
    outcome: "Knowledge becomes confidence at the counter.",
  },
  {
    id: "standard",
    index: "02",
    name: "Standard",
    signal: "Shared Excellence",
    description: "Turn leadership expectations, SOPs, and proven practice into guidance the entire team can carry.",
    outcome: "The standard travels with every shift.",
  },
  {
    id: "collective",
    index: "03",
    name: "Collective",
    signal: "One Connected Team",
    description: "Keep every store, shift, and teammate connected to the same culture and conversation.",
    outcome: "Distance never becomes disconnection.",
  },
  {
    id: "growth",
    index: "04",
    name: "Growth",
    signal: "Continuous Momentum",
    description: "Make learning, coaching, recognition, and leadership insight part of everyday work.",
    outcome: "Every employee sees a path forward.",
  },
];

export const PILLAR_MAP = Object.fromEntries(PILLARS.map((pillar) => [pillar.id, pillar])) as Record<PillarId, PillarDefinition>;
