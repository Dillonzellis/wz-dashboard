"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CombinationInputProps {
  input: string;
  isCalculating: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onGenerate: () => void;
}

export function CombinationInput({
  input,
  isCalculating,
  onInputChange,
  onGenerate,
}: CombinationInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onGenerate();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Label htmlFor="combination" className="">
          Enter combination pattern:
        </Label>
        <Input
          variantSize="large"
          id="combination"
          type="text"
          value={input}
          onChange={onInputChange}
          onKeyDown={handleKeyPress}
          autoComplete="off"
          placeholder="012X45"
          maxLength={6}
        />
        <p className="mt-1 text-sm text-gray-400">
          Use digits 0-9 and X for unknown positions. {input.length}/6
          characters
        </p>
      </div>
      <Button
        onClick={onGenerate}
        disabled={isCalculating || input.length !== 6}
        size="large"
      >
        {isCalculating ? "Calculating..." : "Generate Combinations"}
      </Button>
    </div>
  );
}
