"use client";

import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  className?: string;
  iconSize?: number;
};

export function Logo({ className = "", iconSize = 44 }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md ${className}`}
      aria-label="Clínica Crystal — Ir al inicio"
    >
      <Image
        src="/images/diamante.png"
        alt=""
        width={iconSize}
        height={iconSize}
        priority
        className="object-contain shrink-0"
      />
      <span
        className="font-heading leading-none whitespace-nowrap"
        style={{ fontSize: iconSize * 0.5 }}
      >
        <span className="text-brand-muted">Clínica </span>
        <span className="font-semibold tracking-wide text-primary">CRYSTAL</span>
      </span>
    </Link>
  );
}
