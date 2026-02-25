import { MessageCircleCode } from "lucide-react";

interface CardProps {
  image: string;
  name: string;
  handle: string;
  text: string;
}

const cardsData: CardProps[] = [
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    name: "Issah Abdul-Razak",
    handle: "@issah_aa",
    text: "NFS set up our school invoicing in days. Parents get WhatsApp alerts automatically — no more chasing payments manually.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    name: "Fatima Seidu",
    handle: "@fatima_lifecare",
    text: "We tracked stock in notebooks before NFS. Now we have a live dashboard and alerts. Haven't run out of stock since.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    name: "Baba Musah",
    handle: "@baba_zara",
    text: "Content Factory keeps our pages active every week. We get walk-ins asking about products they saw online — that never happened before.",
  },
];

const VerifiedIcon = () => (
  <svg
    className="mt-0.5 fill-primary shrink-0"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
    />
  </svg>
);

const Card = ({ card }: { card: CardProps }) => (
  <div className="p-4 sm:p-5 rounded-xl mx-2 sm:mx-3 border border-grayc bg-btn-bg hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 w-64 sm:w-72 shrink-0 flex flex-col gap-3">
    <div className="flex items-center gap-2.5">
      <img
        className="size-10 rounded-full object-cover border border-grayc"
        src={card.image}
        alt={card.name}
      />
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <p className="font-gt text-sm text-white">{card.name}</p>
          <VerifiedIcon />
        </div>
        <span className="text-xs text-zinc-500">{card.handle}</span>
      </div>
    </div>
    <p className="text-xs sm:text-sm leading-relaxed text-secondary font-mono">
      "{card.text}"
    </p>
  </div>
);

export default function TestimonialSection() {
  return (
    <div className="py-20 md:py-40">
      <div className="text-center px-4 mb-12">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase text-primary mb-4">
          <MessageCircleCode className="size-3.5" />
          Testimonials
        </span>
        <h2 className="font-gt text-xl md:text-4xl text-white mb-3">
          What our clients are saying
        </h2>
        <p className="text-sm text-secondary max-w-md mx-auto leading-relaxed">
          Hear what businesses say about working with NorthStar Futuristic
          Solutions.
        </p>
      </div>

      <div
        id="testimonials"
        className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative scroll-m-48"
      >
        <div className="absolute left-0 top-0 h-full w-12 sm:w-20 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-8 sm:pt-10 pb-4 sm:pb-5">
          {[...cardsData, ...cardsData].map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-12 sm:w-20 md:w-35 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />
      </div>

      {/* <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative mt-2">
        <div className="absolute left-0 top-0 h-full w-12 sm:w-20 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-4 pb-4 sm:pb-5">
          {[...cardsData, ...cardsData].map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-12 sm:w-20 md:w-35 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />
      </div> */}
    </div>
  );
}
