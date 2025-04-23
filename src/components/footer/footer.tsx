import { useMemo } from "react";
import { Text } from "../text";
import { InteractiveTextLink, InteractiveTextLinkProps } from "../link";
import {
  ExternalLinkIcon,
  GithubIcon,
  DiscordIcon,
  LinkedinIcon,
} from "../icons";
import { CONTACT_EMAIL } from "@/app/globals";

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
              { linkProps: { href: "#home" }, content: "Home" },
              { linkProps: { href: "#experience" }, content: "Experience" },
              { linkProps: { href: "#projects" }, content: "Projects" },
              {
                linkProps: { href: "#projects" },
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
                  href: "https://github.com/darkk-helmet",
                },
                content: "Github",
                StartIcon: GithubIcon,
              },
              {
                linkProps: {
                  href: "https://www.linkedin.com/in/marty-mitchell/",
                },
                content: "LinkedIn",
                StartIcon: LinkedinIcon,
              },
              {
                linkProps: { href: "https://discord.gg/kFP6dMfD" },
                content: "Discord",
                StartIcon: DiscordIcon,
              },
            ]}
          />
          <FooterNav
            title="Contact"
            items={[
              {
                linkProps: { href: `mailto:${CONTACT_EMAIL}` },
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
