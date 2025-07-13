import Image from "next/image";

interface Item {
  itemLocation: string;
  imgSrc: string;
}

const basePBs: Item[] = [
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

const baseKCs: Item[] = [
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

const Item = ({ itemLocation, imgSrc }: Item) => {
  return (
    <li>
      <div>{itemLocation}</div>
      <Image src={imgSrc} alt="" width={500} height={500} />
    </li>
  );
};

const LocationSections = () => {
  return (
    <section>
      <h2>Locations</h2>
      <h3>Base</h3>
      <p>Suggested Insertion Point: Side entrance near Café</p>
      <h4>PB</h4>
      <ul>
        {basePBs.map((item, idx) => (
          <Item key={idx} {...item} />
        ))}
      </ul>
      <h4>KCs</h4>
      <ul>
        {baseKCs.map((item, idx) => (
          <Item key={idx} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default LocationSections;
