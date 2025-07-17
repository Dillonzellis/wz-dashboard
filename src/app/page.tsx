import { Item } from "./components/LocationSections/Item";
import { ItemSection } from "./components/LocationSections/ItemSection";
import {
  baseKCs,
  basePBs,
  middleAPBs,
  middleBPBs,
  topPBs,
} from "./data/itemData";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-3xl md:text-5xl pb-2 font-bold">
        Dashboard Ops: Warzone EE
        <br /> Kyle shut the hell up
      </h1>
      <p className="pb-12 ">
        Click the locations cards to mark which places have already been checked
      </p>
      <ItemSection title="1st Floor" items={basePBs} />
      <ItemSection itemType="kc" items={baseKCs} />
      <ItemSection title="2nd Floor" items={middleAPBs} />
      <ItemSection title="3rd Floor" items={middleBPBs} />
      <ItemSection title="Roof" items={topPBs} />
      <section className="max-w-lg mx-auto">
        <h2 className="text-2xl pb-3 font-medium">Pool Table Tower</h2>
        <Item
          imgSrc="/pool-table-tower.png"
          itemLocation="Pool Table for reference of other towers and location of secret room"
        />
      </section>
    </div>
  );
}
