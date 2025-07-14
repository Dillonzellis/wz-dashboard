"use client";
import { useState } from "react";
import { ItemType } from "@/app/data/itemData";
import { Item } from "./Item";

interface ItemSectionProps {
  itemType: string;
  items: ItemType[];
}

export const ItemSection = ({ itemType, items }: ItemSectionProps) => {
  const [clickedLocations, setClickedLocations] = useState<Set<number>>(
    new Set(),
  );

  const handleItemClick = (index: number) => {
    setClickedLocations((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index); // Toggle off if already clicked
      } else {
        newSet.add(index); // Toggle on if not clicked
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
    <div>
      <h3 className="pb-1 md:text-xl text-lg">{renderedItem}</h3>
      <div className="grid gap-4 md:grid-cols-3">
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
  );
};
