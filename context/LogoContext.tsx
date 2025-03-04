"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchSanityLogo } from "@/app/(main)/actions";
import { urlFor } from "@/sanity/lib/image";

interface LogoContextType {
  logoUrl: string | null;
}

const LogoContext = createContext<LogoContextType | undefined>(undefined);

export const LogoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    async function getLogo() {
      const data = await fetchSanityLogo();
      const url = data?.logo?.asset ? urlFor(data.logo.asset).url() : null;
      setLogoUrl(url);
    }

    getLogo();
  }, []);

  return (
    <LogoContext.Provider value={{ logoUrl }}>
      {children}
    </LogoContext.Provider>
  );
};

export const useLogo = () => {
  const context = useContext(LogoContext);
  if (context === undefined) {
    throw new Error("useLogo must be used within a LogoProvider");
  }
  return context.logoUrl;
};
