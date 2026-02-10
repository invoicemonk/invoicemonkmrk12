'use client';

import { ThemeProvider } from "next-themes";
import { LocaleProvider } from "@/contexts/LocaleContext";
import dynamic from "next/dynamic";

// Import Toaster dynamically with no SSR to avoid Radix Toast SSR issues
const Toaster = dynamic(
  () => import("@/components/ui/toaster").then((mod) => ({ default: mod.Toaster })),
  { ssr: false }
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <LocaleProvider>
        {children}
        <Toaster />
      </LocaleProvider>
    </ThemeProvider>
  );
}
