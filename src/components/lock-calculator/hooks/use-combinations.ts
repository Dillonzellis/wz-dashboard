"use client";

import { useState, useCallback } from "react";
import { generateCombinations } from "../lib/combination-utils";
import type { CombinationResult } from "../lib/types";

export function useCombinations() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<CombinationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [clickedCombinations, setClickedCombinations] = useState<Set<string>>(
    new Set(),
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.toUpperCase();

      if (/^[0-9X]*$/.test(value) && value.length <= 6) {
        const digits = value.split("").filter((char) => char !== "X");
        const uniqueDigits = new Set(digits);

        if (digits.length === uniqueDigits.size) {
          setInput(value);
        }
      }
    },
    [],
  );

  const generateCombinationsHandler = useCallback(async () => {
    setIsCalculating(true);

    try {
      const result = generateCombinations(input);
      setResult(result);
      setClickedCombinations(new Set());
    } catch (err) {
      alert(
        err instanceof Error
          ? err.message
          : "An error occurred reload the page",
      );
      setResult(null);
    } finally {
      setIsCalculating(false);
    }
  }, [input]);

  const handleCombinationClick = useCallback((combo: string) => {
    setClickedCombinations((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(combo)) {
        newSet.delete(combo);
      } else {
        newSet.add(combo);
      }
      return newSet;
    });
  }, []);

  const resetCalculator = useCallback(() => {
    setInput("");
    setResult(null);
    setClickedCombinations(new Set());
  }, []);

  return {
    input,
    result,
    isCalculating,
    clickedCombinations,
    handleInputChange,
    generateCombinations: generateCombinationsHandler,
    handleCombinationClick,
    resetCalculator,
  };
}
