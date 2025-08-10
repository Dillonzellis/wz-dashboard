export interface ItemType {
  title: string;
  desc: string;
  imgSrc: string;
}

export const basePBs: ItemType[] = [
  {
    title: "1st Floor Pool Ball",
    desc: "Inside café: Back counter box.",
    imgSrc: "/tower-ee/base/base-pb-1.png",
  },
  {
    title: "1st Floor Pool Ball",
    desc: "Office upstairs: Coffee cup, left side of desk.",
    imgSrc: "/tower-ee/base/base-pb-2.png",
  },
  {
    title: "1st Floor Pool Ball",
    desc: "Opposite Burger Town: Behind center couch in cardboard box, near elevator.",
    imgSrc: "/tower-ee/base/base-pb-3.png",
  },
];

export const baseKCs: ItemType[] = [
  {
    title: "1st Floor Key Card",
    desc: "Café: Kitchen, behind door on counter.",
    imgSrc: "/tower-ee/base/base-kc-1.png",
  },
  {
    title: "1st Floor Key Card",
    desc: "Across from café: Right side of white bench near right elevator.",
    imgSrc: "/tower-ee/base/base-kc-2.png",
  },
  {
    title: "1st Floor Key Card",
    desc: "Burger Town: Bar counter facing outward.",
    imgSrc: "/tower-ee/base/base-kc-3.png",
  },
];

export const middlePBs: ItemType[] = [
  {
    title: "2nd Floor Pool Ball",
    desc: "Center planters near zip (4 corners).",
    imgSrc: "/tower-ee/middle/middle-pb-1.png",
  },
  {
    title: "2nd Floor Pool Ball",
    desc: "Through door leading to upper stairwell: Right of red chair.",
    imgSrc: "/tower-ee/middle/middle-pb-2.png",
  },

  {
    title: "3rd Floor Pool Ball",
    desc: "Top of zip in plant cluster near pyramid corner.",
    imgSrc: "/tower-ee/middle/middle-pb-3.png",
  },
];

export const topPBs: ItemType[] = [
  {
    title: "Roof Pool Ball",
    desc: "Right of Pool Table Tower: Basement level, right corner near spilled cement.",
    imgSrc: "/tower-ee/top/top-pb-2.png",
  },
  {
    title: "Roof Pool Ball",
    desc: "Left of Pool Table Tower: Rooftop level, near wood crates in corner.",
    imgSrc: "/tower-ee/top/top-pb-1.png",
  },
  {
    title: "Roof Pool Ball",
    desc: "Opposite Pool Table Tower: Inside tower, rear shelf behind wood panel.",
    imgSrc: "/tower-ee/top/top-pb-3.png",
  },
];
