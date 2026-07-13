"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavPillProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export function NavPill({ href, icon, label }: NavPillProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200",
        isActive
          ? "glow-yellow bg-primary/10 text-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      )}
    >
      {icon}
      <span className="hidden lg:inline">{label}</span>
      <span
        className={cn(
          "pointer-events-none absolute -bottom-0.5 left-3.5 right-3.5 h-[3px] origin-left scale-x-0 rounded-full bg-primary transition-transform duration-200",
          isActive && "scale-x-100"
        )}
      />
    </Link>
  );
}
