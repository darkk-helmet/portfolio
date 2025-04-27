"use client";

import { ReactNode, useCallback, useState } from "react";
import { Text } from "../text";

type HoverProps = {
  children: ReactNode;
  content: ReactNode;
};

export function Hover({ children, content }: HoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        className={`absolute ${
          isHovered ? "opacity-100" : "opacity-0"
        } -top-1 left-1/2 whitespace-nowrap -translate-x-1/2 -translate-y-full bg-gray-500 px-2 py-1 rounded-md transition-opacity`}
      >
        {typeof content === "string" ? (
          <Text variant="body2">{content}</Text>
        ) : (
          content
        )}
      </div>
    </div>
  );
}
