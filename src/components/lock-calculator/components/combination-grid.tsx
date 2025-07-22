"use client";

import { CombinationResult } from "../lib/types";

interface CombinationGridProps {
  result: CombinationResult;
  clickedCombinations: Set<string>;
  onCombinationClick: (combo: string) => void;
}

export function CombinationGrid({
  result,
  clickedCombinations,
  onCombinationClick,
}: CombinationGridProps) {
  if (!result || result.combinations.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="mb-4 text-xl font-bold">
        Possible Combinations ({result.combinations.length} found):
      </h2>
      <div className="grid max-h-96 grid-cols-2 gap-2 overflow-y-auto rounded border border-neutral-600 bg-neutral-800 p-4 md:grid-cols-4 lg:grid-cols-6">
        {result.combinations.map((combo, index) => (
          <div
            key={index}
            className={`cursor-pointer rounded p-2 text-center font-mono text-lg transition-colors ${
              clickedCombinations.has(combo)
                ? "bg-teal-600 hover:bg-teal-500"
                : "bg-neutral-700 hover:bg-neutral-600"
            }`}
            onClick={() => onCombinationClick(combo)}
            title="Click to mark as tried"
          >
            {combo}
          </div>
        ))}
      </div>
      <p className="mt-2 text-sm text-gray-400">
        Click any combination to mark it as tried
      </p>
    </div>
  );
}
