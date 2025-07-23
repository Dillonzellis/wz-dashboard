"use client";

import Image from "next/image";
import { useState } from "react";

export default function KyleCalcPage() {
  const [players, setPlayers] = useState("");
  const [squads, setSqauds] = useState("");

  const handlePlayerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setPlayers(value);
  };

  return (
    <div>
      <div className="flex flex-col justify-center">
        <div className="text-2xl font-bold">The Kyle Calculator</div>
        <p className="mb-2 block text-sm text-gray-300">
          Because the math is just too damn hard
        </p>
        <Image
          src="/kb-calc-avatar.jpeg"
          alt=""
          height={200}
          width={200}
          className="mb-8"
        />
        <div className="pb-8 italic">
          &quot;guys... there is uhhh an average 3.5 people per team...&quot;
        </div>
        <div className="flex max-w-lg justify-between gap-2 pb-4">
          <div>
            <input
              id="combination"
              type="text"
              autoComplete="off"
              className="w-full border border-neutral-600 bg-neutral-800 p-2 font-mono text-base text-neutral-100 caret-teal-500"
              placeholder="number of players"
            />
          </div>
          <div>
            <input
              id="combination"
              type="text"
              autoComplete="off"
              className="w-full border border-neutral-600 bg-neutral-800 p-2 font-mono text-base text-neutral-100 caret-teal-500"
              placeholder="number of squads"
              value={input}
              onChange={onInputChange}
            />
            {/* <p className="mt-1 text-sm text-gray-400"> */}
            {/*   Use digits 0-9 and X for unknown positions. characters */}
            {/* </p> */}
          </div>
        </div>

        <button className="max-w-lg cursor-pointer border border-neutral-600 bg-neutral-800 p-2 text-xl text-neutral-100 transition-all duration-200 hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50">
          Calculate
        </button>
      </div>
    </div>
  );
}
