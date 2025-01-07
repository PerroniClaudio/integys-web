// promo-card component file

import PortableTextRenderer from "@/components/portable-text-renderer";
import { urlFor } from "@/sanity/lib/image";

function PromoCard({
    title,
    description,
    background_image,
} : {
    title: string,
    description: any,
    background_image: Sanity.Image,
}) {

    let backgroundImage = background_image ? urlFor(background_image.asset).url() : '';
    let insideClassName = "absolute inset-0 bg-black bg-opacity-60  flex flex-col items-center justify-center";
    if(!backgroundImage) {
        insideClassName = "absolute inset-0 bg-foreground  flex flex-col items-center justify-center"
    }

    return (
        <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={insideClassName}>
                <div className="text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
                    {description && <PortableTextRenderer value={description} />}
                </div>
            </div>
        </div>
    )
}
export default PromoCard