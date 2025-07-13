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

export const middlePBs: ItemType[] = [
  {
    itemLocation: "Center planters near zip (4 corners).",
    imgSrc: "/middle/middle-pb-1.png",
  },
  {
    itemLocation:
      "Through door leading to upper stairwell: Right of red chair.",
    imgSrc: "/middle/middle-pb-2.png",
  },
  {
    itemLocation: "Top of zip in plant cluster near pyramid corner.",
    imgSrc: "/middle/middle-pb-3.png",
  },
];

export const topPBs: ItemType[] = [
  {
    itemLocation:
      "Right of Pool Table Tower: Basement level, right corner near spilled cement.",
    imgSrc: "/top/top-pb-2.png",
  },
  {
    itemLocation:
      "Left of Pool Table Tower: Rooftop level, near wood crates in corner.",
    imgSrc: "/top/top-pb-1.png",
  },
  {
    itemLocation:
      "Opposite Pool Table Tower: Inside tower, rear shelf behind wood panel.",
    imgSrc: "/top/top-pb-3.png",
  },
];
