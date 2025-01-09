"use server";
import { PAGE_QUERY } from "@/sanity/queries/page";
import { logoquery } from "@/sanity/queries/logo";
import { sanityFetch } from "@/sanity/lib/live";

export const fetchSanityPageBySlug = async ({
  slug,
}: {
  slug: string;
}): Promise<Sanity.Page> => {
  const { data } = await sanityFetch({
    query: PAGE_QUERY,
    params: { slug },
  });

  return data;
};

export const fetchSanityLogo = async (): Promise<Sanity.Page> => {

  const { data } = await sanityFetch({
    query: logoquery,
  });

  return data;

};