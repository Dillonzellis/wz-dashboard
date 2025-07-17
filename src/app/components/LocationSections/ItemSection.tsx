"use client";
import { useState } from "react";
import { ItemType } from "@/app/data/itemData";
import { Item } from "./Item";

interface ItemSectionProps {
  itemType?: string;
  items: ItemType[];
  title?: string;
}

export const ItemSection = ({
  title,
  itemType = "pb",
  items,
}: ItemSectionProps) => {
  const [clickedLocations, setClickedLocations] = useState<Set<number>>(
    new Set(),
  );

  const handleItemClick = (index: number) => {
    setClickedLocations((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  let renderedItem;
  if (itemType === "pb") {
    renderedItem = "Pool Balls";
  }

  if (itemType === "kc") {
    renderedItem = "Key Cards";
  }

  return (
    <section className="pb-12">
      {title && (
        <h2 className="md:text-4xl text-2xl font-semibold pb-4">{title}</h2>
      )}
      <div className="flex flex-col gap-3">
        <h3 className="pb-1 md:text-xl text-lg">{renderedItem}</h3>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-col-5">
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleItemClick(idx)}
              className={`cursor-pointer transition-colors ${
                clickedLocations.has(idx) ? "bg-teal-600" : ""
              }`}
            >
              <Item {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
