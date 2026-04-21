import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

export function SaralOneLogo({
  className,
  markOnly,
}: {
  className?: string;
  markOnly?: boolean;
}) {
  const heightClass = markOnly ? "h-9 w-auto" : "h-10 w-auto";

  return (
    <div className={cn("inline-flex items-center", className)}>
      <Image
        src="/logo.png"
        alt="Saral One"
        width={markOnly ? 42 : 180}
        height={markOnly ? 36 : 40}
        priority
        className={cn(heightClass, "select-none dark:invert")}
      />
    </div>
  );
}

