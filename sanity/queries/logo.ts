import { groq } from "next-sanity";

export const logoquery = groq`
*[_type == "page" && slug.current == "index"][0]{
    logo{
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
}`