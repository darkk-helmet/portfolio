import { HTMLAttributes, ReactNode } from "react";
import { Text } from "../text";

type ButtonProps = {
  children: ReactNode;
  className?: HTMLAttributes<HTMLButtonElement>["className"];
  variant?: "small" | "medium";
};

export function Button({
  children,
  className,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-4 ${
        variant === "small" ? "py-1" : "py-3"
      } bg-magenta-500 rounded-xl hover:shadow-button hover:shadow-magenta-600 active:bg-magenta-600 transition-all duration-300 ${className}`}
      {...props}
    >
      <Text className="text-background !font-semibold" variant="body1">
        {children}
      </Text>
    </button>
  );
}
