import { cn } from "@/lib/utils";
import { codeArr } from "./code-data";

interface CodeCardsProps {
  title: string;
  codeArr: codeArr[];
}

const getColor = (kcColor: string): string => {
  if (kcColor.includes("Red")) return "border-red-600";
  if (kcColor.includes("Blue")) return "border-blue-600";
  return "border-neutral-500";
};

export default function CodeCards({ title, codeArr }: CodeCardsProps) {
  return (
    <div>
      <div className="text-2xl font-bold">{title}</div>
      <hr className="mb-4" />
      <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4">
        {codeArr.map((code) => (
          <div
            key={code.name}
            className={cn(
              getColor(code.code),
              "flex flex-col border bg-neutral-800 px-2 py-1",
            )}
          >
            <div className="text-lg font-semibold">{code.name}</div>
            <div className="text-base">{code.code}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
