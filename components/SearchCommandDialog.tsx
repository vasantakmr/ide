"use client";

import * as React from "react";
import {
  BookCopy,
  BriefcaseBusiness,
  Calculator,
  CreditCard,
  Settings,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

export function SearchCommandDialog() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div
        className="relative"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <span className="text-sm absolute left-2.5 top-2.5 h-4  text-muted-foreground">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>/
          </kbd>
          to search
        </span>
        <Input
          type="search"
          placeholder=""
          className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
        />
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <Link href="/learn">
              <CommandItem onSelect={() => setOpen(false)}>
                <BookCopy className="mr-2 h-4 w-4" />
                <span>Learn</span>
              </CommandItem>
            </Link>
            <Link href="/jobs">
              <CommandItem onSelect={() => setOpen(false)}>
                <BriefcaseBusiness className="mr-2 h-4 w-4" />
                <span>Jobs</span>
              </CommandItem>
            </Link>
            <CommandItem onSelect={() => setOpen(false)}>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Sheet</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
