import Link from 'next/link';

interface CallToActionLinkProps {
  content: string;
  href: string;
}

export default function CallToActionLink({ content, href }: CallToActionLinkProps) {
  return (
    <Link 
      href={href}
      className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      {content}
    </Link>
  );
}
