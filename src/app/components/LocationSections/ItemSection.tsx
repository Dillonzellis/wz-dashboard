import { ItemType } from "@/app/data/itemData";
import { Item } from "./Item";

interface ItemSectionProps {
  itemType: string;
  items: ItemType[];
}

export const ItemSection = ({ itemType, items }: ItemSectionProps) => {
  let renderedItem;

  if (itemType === "pb") {
    renderedItem = "Pool Balls";
  }

  if (itemType === "kc") {
    renderedItem = "Key Cards";
  }

  return (
    <div>
      <h3 className="pb-1 text-xl">{renderedItem}</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item, idx) => (
          <Item key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};
