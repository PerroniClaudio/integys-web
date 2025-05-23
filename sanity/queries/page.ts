import { groq } from "next-sanity";
import { hero1Query } from "./hero/hero-1";
import { hero2Query } from "./hero-2/hero-2";
import { metricsQuery } from "./metrics/metrics";
import { sectionHeaderQuery } from "./section-header";
import { splitRowQuery } from "./split-row";
import { gridRowQuery } from "./grid/grid-row";
import { carousel1Query } from "./carousel/carousel-1";
import { carousel2Query } from "./carousel/carousel-2";
import { timelineQuery } from "./timeline";
import { cta1Query } from "./cta/cta-1";
import { logoCloud1Query } from "./logo-cloud/logo-cloud-1";
import { faqsQuery } from "./faqs";
import { formNewsletterQuery } from "./forms/newsletter";
import { promoCardQuery } from "./promo-card/promo-card";
import { contactformQuery } from "./contactform/contactform";

export const PAGE_QUERY = groq`
  *[_type == "page" && slug.current == $slug][0]{
    blocks[]{
      ${hero1Query}
      ${hero2Query}
      ${metricsQuery}
      ${promoCardQuery}
      ${contactformQuery}
      ${sectionHeaderQuery}
      ${splitRowQuery}
      ${gridRowQuery}
      ${carousel1Query}
      ${carousel2Query}
      ${timelineQuery}
      ${cta1Query}
      ${logoCloud1Query}
      ${faqsQuery}
      ${formNewsletterQuery}
    },
    meta_title,
    meta_description,
    noindex,
    ogImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      },
    },
    logo {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      },
    }
  }
`;
