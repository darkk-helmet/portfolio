import React, { HTMLAttributes, useMemo } from "react";

export type TextProps = {
  children: React.ReactNode;
  className?:
    | HTMLAttributes<HTMLParagraphElement>["className"]
    | HTMLAttributes<HTMLHeadingElement>["className"];
  variant:
    | "body3"
    | "body2"
    | "body1"
    | "h6"
    | "h5"
    | "h4"
    | "h3"
    | "h2"
    | "h1";
};

export function Text({ children, className, variant }: TextProps) {
  const text = useMemo(() => {
    switch (variant) {
      case "body2":
        return <p className={`text-xs md:text-sm ${className}`}>{children}</p>;
      case "body1":
        return <p className={`text-sm md:text-base ${className}`}>{children}</p>;
      case "h6":
        return <h6 className={`text-base font-bold md:text-lg ${className}`}>{children}</h6>;
      case "h5":
        return <h5 className={`text-lg md:text-xl ${className}`}>{children}</h5>;
      case "h4":
        return (
          <h4 className={`text-xl md:text-2xl ${className}`}>{children}</h4>
        );
      case "h3":
        return (
          <h3 className={`text-2xl md:text-3xl ${className}`}>{children}</h3>
        );
      case "h2":
        return (
          <h2 className={`text-3xl md:text-4xl ${className}`}>{children}</h2>
        );
      case "h1":
        return (
          <h1 className={`text-4xl md:text-5xl ${className}`}>{children}</h1>
        );
    }
  }, [children, className, variant]);

  return text;
}
