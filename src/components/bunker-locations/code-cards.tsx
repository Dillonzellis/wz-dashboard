import { codeArr } from "./code-data";

interface CodeCardsProps {
  title: string;
  codeArr: codeArr[];
}

export default function CodeCards({ title, codeArr }: CodeCardsProps) {
  return (
    <div>
      <div className="text-2xl font-bold">{title}</div>
      <hr className="mb-4" />
      <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4">
        {codeArr.map((code) => (
          <div
            key={code.name}
            className="flex flex-col border border-neutral-500 bg-neutral-800 px-2 py-1"
          >
            <div className="text-lg font-semibold">{code.name}</div>
            <div className="text-base">{code.code}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
