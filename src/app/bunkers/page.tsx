import BunkerCards from "@/components/bunker-locations/bunker-cards/bunker-cards";
import BunkerCodes from "@/components/bunker-locations/bunker-codes/bunker-codes";
import ClickableImage from "@/components/ui/image-modal/clickable-image";
import { MainHeading } from "@/components/ui/main-heading";

export default function BunkerPage() {
  return (
    <div>
      <MainHeading>Bunkers</MainHeading>
      <section className="flex flex-col items-start gap-4 pb-12 lg:flex-row">
        <ClickableImage
          src="/bunker-locations/bunker-overview.jpg"
          alt="Bunker locations map"
          className="w-full max-w-[750px] object-contain"
          height={1291}
          width={1080}
        />
        <BunkerCodes />
      </section>
      <section>
        <BunkerCards />
      </section>
    </div>
  );
}
