import Link from "next/link";
import { Button, IconButton } from "../button";
import { InteractiveTextLink } from "../link";
import { CloseIcon, MenuIcon } from "../icons";
import { useCallback, useEffect, useState } from "react";
import { CONTACT_EMAIL } from "@/app/globals";

export function NavItems() {
  const [darkenBg, setDarkenBg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMenuTransitioning, setIsMenuTransitioning] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setMenuOpen(true);
    setIsMenuTransitioning(true);
    setTimeout(() => {
      setIsMenuTransitioning(false);
    }, 300);
  }, []);

  const handleCloseMenu = useCallback(() => {
    if (!menuOpen) return;
    setMenuOpen(false);
    setIsMenuTransitioning(true);
    setDarkenBg(false);
    setTimeout(() => {
      setIsMenuTransitioning(false);
    }, 300);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      setDarkenBg(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const links = (
    <>
      <InteractiveTextLink
        content="Home"
        linkProps={{ href: "#home", onClick: handleCloseMenu }}
      />
      <InteractiveTextLink
        content="Experience"
        linkProps={{ href: "#experience", onClick: handleCloseMenu }}
      />
      <InteractiveTextLink
        content="Projects"
        linkProps={{ href: "#projects", onClick: handleCloseMenu }}
      />
      <InteractiveTextLink
        content="Resume"
        linkProps={{ href: "#", onClick: handleCloseMenu }}
      />
      <Link href={`mailto:${CONTACT_EMAIL}`}>
        <Button variant="small">Contact</Button>
      </Link>
    </>
  );

  return (
    <>
      <nav className="hidden md:flex gap-8 flex-row items-center">{links}</nav>
      <div className="flex md:hidden h-[36px] items-center">
        <IconButton
          className="w-6 h-6"
          Icon={MenuIcon}
          iconProps={{
            onClick: handleOpenMenu,
          }}
        />
      </div>
      {(menuOpen || isMenuTransitioning) && (
        <div
          className={`${
            darkenBg ? "opacity-100" : "opacity-0"
          } fixed top-0 left-0 w-full h-full z-0 bg-background-50 transition-opacity duration-300`}
        />
      )}
      <div
        className={`fixed top-0 ${
          menuOpen ? "right-0" : "-right-full"
        } h-full w-full flex flex-row z-50 transition-all duration-300`}
      >
        <div onClick={handleCloseMenu} className="basis-0 flex-grow z-10" />
        <nav
          className={`basis-0 flex-grow h-full max-w-60 flex flex-col gap-4 z-10 bg-background px-6 py-8 border-l-2 border-lavender-500`}
        >
          <IconButton
            className="self-end w-6 h-6"
            Icon={CloseIcon}
            iconProps={{
              onClick: handleCloseMenu,
            }}
          />
          {links}
        </nav>
      </div>
    </>
  );
}
