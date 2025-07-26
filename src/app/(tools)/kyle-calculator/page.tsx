import { KbIntro } from "@/components/kyle-calculator/components/kb-intro";
import { KbCalculator } from "@/components/kyle-calculator/components/kb-calc/kc-calc";

export default function KyleCalcPage() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center justify-center">
      <KbIntro />
      <KbCalculator />
    </section>
  );
}
