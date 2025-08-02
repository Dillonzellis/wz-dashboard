import { cn } from "@/lib/utils";
import { codeArr } from "./code-data";
import Link from "next/link";

interface CodeCardsProps {
  title: string;
  codeArr: codeArr[];
  showDesc?: boolean;
}

const getColor = (kcColor: string): string => {
  if (kcColor.includes("Red")) return "border-red-600";
  if (kcColor.includes("Blue")) return "border-blue-600";
  return "border-neutral-500";
};

const getHashLink = (bunkerName: string): string => {
  return "#" + bunkerName.replace(" ", "-");
};

export default function CodeCards({
  title,
  codeArr,
  showDesc = false,
}: CodeCardsProps) {
  return (
    <div>
      <div className="text-2xl font-bold">{title}</div>
      <hr className={cn(showDesc ? "" : "mb-4")} />
      {showDesc && (
        <p className="mb-4 pt-2 text-sm leading-normal text-gray-400">
          Click one of the Bunker Code Cards to scroll to a close up that
          particular Bunker.
        </p>
      )}
      <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4">
        {codeArr.map((code) => (
          <Link key={code.name} href={getHashLink(code.name)}>
            <div
              key={code.name}
              className={cn(
                getColor(code.code),
                "flex flex-col border bg-neutral-800 px-2 py-1",
              )}
            >
              <div className="text-lg leading-[1.25] font-semibold">
                {code.name}
              </div>
              <div className="text-base">{code.code}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
