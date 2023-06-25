import PublishButton from "./PublishButton";

export default function PublishSection() {
  return (
    <div className="text-slate-100 w-4/5 mx-auto h-full">
      <div>
        <h3 className="text-2xl text-center">
          Take it to{" "}
          <span className="text-violet-500 text-5xl font-bold">LinkedIn!</span>
        </h3>
        <p className="text-xs text-center mt-4">
          Connected as{" "}
          <span className="underline underline-offset-2">John Doe.</span>
        </p>
      </div>
      <div className="h-3/6 flex flex-col justify-around mt-10">
        <p className="text-justify mb-10">
          When your post is ready to <span>captivate</span> and{" "}
          <span>inspire</span> your audience, seize the moment by clicking the
          button below to publish it on LinkedIn. Let your voice be heard and
          make an <span>impact</span>!
        </p>
        <PublishButton />
      </div>
    </div>
  );
}
