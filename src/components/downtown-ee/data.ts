export interface ItemType {
  title: string;
  desc: string;
  imgSrc: string;
}

export const basePBs: ItemType[] = [
  {
    title: "1st Floor",
    desc: "Inside café: Back counter box.",
    imgSrc: "/tower-ee/base/base-pb-1.png",
  },
  {
    title: "1st Floor",
    desc: "Office upstairs: Coffee cup.",
    imgSrc: "/tower-ee/base/base-pb-2.png",
  },
  {
    title: "1st Floor",
    desc: "Opposite Burger Town: Behind center couch.",
    imgSrc: "/tower-ee/base/base-pb-3.png",
  },
];

export const baseKCs: ItemType[] = [
  {
    title: "1st Floor",
    desc: "Café: Kitchen, behind door on counter.",
    imgSrc: "/tower-ee/base/base-kc-1.png",
  },
  {
    title: "1st Floor",
    desc: "Opposite from café: near right elevator.",
    imgSrc: "/tower-ee/base/base-kc-2.png",
  },
  {
    title: "1st Floor",
    desc: "Burger Town: Bar counter facing outward.",
    imgSrc: "/tower-ee/base/base-kc-3.png",
  },
];

export const middlePBs: ItemType[] = [
  {
    title: "2nd Floor",
    desc: "Center planters near hard hat.",
    imgSrc: "/tower-ee/middle/middle-pb-1.png",
  },
  {
    title: "2nd Floor",
    desc: "Through door leading to upper stairwell.",
    imgSrc: "/tower-ee/middle/middle-pb-2.png",
  },

  {
    title: "3rd Floor",
    desc: "In plant cluster near pyramid corner.",
    imgSrc: "/tower-ee/middle/middle-pb-3.png",
  },
];

export const topPBs: ItemType[] = [
  {
    title: "Roof: Right of Pool Table Tower",
    desc: "Basement level, right corner near.",
    imgSrc: "/tower-ee/top/top-pb-2.png",
  },
  {
    title: "Roof: Left of Pool Table Tower",
    desc: "Rooftop level, near wood crates in corner.",
    imgSrc: "/tower-ee/top/top-pb-1.png",
  },
  {
    title: "Roof: Across Pool Table Tower",
    desc: "Inside tower, rear shelf behind wood panel.",
    imgSrc: "/tower-ee/top/top-pb-3.png",
  },
];
