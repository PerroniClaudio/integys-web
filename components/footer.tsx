"use client";

import Logo from "@/components/logo";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname() || "/";
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
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
              {isEn
                ? "INTEGYS is a division of iFortech"
                : "INTEGYS è una divisione iFortech"}
            </p>
            <p className="text-xs font-thin text-center">
              {isEn
                ? "SHARE CAPITAL € 40,000.00 fully paid - VAT & TAX ID: 07927140967 - REA: MI-1991600"
                : "CAP. SOC. € 40.000,00 I.V. - P.IVA E CF: 07927140967 - REA: MI-1991600"}
            </p>
            <p className="text-xs font-thin text-center">
              {isEn
                ? "REGISTERED AND OPERATING OFFICE: VIA PORDENONE 35 COLOGNO MONZESE - 20093 (MI)"
                : "SEDE LEGALE ED OPERATIVA: VIA PORDENONE 35 COLOGNO MONZESE - 20093 (MI)"}
            </p>
            <img src="https://integys.com/assets/images/logo-white-ift.png" width="119" alt=""></img>
            <p className="text-xs font-thin">&copy; {getCurrentYear()} INTEGYS. All rights reserved.</p>
          </div>
          <div className="flex flex-col"></div>
        </div>
      </div>
    </footer>
  );
}
