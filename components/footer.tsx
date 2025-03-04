import Link from "next/link";
import Logo from "@/components/logo";

const navItems = [
  {
    label: "Home",
    href: "/",
    target: false,
  },
  {
    label: "Blog",
    href: "/blog",
    target: false,
  },
  {
    label: "About",
    href: "/about",
    target: false,
  },
];

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <div className="bg-foreground dark:bg-background pb-5 xl:pb-5 py-8 text-gray-300">
        <div className="container grid lg:grid-cols-3">
          <div className="flex flex-col"></div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-12">
              <Logo />
            </div>
            <p className="text-xs font-thin">
              INTEGYS è una divisione iFortech
            </p>
            <img src="https://integys.com/assets/images/logo-white-ift.png" width="119" alt=""></img>
            <p className="text-xs font-thin">VIA PISA 250 - SESTO SAN GIOVANNI - 20099 (MI)</p>
            <p className="text-xs font-thin">&copy; {getCurrentYear()} INTEGYS. All rights reserved.</p>
          </div>
          <div className="flex flex-col"></div>
        </div>
      </div>
    </footer>
  );
}
