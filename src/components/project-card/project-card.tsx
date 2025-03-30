import Image from "next/image";
import { Text } from "../text";
import { ReactNode } from "react";

type StackSectionItem = {
  icon: ReactNode;
  title: string;
  subtitle?: string;
};

type TechStackSectionProps = {
  items: StackSectionItem[];
  title: string;
};

function TechStackSection({ items, title }: TechStackSectionProps) {
  return (
    <ul>
      <li>
        <Text variant="body1" className="!font-bold">
          {title}
        </Text>
        <ul className="ml-4">
          {items.map((item) => (
            <li key={item.title}>
              <div className="flex flex-row gap-2 items-center">
                <div className="w-5 h-5 md:w-6 md:h-6">{item.icon}</div>
                <Text variant="body1">{item.title}</Text>
              </div>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
}

type ProjectCardProps = {
  iconLinks: ReactNode;
  imgSrc: string;
  techStacks: TechStackSectionProps[];
  title: string;
  subtitle?: ReactNode;
};

export function ProjectCard({
  iconLinks,
  imgSrc,
  techStacks,
  title,
  subtitle,
}: ProjectCardProps) {
  return (
    <div className="rounded-lg shadow-xl shadow-lavender-400/35 bg-lavender-950 border border-lavender-800 relative max-w-[436px] even:justify-self-end">
      <Image
        src={imgSrc}
        alt="CalWest ERP web application overview page"
        width={436}
        height={273}
        className="rounded-t-lg"
      />
      <div className="flex flex-col gap-6 px-8 py-6">
        <div>
          <div className="mb-3">
            <Text variant="h5">{title}</Text>
            {subtitle}
          </div>
          <div className="flex flex-row gap-4">{iconLinks}</div>
        </div>
        <div className="h-[1px] bg-lavender-500" />
        <div>
          <Text variant="h6" className="mb-3">
            Tech Stack
          </Text>
          <div className="flex flex-col gap-2">
            {techStacks.map((stack) => (
              <TechStackSection
                key={stack.title}
                items={stack.items}
                title={stack.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
