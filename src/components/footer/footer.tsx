import { useMemo } from "react";
import { Text } from "../text";
import { InteractiveTextLink, InteractiveTextLinkProps } from "../link";
import {
  ExternalLinkIcon,
  GithubIcon,
  DiscordIcon,
  LinkedinIcon,
} from "../icons";
import { URLS } from "@/app/globals";

type FooterNavProps = {
  items: InteractiveTextLinkProps[];
  title: string;
};

function FooterNav({ items, title }: FooterNavProps) {
  return (
    <div className="flex flex-col gap-4">
      <Text className="!font-semibold" variant="body1">
        {title}
      </Text>
      {items.map((item) => (
        <InteractiveTextLink
          key={item.content}
          content={item.content}
          isExternal={item.isExternal}
          EndIcon={item.EndIcon}
          StartIcon={item.StartIcon}
          linkProps={item.linkProps}
        />
      ))}
    </div>
  );
}

export function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="border-t-2 border-lavender-500">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-16 pb-4 flex flex-col">
        <nav className="grid grid-cols-2 md:flex md:flex-row gap-10 gap-y-12 sm:gap-x-20 md:gap-40">
          {/* <Logo /> */}
          <FooterNav
            title="Explore"
            items={[
              { linkProps: { href: URLS.local.home }, content: "Home" },
              { linkProps: { href: URLS.local.experience }, content: "Experience" },
              { linkProps: { href: URLS.local.projects }, content: "Projects" },
              {
                linkProps: {
                  href: URLS.external.resume,
                },
                isExternal: true,
                content: "Resume",
                EndIcon: ExternalLinkIcon,
              },
            ]}
          />
          <FooterNav
            title="Socials"
            items={[
              {
                linkProps: {
                  href: URLS.external.github,
                },
                isExternal: true,
                content: "Github",
                StartIcon: GithubIcon,
              },
              {
                linkProps: {
                  href: URLS.external.linkedin,
                },
                isExternal: true,
                content: "LinkedIn",
                StartIcon: LinkedinIcon,
              },
              {
                linkProps: { href: URLS.external.discord },
                isExternal: true,
                content: "Discord",
                StartIcon: DiscordIcon,
              },
            ]}
          />
          <FooterNav
            title="Contact"
            items={[
              {
                linkProps: { href: URLS.external.email },
                content: "Email",
              },
            ]}
          />
        </nav>
        <Text className="self-center text-gray-400 mt-12" variant="body2">
          Copyright &copy; {currentYear} by Marty Mitchell
        </Text>
      </div>
    </footer>
  );
}
