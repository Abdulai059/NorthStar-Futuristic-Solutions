export default function CTASection() {
  return (
    <div className="border-y border-dashed border-grayc w-full max-w-5xl mx-auto px-10 sm:px-16 md:mt-40 mt-20">
      <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-grayc py-16 sm:py-20 -mt-10 -mb-10 w-full">
        <p className="md:text-base text-sm font-normal max-w-md text-secondary">
          Start automating today and join the growing NFS community.
        </p>

        <a
          href="/contact"
          className="flex items-center gap-2 rounded-lg py-3 px-8 bg-primary hover:bg-grayc transition text-white"
        >
          <span>Book A Demo</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
