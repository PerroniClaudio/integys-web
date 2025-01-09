import { fetchSanityLogo } from "@/app/(main)/actions";
import { urlFor } from "@/sanity/lib/image";

export default async function Logo() {

  let logoData = await fetchSanityLogo();

  if(!logoData) {
    return null;
  }

  let logourl = logoData.logo?.asset ? urlFor(logoData.logo.asset).url() : null;

  return (
    <div>
      <img src={logourl} alt="logo" className="w-32" />
    </div>
  );
}
