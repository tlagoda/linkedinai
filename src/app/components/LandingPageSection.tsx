import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="flex mt-10 mb-40 w-2/3 mx-auto">
      {isImageOnLeft ? (
        <>
          <div className="w-1/2 flex justify-center items-center">
            <Image
              className="rounded-xl"
              src={imageSrc}
              alt={imageAlt}
              width={450}
              height={450}
            />
          </div>
          <div className="w-1/2 mx-10 flex flex-col justify-center">
            <h3 className="text-6xl mb-10 font-bold">{headline}</h3>
            <p className="mb-10">{paragraph}</p>
            <Link href="/signup">
              <button className="w-1/3 bg-emerald-400 rounded-full py-4 hover:bg-emerald-500">
                {buttonText}
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="w-1/2 mx-10 flex flex-col justify-center">
            <h3 className="text-6xl mb-10 font-bold">{headline}</h3>
            <p className="mb-10">{paragraph}</p>
            <Link href="/signup">
              <button className="w-1/3 bg-emerald-400 rounded-full py-4 hover:bg-emerald-500">
                {buttonText}
              </button>
            </Link>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Image
              className="rounded-xl"
              src={imageSrc}
              alt={imageAlt}
              width={450}
              height={450}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default LandingPageSection;
