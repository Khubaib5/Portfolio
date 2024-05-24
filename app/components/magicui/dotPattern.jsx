"use client"
import { cn } from "../../../lib/utils";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}) {
  const { theme } = useTheme();
  const [fillColor, setFillColor] = useState("");

  useEffect(() => {
    setFillColor(theme === "dark" ? "fill-neutral-600/80" : "fill-neutral-400/80");
  }, [theme]);

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        fillColor,
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id="pattern"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cy} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#pattern)`} />
    </svg>
  );
}

export default DotPattern;
