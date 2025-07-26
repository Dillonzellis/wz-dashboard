"use client";

import { useKbCalc } from "../../hooks/use-kb-calc";
import { KbInputs } from "./kb-inputs";
import { KbResults } from "./kb-results";

export const KbCalculator = () => {
  const kbCalcState = useKbCalc();

  return (
    <>
      <KbInputs {...kbCalcState} />
      <KbResults {...kbCalcState} />
    </>
  );
};
