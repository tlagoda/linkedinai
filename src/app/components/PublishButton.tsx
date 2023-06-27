import { LinkedInService } from "@/services/linkedin.service";

export default function PublishButton({ content }: { content: string }) {
  const share = async () => {
    LinkedInService.shareOnLinkedIn(content);
  };

  return (
    <button
      onClick={share}
      className="text-xl font-bold w-1/2 mx-auto h-3/5 py-10 border-violet-500 border-4 text-slate-100 rounded-3xl transition-colors duration-200 flex items-center justify-center hover:bg-purple-800 hover:text-white hover:border-purple-800"
    >
      Publish!{" "}
      <span role="img" aria-label="Rocket" className="ml-2">
        🚀
      </span>
    </button>
  );
}
