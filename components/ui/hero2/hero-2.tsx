import { urlFor } from "@/sanity/lib/image";
import PortableTextRenderer from "@/components/portable-text-renderer";

export default function Hero2({
  title,
  title_left,
  title_right,
  body,
  image_left,
  image_right,
}: Partial<{
  title: string;
  title_left: string;
  title_right: string;
  body: any;
  image_left: Sanity.Image;
  image_right: Sanity.Image;
}>) {


  return (
    <div className="dark:bg-background h-[80vh]">
      <div className="grid grid-cols-2 h-full relative">
        {image_left  && (
          <div
            className="relative bg-cover bg-center flex flex-col items-end justify-end"
            style={{ backgroundImage: `url(${urlFor(image_left.asset).url()})` }}
          >
          </div>
        )}
        {image_right  && (
          <div
            className="relative bg-cover bg-center flex flex-col items-end justify-end"
            style={{ backgroundImage: `url(${urlFor(image_right.asset).url()})` }}
          >

          </div>
        )}

        <div className="w-full flex flex-col gap-4 bg-black bg-opacity-60 py-8 absolute bottom-0 text-white">
          {title && (
            <div className="text-center w-full">
              <h1 className="leading-[0]">
                <span className="text-4xl font-semibold text-center uppercase">{title}</span>
              </h1>
            </div>
          )}

          <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center items-center">
              <p className="text-white font-bold text-3xl uppercase text-center px-2">{title_left}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-white font-bold text-3xl uppercase text-center px-2">{title_right}</p>
            </div>
          </div>

          {body && (
            <div className="text-4xl mt-6 text-center font-semibold w-full uppercase">
              <PortableTextRenderer value={body} />
            </div>
          )}
        </div>
       
      </div>
    </div>
  );
}
