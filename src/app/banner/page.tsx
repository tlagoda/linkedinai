export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="h-screen w-screen bg-gray-900 pt-4">
        <div className="flex items-center justify-between mx-16">
          <h1 className="text-3xl text-slate-100 font-bold">Sumariz.ai</h1>
          <ul className="text-slate-100 text-xl flex justify-evenly items-center w-4/12">
            <li className="hover:underline hover:cursor-pointer">Product</li>
            <li className="hover:underline hover:cursor-pointer">Examples</li>
            <li className="hover:underline hover:cursor-pointer">Pricing</li>
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
      </div>
    </div>
  );
}
