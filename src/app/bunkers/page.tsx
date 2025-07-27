import BunkerCodes from "@/components/bunker-locations/bunker-codes";
import { MainHeading } from "@/components/ui/main-heading";
import Image from "next/image";

export default function BunkerPage() {
  return (
    <div>
      <MainHeading>Bunkers</MainHeading>
      <section className="flex flex-col items-start gap-4 lg:flex-row">
        <Image
          src="/bunker-locations.jpg"
          alt=""
          className="w-full max-w-[750px] object-contain"
          height={1291}
          width={1080}
        />
        <BunkerCodes />
      </section>
    </div>
  );
}
