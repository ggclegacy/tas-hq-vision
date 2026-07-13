import type { ReactNode } from "react";

export function GatewayEnvironment({ children }: { children: ReactNode }) {
  return (
    <section className="gateway-environment" aria-label="Executive Vision Gateway">
      <div className="gateway-depth" aria-hidden="true" />
      <div className="gateway-grid" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      {children}
    </section>
  );
}
