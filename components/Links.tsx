"use client";

import { Package2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Links() {
  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Package2 className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <Link
        href="/"
        className="text-foreground transition-colors hover:text-foreground"
      >
        Home
      </Link>
      <Link
        href="/jobs"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Jobs
      </Link>
      <Link
        href="/problems"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Problems
      </Link>
      <Link
        href="/sheet"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Sheet
      </Link>
    </nav>
  );
}
