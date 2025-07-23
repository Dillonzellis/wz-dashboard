"use client";
import Image from "next/image";
import { useState } from "react";

export default function KyleCalcPage() {
  const [players, setPlayers] = useState("");
  const [squads, setSquads] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handlePlayerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers
    if (value === "" || /^\d+$/.test(value)) {
      setPlayers(value);
    }
  };

  const handleSquadInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers
    if (value === "" || /^\d+$/.test(value)) {
      setSquads(value);
    }
  };

  const calculateAverage = () => {
    const playerCount = parseInt(players);
    const squadCount = parseInt(squads);

    if (!isNaN(playerCount) && !isNaN(squadCount) && squadCount > 0) {
      const average = playerCount / squadCount;
      setResult(average);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      calculateAverage();
    }
  };

  const handleReset = () => {
    setPlayers("");
    setSquads("");
    setResult(null);
  };

  return (
    <div className="min-h-screen text-neutral-100">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center">
        <div className="mb-2 text-4xl font-bold">The Kyle Calculator</div>
        <p className="mb-6 text-lg text-gray-400">
          Because the math is just too damn hard
        </p>

        <Image
          src="/kb-calc-avatar.jpeg"
          alt="Kyle Calculator Avatar"
          height={200}
          width={200}
          className="mb-8 rounded-sm shadow-lg"
        />

        <div className="pb-8 text-center text-gray-300 italic">
          &quot;guys... there is uhhh an average 2.7 people per team...&quot;
        </div>

        <div className="flex w-full max-w-lg flex-col gap-4 pb-6 sm:flex-row">
          <div className="flex-1">
            <label
              htmlFor="players"
              className="mb-2 block text-sm font-medium text-gray-400"
            >
              Players Alive
            </label>
            <input
              id="players"
              type="text"
              autoComplete="off"
              className="w-full border border-neutral-600 bg-neutral-800 p-3 font-mono text-base text-neutral-100 caret-teal-500 transition-colors focus:border-teal-500 focus:outline-none"
              placeholder="42"
              value={players}
              onChange={handlePlayerInput}
              onKeyPress={handleKeyPress}
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="squads"
              className="mb-2 block text-sm font-medium text-gray-400"
            >
              Squads Left
            </label>
            <input
              id="squads"
              type="text"
              autoComplete="off"
              className="w-full border border-neutral-600 bg-neutral-800 p-3 font-mono text-base text-neutral-100 caret-teal-500 transition-colors focus:border-teal-500 focus:outline-none"
              placeholder="12"
              value={squads}
              onChange={handleSquadInput}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>

        <button
          onClick={calculateAverage}
          disabled={!players || !squads || squads === "0"}
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
              <p className="mb-2 text-gray-400">Average Players per Squad:</p>
              <p className="text-5xl font-bold text-teal-400">
                {result.toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
