// metrics component file

import { groq } from "next-sanity";

export const metricsQuery = groq`
_type == "metrics" => {
    _type,
    first_metric_name,
    first_metric_value,
    first_metric_image{
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
    second_metric_name,
    second_metric_value,
    second_metric_image{
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
    third_metric_name,
    third_metric_value,
    third_metric_image{
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
