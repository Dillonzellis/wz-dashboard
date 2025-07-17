import { coaStrategies } from "../data/coas";

interface COAStrategyProps {
  title: string;
  subtitle: string;
  colorClass: string;
  bulletColorClass: string;
  items: string[];
}

const COAStrategy = ({
  title,
  subtitle,
  colorClass,
  bulletColorClass,
  items,
}: COAStrategyProps) => {
  return (
    <section>
      <h2 className={`pb-3 text-lg font-semibold md:text-xl ${colorClass}`}>
        {title} <span className="text-sm text-neutral-300">({subtitle})</span>
      </h2>
      <div className="border border-neutral-700 bg-neutral-800 p-4">
        <ul className="space-y-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className={`${bulletColorClass} mt-0.5 mr-2`}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

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
