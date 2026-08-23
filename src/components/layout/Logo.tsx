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
      className={`flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md ${className}`}
      aria-label="Clínica Crystal — Ir al inicio"
    >
      <Image
        src="/images/logo-crystal.png"
        alt="Clínica Crystal Logo"
        width={iconSize}
        height={iconSize}
        priority
        className="object-contain"
      />
    </Link>
  );
}
