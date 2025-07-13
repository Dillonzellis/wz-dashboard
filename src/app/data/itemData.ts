export interface ItemType {
  itemLocation: string;
  imgSrc: string;
}

export const basePBs: ItemType[] = [
  {
    itemLocation: "Inside café: Back counter box.",
    imgSrc: "/base/base-pb-1.png",
  },
  {
    itemLocation: "Office upstairs: Coffee cup, left side of desk.",
    imgSrc: "/base/base-pb-2.png",
  },
  {
    itemLocation:
      "Opposite Burger Town: Behind center couch in cardboard box, near elevator.",
    imgSrc: "/base/base-pb-3.png",
  },
];

export const baseKCs: ItemType[] = [
  {
    itemLocation: "Café: Kitchen, behind door on counter.",
    imgSrc: "/base/base-kc-1.png",
  },
  {
    itemLocation:
      "Across from café: Right side of white bench near right elevator.",
    imgSrc: "/base/base-kc-2.png",
  },
  {
    itemLocation: "Burger Town: Bar counter facing outward.",
    imgSrc: "/base/base-kc-3.png",
  },
];
