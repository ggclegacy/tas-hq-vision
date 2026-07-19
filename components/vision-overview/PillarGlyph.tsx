import type { PillarId } from "./overview-content";

export function PillarGlyph({ pillar }: { pillar: PillarId }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="15" />
      {pillar === "service" && <path d="m20 10 2.5 7.5L30 20l-7.5 2.5L20 30l-2.5-7.5L10 20l7.5-2.5L20 10Z" />}
      {pillar === "standard" && <path d="M20 9 29 13v7c0 6-3.8 9.4-9 11-5.2-1.6-9-5-9-11v-7l9-4Zm-4 11 2.7 2.7L24.5 17" />}
      {pillar === "collective" && <><circle cx="20" cy="13" r="3" /><circle cx="13" cy="25" r="3" /><circle cx="27" cy="25" r="3" /><path d="m18.5 15.7-4 6.5m7-6.5 4 6.5M16 25h8" /></>}
      {pillar === "growth" && <path d="M11 29V18m8 11V13m8 16V9M9 13l8-4 7 2 7-5" />}
    </svg>
  );
}
