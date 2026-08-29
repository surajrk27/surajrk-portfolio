import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Redline spec-sheet palette (light), mirrored from globals.css
const PAPER = "rgb(242, 239, 233)";
const INK = "rgb(23, 20, 15)";
const MUTED = "rgb(107, 100, 89)";
const SIGNAL = "rgb(183, 64, 28)";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: PAPER,
          color: INK,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          <span>Portfolio</span>
          <span style={{ color: SIGNAL }}>Available</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 800, lineHeight: 1, letterSpacing: -4 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", fontSize: 34, marginTop: 22, color: MUTED }}>
            {profile.role} · 6+ yrs
          </div>
          <div style={{ display: "flex", fontSize: 24, marginTop: 12, color: SIGNAL }}>
            Turning Figma into fast, accessible, pixel-perfect UI
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          React · Next.js · TypeScript · Design systems · Accessibility
        </div>
      </div>
    ),
    { ...size },
  );
}
