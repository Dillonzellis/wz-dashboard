import type { ItemType } from "@/app/data/itemData";
import Image from "next/image";

export const Item = ({ itemLocation, imgSrc }: ItemType) => {
  return (
    <div className="h-full border border-neutral-700 p-3">
      <Image
        src={imgSrc}
        alt=""
        width={346}
        height={306}
        className="w-full object-cover pb-4"
      />
      <div>{itemLocation}</div>
    </div>
  );
};
