"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // no-op
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className={cn("pill pill-primary")}
      aria-label={`Copy ${email}`}
    >
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
