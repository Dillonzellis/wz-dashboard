import BunkerCodes from "@/components/bunker-locations/bunker-codes/bunker-codes";
import BunkerMap from "@/components/bunker-locations/bunker-map";
import { MainHeading } from "@/components/ui/main-heading";

export default function BunkerPage() {
  return (
    <div>
      <MainHeading>Bunkers</MainHeading>
      <section className="flex flex-col items-start gap-4 lg:flex-row">
        <BunkerMap />
        <BunkerCodes />
      </section>
    </div>
  );
}
