// promo-card component file

import { groq } from "next-sanity";

export const promoCardQuery = groq`
_type == "promo-card" => {
    _type,
    title,
    description[]{
      ...,
      _type == "image" => {
        ...,
        asset->{
          _id,
          url,
          mimeType,
          metadata {
            lqip,
            dimensions {
              width,
              height
            }
          }
        }
      }
    },
    background_image{
        asset->{
            _id,
            url,
            mimeType,
            metadata {
                lqip,
                dimensions {
                    width,
                    height
                }
            }
        },
    },


},
`;
