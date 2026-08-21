"use client";

import Link from "next/link";

type LogoProps = {
  className?: string;
  iconSize?: number;
};

export function Logo({ className = "", iconSize = 44 }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md ${className}`}
      aria-label="Clínica Crystal — Ir al inicio"
    >
      {/* Crystal + leaves SVG — faithful to the PDF logo */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Leaves */}
        <path
          d="M28 70 Q20 58 32 54 Q26 66 38 68 Q32 70 28 70Z"
          fill="none"
          stroke="#2AACAC"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M72 70 Q80 58 68 54 Q74 66 62 68 Q68 70 72 70Z"
          fill="none"
          stroke="#2AACAC"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 70 Q50 74 72 70"
          fill="none"
          stroke="#2AACAC"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Crystal/gem body */}
        <polygon
          points="50,10 70,30 65,60 50,68 35,60 30,30"
          fill="none"
          stroke="#2AACAC"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Crystal inner facets */}
        <line x1="50" y1="10" x2="50" y2="68" stroke="#2AACAC" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="30" y1="30" x2="70" y2="30" stroke="#2AACAC" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="50" y1="10" x2="30" y2="30" stroke="#2AACAC" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="50" y1="10" x2="70" y2="30" stroke="#2AACAC" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="35" y1="60" x2="30" y2="30" stroke="#2AACAC" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="65" y1="60" x2="70" y2="30" stroke="#2AACAC" strokeWidth="1.5" strokeOpacity="0.4" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-tight">
        <span
          className="text-sm font-semibold tracking-[0.18em] text-[#888fa0] uppercase"
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          Clínica
        </span>
        <span
          className="text-lg font-bold tracking-[0.12em] text-primary uppercase"
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          Crystal
        </span>
      </div>
    </Link>
  );
}
