"use client";

import { Button } from "@/components/ui/button";
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
      <Button
        onClick={calculateAverage}
        disabled={!players || !squads || squads === "0" || squads === "1"}
        className="mb-3"
      >
        Calculate
      </Button>
      <Button onClick={handleReset} variant="destructive">
        Reset
      </Button>
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
