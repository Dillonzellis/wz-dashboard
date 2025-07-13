import MainNav from "./components/MainNav";
import { ItemSection } from "./components/LocationSections/ItemSection";
import { baseKCs, basePBs } from "./data/itemData";

export default function Home() {
  return (
    <div className="">
      <MainNav />
      <main className="px-8 md:px-24 pt-12">
        <h1 className="text-4xl pb-12 font-bold">Dashboard Ops: Warzone EE</h1>
        <h2 className="text-3xl pb-4">Base</h2>

        <section className="flex flex-col gap-12">
          <ItemSection itemType="pb" items={basePBs} />
          <ItemSection itemType="kc" items={baseKCs} />
        </section>
      </main>
    </div>
  );
}
