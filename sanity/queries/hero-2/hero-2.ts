import { groq } from "next-sanity";

export const hero2Query = groq`
  _type == "hero-2" => {
   _type,
    tagLine,
    title,
    title_left,
    title_right,
    image_left{
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
    image_right{
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
    
    body
  },
`;
