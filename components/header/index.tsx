"use client";

import Link from "next/link";
import Logo from "@/components/logo";
import MobileNav from "@/components/header/mobile-nav";
import DesktopNav from "@/components/header/desktop-nav";
import { ModeToggle } from "@/components/menu-toggle";
import LanguageSwitcher from "@/components/header/language-switcher";
import { usePathname } from "next/navigation";
import { Suspense } from "react";


const baseNavItems = [
  {
    key: "home",
    href: "/",
    target: false,
    label: { it: "Home", en: "Home" },
  },
  {
    key: "azienda",
    href: "/azienda",
    target: false,
    label: { it: "Azienda", en: "Company" },
  },
  {
    key: "pubblica-amministrazione",
    href: "/ente-pubblico",
    target: false,
    label: { it: "Pubblica Amministrazione", en: "Public Administration" },
  },
  {
    key: "information-center",
    href: "https://news.integys.com/",
    target: true,
    label: { it: "Information Center", en: "Information Center" },
  },
];

function withEnPrefix(pathname: string) {
  if (pathname === "/") return "/en/";
  if (pathname.startsWith("/en/") || pathname === "/en") return pathname;
  return `/en${pathname}`;
}

export default function Header() {
  const pathname = usePathname() || "/";
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const navItems = baseNavItems.map((item) => ({
    key: item.key,
    target: item.target,
    href: item.target ? item.href : isEn ? withEnPrefix(item.href) : item.href,
    label: isEn ? item.label.en : item.label.it,
  }));
  const logoHref = isEn ? "/en/" : "/";

  return (
    <header className="sticky top-0 w-full border-border/40 bg-background/95 z-50">
      <div className="container flex items-center justify-between h-14">
        <Link href={logoHref} aria-label="Home page">
          <div className="h-8">
            <Logo />
          </div>
        </Link>
        <div className="hidden xl:flex gap-7 items-center justify-between">
          <DesktopNav navItems={navItems} />
          <Suspense fallback={<div className="h-8 w-10" />}>
            <LanguageSwitcher />
          </Suspense>
          <ModeToggle />
        </div>
        <div className="flex items-center xl:hidden">
          <Suspense fallback={<div className="h-8 w-10" />}>
            <LanguageSwitcher />
          </Suspense>
          <ModeToggle />
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
