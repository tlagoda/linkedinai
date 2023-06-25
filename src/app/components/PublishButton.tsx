export default function PublishButton() {
  return (
    <button className="text-2xl font-bold w-1/2 mx-auto h-3/5 py-10 border-violet-500 border-8 text-slate-100 rounded-3xl transition-colors duration-200 flex items-center justify-center hover:bg-purple-800 hover:text-white hover:border-purple-800">
      Publish!{" "}
      <span role="img" aria-label="Rocket" className="ml-2">
        🚀
      </span>
    </button>
  );
}
