"use client";
import Image from "next/image";
import { useState } from "react";

export default function KyleCalcPage() {
  const [players, setPlayers] = useState("");
  const [squads, setSquads] = useState("");
  const [yourSquadSize, setYourSquadSize] = useState("");
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

  const handleYourSquadInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers up to 4 (max squad size)
    if (value === "" || (/^\d+$/.test(value) && parseInt(value) <= 4)) {
      setYourSquadSize(value);
    }
  };

  const calculateAverage = () => {
    const playerCount = parseInt(players);
    const squadCount = parseInt(squads);
    const yourSquad = parseInt(yourSquadSize) || 0;

    if (!isNaN(playerCount) && !isNaN(squadCount) && squadCount > 1) {
      // Subtract your squad members from total players
      // Subtract 1 from total squads (your squad)
      const enemyPlayers = playerCount - yourSquad;
      const enemySquads = squadCount - 1;
      
      if (enemySquads > 0 && enemyPlayers > 0) {
        const average = enemyPlayers / enemySquads;
        setResult(average);
      }
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
    setYourSquadSize("");
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

        <div className="flex w-full max-w-lg flex-col gap-4 pb-6">
          <div className="flex flex-col gap-4 sm:flex-row">
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

          <div className="w-full">
            <label
              htmlFor="yourSquadSize"
              className="mb-2 block text-sm font-medium text-gray-400"
            >
              Your Squad Size
            </label>
            <input
              id="yourSquadSize"
              type="text"
              autoComplete="off"
              className="w-full border border-neutral-600 bg-neutral-800 p-3 font-mono text-base text-neutral-100 caret-teal-500 transition-colors focus:border-teal-500 focus:outline-none"
              placeholder="4"
              value={yourSquadSize}
              onChange={handleYourSquadInput}
              onKeyPress={handleKeyPress}
            />
            <p className="mt-1 text-xs text-gray-500">
              How many players are alive in your squad (including you)
            </p>
          </div>
        </div>

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
              <p className="mb-2 text-gray-400">Average Enemy Players per Squad:</p>
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