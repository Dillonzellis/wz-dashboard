import { COAStrategy } from "@/components/coa-strategy/coa-strategy";
import { coaStrategies } from "@/components/coa-strategy/data";
import { MainHeading } from "@/components/ui/main-heading";

export default function COAPage() {
  return (
    <div>
      <MainHeading>COA Variations</MainHeading>
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
    </div>
  );
}
