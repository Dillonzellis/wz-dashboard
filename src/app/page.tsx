import { Item } from "./components/LocationSections/Item";
import { ItemSection } from "./components/LocationSections/ItemSection";
import { baseKCs, basePBs, middlePBs, topPBs } from "./data/itemData";

export default function Home() {
  return (
    <div className="">
      <main className="px-4 md:px-24 pt-12">
        <h1 className="text-3xl md:text-5xl pb-2 font-bold">
          Dashboard Ops: Warzone EE
          <br /> Kyle shut the hell up
        </h1>
        <p className="pb-12 ">
          Click the locations cards to mark which places have already been
          checked
        </p>
        <section className="pb-12">
          <h2 className="md:text-4xl text-2xl font-semibold pb-4">
            Base Floor
          </h2>
          <div className="flex flex-col gap-3">
            <ItemSection itemType="pb" items={basePBs} />
            <ItemSection itemType="kc" items={baseKCs} />
          </div>
        </section>
        <section className="pb-12">
          <h2 className="md:text-4xl text-2xl pb-3 font-semibold">
            Middle Floor
          </h2>
          <div className="flex flex-col gap-3">
            <ItemSection itemType="pb" items={middlePBs} />
          </div>
        </section>
        <section className="pb-12">
          <h2 className="md:text-4xl text-2xl font-semibold pb-3">Top Floor</h2>
          <div className="flex flex-col gap-3">
            <ItemSection itemType="pb" items={topPBs} />
          </div>
        </section>
        <section>
          <h2 className="text-2xl pb-3 font-medium">Pool Table Tower</h2>
          <Item
            imgSrc="/pool-table-tower.png"
            itemLocation="Pool Table for reference of other towers and location of secret room"
          />
        </section>
      </main>
    </div>
  );
}
