export function Instructions() {
  return (
    <div className="mt-8 text-sm text-gray-400">
      <h3 className="mb-2 font-bold">How it works:</h3>
      <ul className="list-inside list-disc space-y-1">
        <li>Enter a 6-digit pattern using numbers 0-9 and X for unknowns</li>
        <li>All digits in the final combination must be unique</li>
        <li>The tool will generate all valid permutations</li>
        <li>
          Example: &quot;12X4X6&quot; will find all combinations where positions
          3 and 5 are unknown
        </li>
      </ul>
    </div>
  );
}
