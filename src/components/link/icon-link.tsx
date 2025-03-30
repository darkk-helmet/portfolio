import { ComponentType, SVGProps } from "react";
import { ExternalLink } from "./external-link";

type IconLinkProps = {
  className?: SVGProps<SVGSVGElement>["className"];
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconProps?: SVGProps<SVGSVGElement>;
};

export function IconLink({ className, href, Icon, iconProps }: IconLinkProps) {
  return (
    <ExternalLink href={href}>
      <Icon
        className={`text-gray-500 hover:text-foreground transition-all duration-300 ${className}`}
        {...iconProps}
      />
    </ExternalLink>
  );
}
