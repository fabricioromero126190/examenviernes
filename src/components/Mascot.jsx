import React from "react";

// Ilustración propia estilo "gota de agua" inspirada en la identidad de AAPOS.
// No reproduce el arte original del sitio, solo su espíritu visual.
export default function Mascot({ size = 100 }) {
  return (
    <svg width={size} height={size * 1.15} viewBox="0 0 120 138" fill="none">
      <path
        d="M60 4C60 4 20 56 20 88C20 111.196 37.9086 130 60 130C82.0914 130 100 111.196 100 88C100 56 60 4 60 4Z"
        fill="#eaf6f7"
        stroke="var(--aapos-teal)"
        strokeWidth="3"
      />
      <circle cx="46" cy="86" r="5" fill="var(--aapos-dark)" />
      <circle cx="74" cy="86" r="5" fill="var(--aapos-dark)" />
      <path
        d="M48 102c4 5 20 5 24 0"
        stroke="var(--aapos-dark)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="35" cy="76" r="4" fill="#ffb6c1" opacity="0.7" />
      <circle cx="85" cy="76" r="4" fill="#ffb6c1" opacity="0.7" />
      <text
        x="60"
        y="60"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="var(--aapos-teal)"
        fontFamily="Arial, sans-serif"
      >
        AAPOS
      </text>
    </svg>
  );
}
