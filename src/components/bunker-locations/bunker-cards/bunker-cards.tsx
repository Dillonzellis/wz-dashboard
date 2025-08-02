import ClickableImage from "@/components/ui/image-modal/clickable-image";
import { bunkerCardsData, shackCardsData } from "./bunker-img-data";

export default function BunkerCards() {
  return (
    <section>
      <div className="pb-12">
        <div className="pb-2 text-2xl font-bold">Bunkers</div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {bunkerCardsData.map((bunker) => (
            <div
              key={bunker.id}
              id={bunker.id}
              className="border border-neutral-500"
            >
              <ClickableImage
                src={bunker.bunkerImgSrc}
                alt={bunker.title}
                className="w-full border-b border-neutral-500 object-cover"
                height={675}
                width={1200}
              />
              <div className="px-2 py-3">
                <div className="text-lg font-semibold">{bunker.title}</div>
                <div className="text-sm text-neutral-400">{bunker.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="pb-2 text-2xl font-bold">Shacks</div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {shackCardsData.map((shack) => (
            <div
              key={shack.id}
              id={shack.id}
              className="border border-neutral-500"
            >
              <ClickableImage
                src={shack.bunkerImgSrc}
                alt={shack.title}
                className="w-full object-cover"
                height={675}
                width={1200}
              />
              <div className="px-2 py-3">
                <div className="text-lg font-semibold">{shack.title}</div>
                <div className="text-sm text-neutral-400">{shack.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
