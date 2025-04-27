import { Button } from "@/components/button";
import { GithubIcon, DiscordIcon, LinkedinIcon } from "@/components/icons";
import { IconLink } from "@/components/link";
import { Text } from "@/components/text";
import { ExperienceSection } from "@/sections/home/experience";
import { ProjectsSection } from "@/sections/home/projects";
import Image from "next/image";
import Link from "next/link";
import { URLS } from "./globals";

export default function Home() {
  return (
    <div className="flex flex-col gap-64">
      {/* Hero */}
      <div className="flex flex-col gap-16 max-w-screen-lg mx-auto">
        <Image
          alt="Portrait of Marty Mitchell"
          src={"/marty-portrait.webp"}
          width={240}
          height={240}
          className="rounded-full border-4 border-lavender-400 self-center"
        />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <Text className="inline" variant="h3">
              Hey there! I{"'"}m{" "}
              <p className="inline text-lavender-400">Marty Mitchell,</p> a full
              stack software engineer based out of Southern California.
            </Text>
            <Text className="text-gray-400" variant="body1">
              I{"'"}m skilled in designing and building web applications from
              the ground up, using languages and frameworks such as JavaScript,
              React, Python, and Django.
            </Text>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center h-16">
            <Link className="w-56 md:w-64" href={URLS.external.email}>
              <Button className="inline w-full">Send me a message</Button>
            </Link>
            <div className="hidden md:inline w-[1px] h-full bg-gray-600" />
            <div className="flex flex-row gap-6">
              <div className="w-7 h-7 md:w-8 md:h-8">
                <IconLink
                  href={URLS.external.github}
                  Icon={GithubIcon}
                />
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8">
                <IconLink
                  href={URLS.external.linkedin}
                  Icon={LinkedinIcon}
                />
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8">
                <IconLink
                  href={URLS.external.discord}
                  Icon={DiscordIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-64">
        <ExperienceSection />
        <ProjectsSection />
      </div>
    </div>
  );
}
