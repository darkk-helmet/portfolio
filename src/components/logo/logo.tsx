import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      className="hover:opacity-75 transition-opacity duration-300"
      href="#home"
    >
      <div className="relative w-[71.5px] h-[22px] md:w-[84.5px] md:h-[26px]">
        <Image
          alt="Marty Mitchell Logo"
          src={"/logo.webp"}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </Link>
  );
}
