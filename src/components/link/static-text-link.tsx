import Link from "next/link";
import { Text, TextProps } from "../text";

type StaticTextLinkProps = {
  content: string;
  href: string;
  variant?: TextProps["variant"];
};

export function StaticTextLink({ content, href, variant }: StaticTextLinkProps) {
  return (
    <Link href={href} className="underline">
      <Text variant={variant ?? "body1"}>{content}</Text>
    </Link>
  );
}
