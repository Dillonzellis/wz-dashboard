"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { KbCalcReturn } from "../../hooks/use-kb-calc";

type KbInputsProps = Pick<
  KbCalcReturn,
  | "players"
  | "squads"
  | "yourSquadSize"
  | "handlePlayerInput"
  | "handleSquadInput"
  | "handleKeyPress"
  | "handleYourSquadInput"
>;

export const KbInputs = ({
  players,
  handlePlayerInput,
  handleKeyPress,
  squads,
  handleSquadInput,
  yourSquadSize,
  handleYourSquadInput,
}: KbInputsProps) => {
  return (
    <div className="flex w-full max-w-lg flex-col gap-4 pb-6">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <Label htmlFor="players">Players Alive</Label>
          <Input
            id="players"
            type="text"
            autoComplete="off"
            placeholder="42"
            value={players}
            onChange={handlePlayerInput}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="squads">Squads Left</Label>
          <Input
            id="squads"
            type="text"
            autoComplete="off"
            placeholder="12"
            value={squads}
            onChange={handleSquadInput}
            onKeyDown={handleKeyPress}
          />
        </div>
      </div>
      <div className="w-full">
        <Label htmlFor="yourSquadSize">Your Squad Size</Label>
        <Input
          type="text"
          id="yourSquadSize"
          autoComplete="off"
          placeholder="4"
          value={yourSquadSize}
          onChange={handleYourSquadInput}
          onKeyDown={handleKeyPress}
        />
        <p className="mt-1 text-xs text-gray-500">
          How many players are alive in your squad (including you)
        </p>
      </div>
    </div>
  );
};
