"use client";

import { useState } from "react";

export default function ToolsPage() {
  const [input, setInput] = useState("");
  const [combinations, setCombinations] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [clickedCombinations, setClickedCombinations] = useState<Set<string>>(
    new Set(),
  );

  const generateCombinations = () => {
    if (input.length !== 6) {
      alert("Please enter exactly 6 characters");
      return;
    }

    setIsCalculating(true);

    // Convert input to array and identify unknown positions
    const pattern = input.toUpperCase().split("");
    const unknownPositions: number[] = [];
    const usedDigits = new Set<string>();

    // Find unknown positions and collect used digits
    pattern.forEach((char, index) => {
      if (char === "X" || char === "?") {
        unknownPositions.push(index);
      } else if (/[0-9]/.test(char)) {
        usedDigits.add(char);
      } else {
        alert("Please use only digits (0-9) and X for unknown positions");
        setIsCalculating(false);
        return;
      }
    });

    // Get available digits (not already used)
    const availableDigits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ].filter((digit) => !usedDigits.has(digit));

    if (unknownPositions.length > availableDigits.length) {
      alert("Not enough available digits for the unknown positions");
      setIsCalculating(false);
      return;
    }

    // Generate all permutations of available digits for unknown positions
    const permutations = getPermutations(
      availableDigits,
      unknownPositions.length,
    );
    const results: string[] = [];

    permutations.forEach((perm) => {
      const combination = [...pattern];
      unknownPositions.forEach((pos, i) => {
        combination[pos] = perm[i];
      });
      results.push(combination.join(""));
    });

    setCombinations(results);
    setClickedCombinations(new Set()); // Reset clicked combinations when generating new ones
    setIsCalculating(false);
  };

  // Function to generate permutations
  const getPermutations = (arr: string[], length: number): string[][] => {
    if (length === 0) return [[]];
    if (length === 1) return arr.map((item) => [item]);

    const result: string[][] = [];

    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const remaining = arr.filter((_, index) => index !== i);
      const perms = getPermutations(remaining, length - 1);

      perms.forEach((perm) => {
        result.push([current, ...perm]);
      });
    }

    return result;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();

    // Only allow digits and X, max 6 characters
    if (/^[0-9X]*$/.test(value) && value.length <= 6) {
      // Check for duplicate digits (but allow multiple X's)
      const digits = value.split("").filter((char) => char !== "X");
      const uniqueDigits = new Set(digits);

      // Only update if no duplicate digits found
      if (digits.length === uniqueDigits.size) {
        setInput(value);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      generateCombinations();
    }
  };

  const handleCombinationClick = (combo: string) => {
    setClickedCombinations((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(combo)) {
        newSet.delete(combo); // Remove if already clicked
      } else {
        newSet.add(combo); // Add if not clicked
      }
      return newSet;
    });
  };

  const resetCalculator = () => {
    setInput("");
    setCombinations([]);
    setClickedCombinations(new Set());
  };

  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <div>
        <h1 className="mb-4 text-3xl font-bold">Lock Combination Tool</h1>
        <p className="mb-6 text-gray-300">
          Enter a 6-digit combination with X for unknown positions. Example:
          012X45 will show all possible combinations where the 4th digit is
          unknown.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="combination"
            className="mb-2 block text-sm font-medium"
          >
            Enter combination pattern:
          </label>
          <input
            id="combination"
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="w-full border border-neutral-600 bg-neutral-800 p-4 font-mono text-5xl tracking-widest text-neutral-100"
            placeholder="012X45"
            maxLength={6}
          />
          <p className="mt-1 text-sm text-gray-400">
            Use digits 0-9 and X for unknown positions. {input.length}/6
            characters
          </p>
        </div>

        <button
          onClick={generateCombinations}
          disabled={isCalculating || input.length !== 6}
          className="cursor-pointer border border-neutral-600 bg-neutral-800 p-4 text-2xl text-neutral-100 transition-all duration-200 hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isCalculating ? "Calculating..." : "Generate Combinations"}
        </button>
      </div>

      {combinations.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-bold">
            Possible Combinations ({combinations.length} found):
          </h2>
          <div className="grid max-h-96 grid-cols-2 gap-2 overflow-y-auto rounded border border-neutral-600 bg-neutral-800 p-4 md:grid-cols-4 lg:grid-cols-6">
            {combinations.map((combo, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded p-2 text-center font-mono text-lg transition-colors ${
                  clickedCombinations.has(combo)
                    ? "bg-teal-600 hover:bg-teal-500"
                    : "bg-neutral-700 hover:bg-neutral-600"
                }`}
                onClick={() => handleCombinationClick(combo)}
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
      )}

      <div className="mt-8 text-sm text-gray-400">
        <h3 className="mb-2 font-bold">How it works:</h3>
        <ul className="list-inside list-disc space-y-1">
          <li>Enter a 6-digit pattern using numbers 0-9 and X for unknowns</li>
          <li>All digits in the final combination must be unique</li>
          <li>The tool will generate all valid permutations</li>
          <li>
            Example: &quot;12X4X6&quot; will find all combinations where
            positions 3 and 5 are unknown
          </li>
        </ul>
      </div>

      <button
        onClick={resetCalculator}
        className="cursor-pointer border border-neutral-600 bg-red-800 p-4 text-2xl text-neutral-100 transition-all duration-200 hover:bg-red-600"
      >
        Reset Calculator
      </button>
    </div>
  );
}
