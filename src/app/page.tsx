import {
  baseKCs,
  basePBs,
  middleAPBs,
  middleBPBs,
  topPBs,
} from "@/components/location-sections/data";
import { Item } from "@/components/location-sections/item";
import { ItemSection } from "@/components/location-sections/item-section";

export default function Home() {
  return (
    <div className="">
      <h1 className="pb-2 text-3xl font-bold md:text-5xl">
        Dashboard Ops: Warzone EE
      </h1>
      <p className="pb-12">
        Click the location cards to mark which places have already been checked.
      </p>
      <ItemSection title="1st Floor" items={basePBs} />
      <ItemSection itemType="kc" items={baseKCs} />
      <ItemSection title="2nd Floor" items={middleAPBs} />
      <ItemSection title="3rd Floor" items={middleBPBs} />
      <ItemSection title="Roof" items={topPBs} />
      <section className="mx-auto max-w-lg">
        <h2 className="pb-3 text-2xl font-medium">Pool Table Tower</h2>
        <Item
          imgSrc="/tower-ee/pool-table-tower.png"
          itemLocation="Pool table tower for reference of other towers and location of secret room."
        />
      </section>
    </div>
  );
}
