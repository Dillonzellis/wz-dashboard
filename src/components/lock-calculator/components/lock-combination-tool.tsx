"use client";

import { CombinationInput } from "./combination-input";
import { CombinationGrid } from "./combination-grid";
import { useCombinations } from "../hooks/use-combinations";
import { Button } from "@/components/ui/button";

export function LockCombinationTool() {
  const {
    input,
    result,
    isCalculating,
    clickedCombinations,
    handleInputChange,
    generateCombinations,
    handleCombinationClick,
    resetCalculator,
  } = useCombinations();

  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <CombinationInput
        input={input}
        isCalculating={isCalculating}
        onInputChange={handleInputChange}
        onGenerate={generateCombinations}
      />
      {result && (
        <CombinationGrid
          result={result}
          clickedCombinations={clickedCombinations}
          onCombinationClick={handleCombinationClick}
        />
      )}
      <Button variant="destructive" size="large" onClick={resetCalculator}>
        Reset
      </Button>
    </div>
  );
}
