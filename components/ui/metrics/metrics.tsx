// metrics component file
import { urlFor } from "@/sanity/lib/image";

function Metrics({
    first_metric_name,
    first_metric_value,
    first_metric_image,
    second_metric_name,
    second_metric_value,
    second_metric_image,
    third_metric_name,
    third_metric_value,
    third_metric_image,
}: {
    first_metric_name: string;
    first_metric_value: string;
    first_metric_image: Sanity.Image;
    second_metric_name: string;
    second_metric_value: string;
    second_metric_image: Sanity.Image;
    third_metric_name: string;
    third_metric_value: string;
    third_metric_image: Sanity.Image;
}) {
  return (
    <div className="container dark:text-white text-foreground py-8">
        <div className="grid lg:grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-2">
                <img
                    src={urlFor(first_metric_image.asset).url()}
                    alt={first_metric_name}
                    className="h-20 w-20 object-cover"
                />
                <p className="font-thin text-lg uppercase">{first_metric_value}</p>
                <p className="font-bold text-lg uppercase text-center">{first_metric_name}</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <img
                    src={urlFor(second_metric_image.asset).url()}
                    alt={second_metric_name}
                    className="h-20 w-20 object-cover"
                />
                <p className="font-thin text-lg uppercase">{second_metric_value}</p>
                <p className="font-bold text-lg uppercase text-center">{second_metric_name}</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <img
                    src={urlFor(third_metric_image.asset).url()}
                    alt={third_metric_name}
                    className="h-20"
                />
                <p className="font-thin text-lg uppercase">{third_metric_value}</p>
                <p className="font-bold text-lg uppercase text-center">{third_metric_name}</p>
            </div>
        </div>
    </div>
  )
}
export default Metrics