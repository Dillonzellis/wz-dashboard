interface COAStrategyProps {
  title: string;
  subtitle: string;
  colorClass: string;
  bulletColorClass: string;
  items: string[];
}

export const COAStrategy = ({
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
