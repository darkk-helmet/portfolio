import { ComponentType, SVGProps } from "react";

type IconButtonProps = {
  className?: SVGProps<SVGSVGElement>["className"];
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconProps?: SVGProps<SVGSVGElement>;
};

export function IconButton({ className, Icon, iconProps }: IconButtonProps) {
  return (
    <Icon
      className={`text-gray-500 hover:text-foreground transition-all duration-300 cursor-pointer ${className}`}
      {...iconProps}
    />
  );
}
