import Image from "next/image";
import { ItemType } from "./data";

export const Item = ({ itemLocation, imgSrc }: ItemType) => {
  return (
    <div className="h-full border border-neutral-700 px-1">
      <Image
        src={imgSrc}
        alt=""
        width={346}
        height={306}
        className="w-full object-cover pt-1 pb-4"
      />
      <div className="px-1.5 pb-3">{itemLocation}</div>
    </div>
  );
};
