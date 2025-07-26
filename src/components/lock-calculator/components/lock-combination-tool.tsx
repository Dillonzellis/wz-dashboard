"use client";

import { CombinationInput } from "./combination-input";
import { CombinationGrid } from "./combination-grid";
import { useCombinations } from "../hooks/use-combinations";

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

      <button
        onClick={resetCalculator}
        className="cursor-pointer border border-neutral-600 bg-red-800 p-4 text-2xl text-neutral-100 transition-all duration-200 hover:bg-red-600"
      >
        Reset Calculator
      </button>
    </div>
  );
}
