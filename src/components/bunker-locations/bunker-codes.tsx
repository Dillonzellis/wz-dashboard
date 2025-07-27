import CodeCards from "./code-cards";
import { bunkerCodes, shackCodes } from "./code-data";

export default function BunkerCodes() {
  return (
    <div className="flex flex-col gap-8">
      <CodeCards title="Bunker Codes" codeArr={bunkerCodes} />
      <CodeCards title="Shack Codes" codeArr={shackCodes} />
    </div>
  );
}
