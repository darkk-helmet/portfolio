import { HTMLAttributes, ReactNode, useMemo } from "react";
import { CircleIcon } from "../icons/iconify-icons";

type BadgeProps = {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  children: ReactNode;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

export function Badge({ className, children, position }: BadgeProps) {
  const positionClass = useMemo(() => {
    switch (position) {
      case "top-left":
        return "top-0 left-0";
      case "top-right":
        return "top-0 right-0";
      case "bottom-left":
        return "bottom-0 left-0";
      case "bottom-right":
        return "bottom-0 right-0";
    }
  }, [position]);

  const baseClasses = useMemo(
    () => `absolute ${positionClass} w-2 h-2`,
    [positionClass]
  );

  const combinedClasses = useMemo(
    () => (className ? `${baseClasses} ${className}` : baseClasses),
    [baseClasses, className]
  );

  return (
    <div className="relative">
      {children}
      <CircleIcon
        className={combinedClasses}
      />
    </div>
  );
}
