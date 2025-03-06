import Link from "next/link";
import Logo from "@/components/logo";
import MobileNav from "@/components/header/mobile-nav";
import DesktopNav from "@/components/header/desktop-nav";
import { ModeToggle } from "@/components/menu-toggle";


const navItems = [
  {
    label: "Home",
    href: "/",
    target: false,
    key: "home",
  },
  {
    label: "Azienda",
    href: "/azienda",
    target: false,
    key: "azienda",
  },
  {
    label: "Pubblica Amministrazione",
    href: "/ente-pubblico",
    target: false,
    key: "pubblica-amministrazione",
  },
  {
    label: "Information Center",
    href: "https://news.integys.com/",
    target: true,
    key: "information-center",
  },
];

export default async function Header() {


  return (
    <header className="sticky top-0 w-full border-border/40 bg-background/95 z-50">
      <div className="container flex items-center justify-between h-14">
        <Link href="/" aria-label="Home page">
          <div className="h-8">
            <Logo />
          </div>
        </Link>
        <div className="hidden xl:flex gap-7 items-center justify-between">
          <DesktopNav navItems={navItems} />
          <ModeToggle />
        </div>
        <div className="flex items-center xl:hidden">
          <ModeToggle />
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
