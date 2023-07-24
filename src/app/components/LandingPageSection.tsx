import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LandingPageSection = ({
  headline,
  paragraph,
  buttonText,
  imageSrc,
  imageAlt,
  isImageOnLeft,
}: {
  headline: string;
  paragraph: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  isImageOnLeft: boolean;
}) => {
  const [tailwindMd, setTailwindMd] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setTailwindMd(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full mx-auto flex flex-col md:flex-row mt-10 mb-10 md:mb-40 md:w-2/3 md:mx-auto">
      {isImageOnLeft ? (
        <>
          <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
            <Image
              className="rounded-xl"
              src={imageSrc}
              alt={imageAlt}
              width={tailwindMd ? 450 : 350}
              height={tailwindMd ? 450 : 350}
            />
          </div>
          <div className="md:w-1/2 mx-8 md:mx-10 flex flex-col justify-center">
            <h3 className="text-5xl md:text-6xl mb-10 font-bold">{headline}</h3>
            <p className="mb-10 text-justify md:text-left">{paragraph}</p>
            <Link
              href="/signup"
              className="mb-4 md:mb-0 flex justify-center md:block"
            >
              <button className="w-1/3 bg-emerald-400 rounded-full py-4 hover:bg-emerald-500">
                {buttonText}
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 mx-8 md:mx-10 flex flex-col justify-center">
            <h3 className="text-5xl md:text-6xl mb-10 font-bold">{headline}</h3>
            <p className="mb-10 text-justify md:text-left">{paragraph}</p>
            <Link
              href="/signup"
              className="mb-8 md:mb-0 flex justify-center md:block"
            >
              <button className="w-1/3 bg-emerald-400 rounded-full py-4 hover:bg-emerald-500">
                {buttonText}
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <Image
              className="rounded-xl"
              src={imageSrc}
              alt={imageAlt}
              width={tailwindMd ? 450 : 350}
              height={tailwindMd ? 450 : 350}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default LandingPageSection;
