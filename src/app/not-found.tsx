import { Button } from "@/components/button";
import { Text } from "@/components/text";
import Link from "next/link";
import { URLS } from "./globals";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Text variant="h3">404 - Page Not Found</Text>
      <Text variant="body1">
        The page you are looking for does not exist or has been moved.
      </Text>
      <Link className="w-full max-w-64" href={URLS.local.home}>
        <Button className="w-full mt-8">Go to Home</Button>
      </Link>
    </div>
  );
}
