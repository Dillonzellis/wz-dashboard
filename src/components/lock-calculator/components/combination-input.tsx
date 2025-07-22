"use client";

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
        <label htmlFor="combination" className="mb-2 block text-sm font-medium">
          Enter combination pattern:
        </label>
        <input
          id="combination"
          type="text"
          value={input}
          onChange={onInputChange}
          onKeyPress={handleKeyPress}
          autoComplete="off"
          className="w-full border border-neutral-600 bg-neutral-800 p-4 font-mono text-5xl tracking-widest text-neutral-100 caret-teal-500"
          placeholder="012X45"
          maxLength={6}
        />
        <p className="mt-1 text-sm text-gray-400">
          Use digits 0-9 and X for unknown positions. {input.length}/6
          characters
        </p>
      </div>

      <button
        onClick={onGenerate}
        disabled={isCalculating || input.length !== 6}
        className="cursor-pointer border border-neutral-600 bg-neutral-800 p-4 text-2xl text-neutral-100 transition-all duration-200 hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isCalculating ? "Calculating..." : "Generate Combinations"}
      </button>
    </div>
  );
}
