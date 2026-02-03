import Blocks from "@/components/blocks";
import { fetchSanityPageBySlug } from "../actions";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";

export const dynamic = "force-static";

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const slugPath = params.slug.join("/");
  const page = await fetchSanityPageBySlug({ slug: slugPath });

  if (!page) {
    notFound();
  }

  return generatePageMetadata({ page, slug: slugPath });
}

export default async function Page(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const slugPath = params.slug.join("/");
  const page = await fetchSanityPageBySlug({ slug: slugPath });

  if (!page) {
    notFound();
  }

  return <Blocks blocks={page?.blocks} />;
}
