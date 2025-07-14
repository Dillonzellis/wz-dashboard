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
      <h2 className={`text-lg md:text-xl font-semibold pb-3 ${colorClass}`}>
        {title} <span className="text-neutral-300 text-sm">({subtitle})</span>
      </h2>
      <div className="bg-neutral-800 border border-neutral-700 p-4">
        <ul className="space-y-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className={`${bulletColorClass} mr-2 mt-0.5`}>•</span>
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
      <main className="px-4 md:px-24 pt-12">
        <h1 className="text-3xl md:text-5xl pb-12 font-bold">COA Variations</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
