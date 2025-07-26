"use client";

import { KbCalcReturn } from "../../hooks/use-kb-calc";

type KbResultsProps = Pick<
  KbCalcReturn,
  "players" | "result" | "squads" | "handleReset" | "calculateAverage"
>;

export const KbResults = ({
  players,
  result,
  squads,
  handleReset,
  calculateAverage,
}: KbResultsProps) => {
  return (
    <>
      <button
        onClick={calculateAverage}
        disabled={!players || !squads || squads === "0" || squads === "1"}
        className="mb-4 w-full max-w-lg cursor-pointer border border-neutral-600 bg-neutral-800 p-3 text-xl font-semibold text-neutral-100 transition-all duration-200 hover:border-teal-600 hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-neutral-800"
      >
        Calculate
      </button>
      <button
        onClick={handleReset}
        className="w-full max-w-lg cursor-pointer border border-neutral-600 bg-red-800 p-3 text-xl font-semibold text-neutral-100 transition-all duration-200 hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-neutral-800"
      >
        Reset
      </button>
      {result !== null && (
        <div className="mt-8 w-full max-w-lg border border-neutral-600 bg-neutral-800 p-6">
          <div className="text-center">
            <p className="mb-2 text-gray-400">
              Average Enemy Players per Squad:
            </p>
            <p className="text-5xl font-bold text-teal-400">
              {result.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
