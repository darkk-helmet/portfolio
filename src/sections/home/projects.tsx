import { Badge } from "@/components/badge/badge";
import {
  AmazonCognitoIcon,
  Auth0Icon,
  AWSIcon,
  DjangoIcon,
  FigmaIcon,
  GithubIcon,
  JavaScriptIcon,
  NextJSIcon,
  PostgreSQLIcon,
  ReactIcon,
  StripeIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
  VercelIcon,
  ViteIcon,
  WorldWideWebIcon,
} from "@/components/icons";
import { IconLink } from "@/components/link";
import { ProjectCard } from "@/components/project-card";
import { Text } from "@/components/text";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col gap-6 scroll-mt-[102px]">
      <Text
        className="w-fit pb-2 border-b-4 border-lavender-500 mb-8"
        variant="h2"
      >
        Projects
      </Text>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-16 justify-center">
        <ProjectCard
          imgSrc="/projects/portfolio-1.webp"
          title="Portfolio"
          subtitle={<Text variant="body2">Personal project</Text>}
          iconLinks={
            <div className="flex flex-row gap-4">
              <IconLink
                className="w-6 h-6"
                href="https://martymitchell.dev/"
                Icon={WorldWideWebIcon}
              />
              <IconLink
                className="w-6 h-6"
                href="https://martymitchell.dev/"
                Icon={GithubIcon}
              />
              <IconLink
                className="w-6 h-6"
                href="https://www.figma.com/design/9i340ObMqiG4yn6sq1Z9jg/Portfolio?node-id=0-1&t=04Ev2WbGLf9vdHAk-1"
                Icon={FigmaIcon}
              />
            </div>
          }
          techStacks={[
            {
              title: "Front-end",
              items: [
                {
                  icon: <TypeScriptIcon />,
                  title: "TypeScript",
                },
                {
                  icon: <NextJSIcon />,
                  title: "Next.js",
                },
                {
                  icon: <TailwindCSSIcon />,
                  title: "Tailwind CSS",
                },
              ],
            },
            {
              title: "Hosting",
              items: [
                {
                  icon: <VercelIcon />,
                  title: "Vercel",
                },
              ],
            },
          ]}
        />

        <ProjectCard
          imgSrc="/projects/calwest-erp-1.webp"
          title="Enterprise Resource Planner"
          subtitle={
            <Text variant="body2">
              Created at{" "}
              <Link href="#calwest" className="underline">
                CalWest Manufacturing
              </Link>
            </Text>
          }
          iconLinks={
            <div className="flex flex-row gap-4">
              <Badge className="text-yellow-400" position="bottom-right">
                <WorldWideWebIcon className="text-gray-500 w-6 h-6" />
              </Badge>
              <Badge className="text-yellow-400" position="bottom-right">
                <GithubIcon className="text-gray-500 w-6 h-6" />
              </Badge>
            </div>
          }
          techStacks={[
            {
              title: "Front-end",
              items: [
                {
                  icon: <JavaScriptIcon />,
                  title: "Javascript",
                },
                {
                  icon: <ReactIcon />,
                  title: "React.js",
                },
                {
                  icon: <ViteIcon />,
                  title: "Vite",
                },
              ],
            },
            {
              title: "Back-end",
              items: [
                {
                  icon: <DjangoIcon />,
                  title: "Django REST Framework",
                },
                {
                  icon: <PostgreSQLIcon />,
                  title: "PostgreSQL",
                },
              ],
            },
            {
              title: "Authentication",
              items: [
                {
                  icon: <AmazonCognitoIcon />,
                  title: "Amazon Cognito",
                },
              ],
            },
            {
              title: "Payment",
              items: [
                {
                  icon: <StripeIcon />,
                  title: "Stripe",
                },
              ],
            },
            {
              title: "Hosting",
              items: [
                {
                  icon: <AWSIcon />,
                  title: "Amazon Web Services (GovCloud)",
                },
              ],
            },
          ]}
        />

        <ProjectCard
          imgSrc="/projects/lsk-1.webp"
          title="E-Commerce Store"
          subtitle={
            <Text variant="body2">
              Created at{" "}
              <Link href="#calwest" className="underline">
                LSK Suspension
              </Link>
            </Text>
          }
          iconLinks={
            <div className="flex flex-row gap-4">
              <IconLink
                className="w-6 h-6"
                href="https://lsksuspension.com/"
                Icon={WorldWideWebIcon}
              />
              <Badge className="text-yellow-400" position="bottom-right">
                <GithubIcon className="text-gray-500 w-6 h-6" />
              </Badge>
            </div>
          }
          techStacks={[
            {
              title: "Front-end",
              items: [
                {
                  icon: <JavaScriptIcon />,
                  title: "Javascript",
                },
                {
                  icon: <ReactIcon />,
                  title: "React.js",
                },
                {
                  icon: <ViteIcon />,
                  title: "Vite",
                },
              ],
            },
            {
              title: "Back-end",
              items: [
                {
                  icon: <DjangoIcon />,
                  title: "Django REST Framework",
                },
                {
                  icon: <PostgreSQLIcon />,
                  title: "PostgreSQL",
                },
              ],
            },
            {
              title: "Authentication",
              items: [
                {
                  icon: <Auth0Icon />,
                  title: "Auth0",
                },
              ],
            },
            {
              title: "Payment",
              items: [
                {
                  icon: <StripeIcon />,
                  title: "Stripe",
                },
              ],
            },
            {
              title: "Hosting",
              items: [
                {
                  icon: <AWSIcon />,
                  title: "Amazon Web Services",
                },
              ],
            },
          ]}
        />
      </div>
    </section>
  );
}
