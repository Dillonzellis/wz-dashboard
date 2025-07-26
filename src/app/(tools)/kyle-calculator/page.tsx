import { KbInputs } from "@/components/kyle-calculator/components/kb-inputs";
import { KbIntro } from "@/components/kyle-calculator/components/kb-intro";
import { KbResults } from "@/components/kyle-calculator/components/kb-results";

export default function KyleCalcPage() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center justify-center">
      <KbIntro />
      <KbInputs />
      <KbResults />
    </section>
  );
}
