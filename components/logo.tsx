"use client";
import { useLogo } from "@/context/LogoContext";

export default function Logo() {
  const logoUrl = useLogo();

  if (!logoUrl) {
    return <div>
      {/* Preferisco non far vedere la scritta loading */}
    </div>;
  }

  return (
    <img src={logoUrl} alt="Logo" className="max-h-full" />
  );
}
