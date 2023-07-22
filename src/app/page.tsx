"use client";

import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="bg-myblue-500 text-slate-100 min-h-screen">
        <div className="flex">
          <div className="w-1/2">
            <h3 className="text-6xl font-bold">Unlock Limitless LinkedIn Potential with Kouim</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi,
              minus odio rerum dolor tenetur laudantium veniam labore esse,
              impedit ad modi nesciunt aut laborum quibusdam corrupti cum vel
              eum.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
