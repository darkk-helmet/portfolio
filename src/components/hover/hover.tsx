import { ReactNode } from "react";

type HoverProps = {
  children: ReactNode;
};

export function Hover({ children }: HoverProps) {
  return (
    <div className="absolute -top-1 left-1/2 whitespace-nowrap -translate-x-1/2 -translate-y-full bg-gray-500 px-2 py-1 rounded-md">
      {children}
    </div>
  );
}
