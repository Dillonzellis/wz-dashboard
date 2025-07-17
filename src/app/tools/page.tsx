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
    setClickedCombinations((prev) => new Set([...prev, combo]));
  };

  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold mb-4">Lock Combination Tool</h1>
        <p className="text-gray-300 mb-6">
          Enter a 6-digit combination with X for unknown positions. Example:
          012X45 will show all possible combinations where the 4th digit is
          unknown.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="combination"
            className="block text-sm font-medium mb-2"
          >
            Enter combination pattern:
          </label>
          <input
            id="combination"
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="border border-neutral-600 bg-neutral-800 text-neutral-100 text-5xl p-4 w-full font-mono tracking-widest"
            placeholder="012X45"
            maxLength={6}
          />
          <p className="text-sm text-gray-400 mt-1">
            Use digits 0-9 and X for unknown positions. {input.length}/6
            characters
          </p>
        </div>

        <button
          onClick={generateCombinations}
          disabled={isCalculating || input.length !== 6}
          className="transition-all duration-200 text-2xl border border-neutral-600 bg-neutral-800 text-neutral-100 p-4 cursor-pointer hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isCalculating ? "Calculating..." : "Generate Combinations"}
        </button>
      </div>

      {combinations.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">
            Possible Combinations ({combinations.length} found):
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 max-h-96 overflow-y-auto bg-neutral-800 p-4 rounded border border-neutral-600">
            {combinations.map((combo, index) => (
              <div
                key={index}
                className={`font-mono text-lg text-center p-2 rounded transition-colors cursor-pointer ${
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
          <p className="text-sm text-gray-400 mt-2">
            Click any combination to mark it as tried (turns red)
          </p>
        </div>
      )}

      <div className="text-sm text-gray-400 mt-8">
        <h3 className="font-bold mb-2">How it works:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Enter a 6-digit pattern using numbers 0-9 and X for unknowns</li>
          <li>All digits in the final combination must be unique</li>
          <li>The tool will generate all valid permutations</li>
          <li>
            Example: &quot;12X4X6&quot; will find all combinations where
            positions 3 and 5 are unknown
          </li>
        </ul>
      </div>
    </div>
  );
}
