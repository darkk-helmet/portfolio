import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="hover:opacity-75 transition-opacity duration-300" href="#home">
      <Image
        alt="Marty Mitchell Logo"
        src={"/logo.webp"}
        width={84.5}
        height={26}
      />
    </Link>
  );
}
