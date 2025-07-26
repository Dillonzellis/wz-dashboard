"use client";

import { useState } from "react";

export interface KbCalcReturn {
  players: string;
  squads: string;
  yourSquadSize: string;
  result: number | null;
  handleReset: () => void;
  handlePlayerInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSquadInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleYourSquadInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (e: React.KeyboardEvent) => void;
  calculateAverage: () => void;
}

export function useKbCalc() {
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

  const calculateAverage = () => {
    const playerCount = parseInt(players);
    const squadCount = parseInt(squads);
    const yourSquad = parseInt(yourSquadSize) || 0;

    if (!isNaN(playerCount) && !isNaN(squadCount) && squadCount > 1) {
      const enemyPlayers = playerCount - yourSquad;
      const enemySquads = squadCount - 1;

      if (enemySquads > 0 && enemyPlayers > 0) {
        const average = enemyPlayers / enemySquads;
        setResult(average);
      }
    }
  };

  return {
    players,
    squads,
    yourSquadSize,
    result,
    handleReset,
    handlePlayerInput,
    handleSquadInput,
    handleYourSquadInput,
    handleKeyPress,
    calculateAverage,
  };
}
