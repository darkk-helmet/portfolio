import Link from "next/link";
import { ReactNode } from "react";

type ExternalLinkProps = {
  children: ReactNode;
  href: string;
}

export function ExternalLink({ children, href }: ExternalLinkProps) {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank">
      {children}
    </Link>
  )
}