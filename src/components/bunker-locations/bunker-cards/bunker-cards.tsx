import { bunkerCardsData, shackCardsData } from "./bunker-img-data";
import Card from "@/components/ui/card/card";
import CardWrapper from "@/components/ui/card/card-wrapper";

export default function BunkerCards() {
  return (
    <section>
      <div className="pb-12">
        <div className="pb-2 text-2xl font-bold">Bunkers</div>
        <CardWrapper>
          {bunkerCardsData.map((bunker) => (
            <Card
              key={bunker.id}
              id={bunker.id}
              imgSrc={bunker.bunkerImgSrc}
              imgAlt={bunker.title}
              title={bunker.title}
              desc={bunker.desc}
            />
          ))}
        </CardWrapper>
      </div>
      <div>
        <div className="pb-2 text-2xl font-bold">Shacks</div>
        <CardWrapper>
          {shackCardsData.map((shack) => (
            <Card
              key={shack.id}
              id={shack.id}
              imgSrc={shack.bunkerImgSrc}
              imgAlt={shack.title}
              title={shack.title}
              desc={shack.desc}
            />
          ))}
        </CardWrapper>
      </div>
    </section>
  );
}
