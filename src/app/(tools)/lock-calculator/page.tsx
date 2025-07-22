import { Instructions } from "@/components/lock-calculator/components/instructions";
import { LockCombinationTool } from "@/components/lock-calculator/components/lock-combination-tool";

export default function ToolsPage() {
  return (
    <>
      <div>
        <h1 className="mb-4 text-3xl font-bold">Lock Combination Tool</h1>
        <p className="mb-6 text-gray-300">
          Enter a 6-digit combination with X for unknown positions. Example:
          012X45 will show all possible combinations where the 4th digit is
          unknown.
        </p>
      </div>
      <LockCombinationTool />
      <Instructions />
    </>
  );
}
