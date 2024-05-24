"use client";

import { cn } from "../../../lib/utils";
import { useEffect, useState } from "react";



export default function TypingAnimation({
  text,
  duration = 200,
  className,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i]);

  return (
    <h1
      className={cn(
        'text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]',
        className,
      )}
    >
      {displayedText ? displayedText : text}
    </h1>
  );
}
