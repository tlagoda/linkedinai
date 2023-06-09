import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen font-mono">
      <div className="h-screen w-screen bg-gray-900 pt-4">
        <div className="flex items-center justify-between mx-16">
          <h1 className="text-3xl text-slate-100 font-bold hover:cursor-pointer">
            Sumariz.ai
          </h1>
          <ul className="text-slate-100 text-xl flex justify-evenly items-center w-4/12">
            <li className="hover:underline hover:cursor-pointer hover:underline-offset-4">
              Product
            </li>
            <li className="hover:underline hover:cursor-pointer hover:underline-offset-4">
              Examples
            </li>
            <li className="hover:underline hover:cursor-pointer hover:underline-offset-4">
              Pricing
            </li>
          </ul>
          <button
            type="button"
            className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Get started
          </button>{" "}
        </div>
        <div className="flex mt-20 mx-auto">
          <div className="w-6/12 px-8">
            <h2 className="text-8xl text-slate-100 text-center mb-10">
              Watch Less, Know More
            </h2>
            <p className="text-l text-slate-300 text-center">
              With our innovative software, transform your lengthy videos into
              concise, accurate text summaries within moments. No more wasting
              time watching endless hours of content - our intelligent
              algorithms do the heavy lifting, converting spoken words into
              written summaries that allow you to absorb the key points at your
              own pace.
              <br />
              It's time to revolutionize how you digest information. Transform
              videos into text summaries in an instant with our unique SaaS
              solution.
            </p>
          </div>
          <div className="w-6/12">
            <Image
              className="mx-auto"
              alt="screenshot"
              src="/screen-banner-1.png"
              width={600}
              height={320}
            />
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <button
            type="button"
            className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Summariz
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
