import { CircleIcon } from "@/components/icons";
import { Text } from "@/components/text";

export function ExperienceSection() {
  return (
    <section id="experience" className="flex flex-col gap-6 scroll-mt-[102px]">
      <Text
        className="w-fit pb-2 border-b-4 border-lavender-500 mb-8"
        variant="h2"
      >
        Experience
      </Text>
      <ul>
        <li className="relative">
          <div className="w-[2px] bg-gradient-to-b from-lavender-500 to-background absolute left-[5px] top-3 h-full -z-10" />
          <div className="flex gap-4">
            <div className="h-[22.08px] md:h-[26.49px] flex justify-center items-center">
              <CircleIcon width={12} height={12} />
            </div>
            <div id="calwest" className="scroll-mt-[102px]">
              <Text variant="h5">CalWest Manufacturing & LSK Suspension</Text>
              <Text className="!font-semibold mb-2" variant="body1">
                Full Stack Software Engineer
              </Text>
              <Text
                className="!font-semibold text-gray-400 mb-2"
                variant="body2"
              >
                March 2024 -
              </Text>
              <Text className="!font-semibold" variant="body1">
                CalWest Manufacturing
              </Text>
              <Text className="mb-4" variant="body1">
                Solely designed, developed, deployed, and maintained an
                Enterprise Resource Planning (ERP) web application for job and
                shop management. Created using React.js and Django REST
                Framework, and deployed to Amazon Web Services GovCloud.
                Streamlined the entire job process from start to finish,
                increased overall shop efficiency, identified departments that
                were not meeting job quotas, and increased the profitability of
                the company.
              </Text>
              <Text className="!font-semibold" variant="body1">
                LSK Suspension
              </Text>
              <Text variant="body1">
                Initiated a move from an outsourced e-commerce website to an
                in-house one. Assisted the owner in implementing his design for
                the website and creating a RESTful API using React.js and Django
                REST Framework. Implemented authentication using Auth0,
                developed the checkout process using Stripe, optimized the
                responsiveness of the website, and handled deployment to Amazon
                Web Services. Transformed the design of the webiste, decreased
                the cost of maintaining the website, and eliminated long wait times
                for updates.
              </Text>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
