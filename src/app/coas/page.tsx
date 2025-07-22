import { COAStrategy } from "@/features/coa-strategy/coa-strategy";
import { coaStrategies } from "@/features/coa-strategy/data";

export default function COAPage() {
  return (
    <div className="">
      <main className="px-4 pt-12 md:px-24">
        <h1 className="pb-12 text-3xl font-bold md:text-5xl">COA Variations</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {coaStrategies.map((strategy, index) => (
            <COAStrategy
              key={index}
              title={strategy.title}
              subtitle={strategy.subtitle}
              colorClass={strategy.colorClass}
              bulletColorClass={strategy.bulletColorClass}
              items={strategy.items}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
