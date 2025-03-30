import Link from "next/link";
import { Text, TextProps } from "../text";
import { ComponentType, SVGProps } from "react";

export type InteractiveTextLinkProps = {
  content: string;
  EndIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  linkProps: React.ComponentProps<typeof Link>;
  StartIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  variant?: TextProps["variant"];
};

export function InteractiveTextLink({
  content,
  EndIcon,
  linkProps,
  StartIcon,
  variant,
}: InteractiveTextLinkProps) {
  return (
    <Link
      className="flex flex-row gap-2 text-gray-400 hover:text-foreground transition-all duration-300 w-fit"
      {...linkProps}
    >
      {!!StartIcon && <StartIcon className="self-center w-5 h-5" />}
      <Text variant={variant ?? "body1"}>{content}</Text>
      {!!EndIcon && <EndIcon className="self-center w-5 h-5" />}
    </Link>
  );
}
