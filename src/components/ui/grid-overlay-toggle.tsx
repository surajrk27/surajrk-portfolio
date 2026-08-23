"use client";

import { useState } from "react";
import { Grid3x3 } from "lucide-react";

/**
 * Toggles a 12-column baseline grid over the whole page.
 * A literal reference to translating Figma/Zeplin designs into
 * pixel-perfect layouts — the kind of tool a designer or QA would
 * use to check alignment.
 */
export function GridOverlayToggle() {
  const [active, setActive] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setActive((v) => !v)}
        aria-pressed={active}
        aria-label={active ? "Hide pixel grid overlay" : "Show pixel grid overlay"}
        title="Toggle 12-column grid overlay"
        className="flex h-9 w-9 items-center justify-center border border-border text-ink transition-colors hover:border-signal"
      >
        <Grid3x3 size={16} aria-hidden="true" />
      </button>
      <div className="grid-overlay" data-active={active} aria-hidden="true" />
    </>
  );
}
