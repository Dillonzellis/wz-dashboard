import Card from "../ui/card/card";
import CardWrapper from "../ui/card/card-wrapper";
import { baseKCs, basePBs, middlePBs, topPBs } from "./data";

export default function PbLocations() {
  return (
    <div className="flex flex-col gap-4">
      <CardWrapper className="justify-center">
        <Card
          imgSrc="/tower-ee/pool-table-tower.png"
          imgAlt="pool table tower"
          title="Pool Table Tower"
          desc="Pool table tower for reference of other towers and location of secret room."
        />
      </CardWrapper>
      <CardWrapper>
        {basePBs.map((location, idx) => (
          <Card
            key={idx}
            imgSrc={location.imgSrc}
            imgAlt={location.title}
            title={location.title}
            desc={location.desc}
          />
        ))}
        {baseKCs.map((location, idx) => (
          <Card
            key={idx}
            imgSrc={location.imgSrc}
            imgAlt={location.title}
            title={location.title}
            desc={location.desc}
          />
        ))}
      </CardWrapper>
      <CardWrapper>
        {middlePBs.map((location, idx) => (
          <Card
            key={idx}
            imgSrc={location.imgSrc}
            imgAlt={location.title}
            title={location.title}
            desc={location.desc}
          />
        ))}
      </CardWrapper>
      <CardWrapper>
        {topPBs.map((location, idx) => (
          <Card
            key={idx}
            imgSrc={location.imgSrc}
            imgAlt={location.title}
            title={location.title}
            desc={location.desc}
          />
        ))}
      </CardWrapper>
    </div>
  );
}
