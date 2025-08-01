import ClickableImage from "../image-modal/clickable-image";

interface CardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  desc?: string;
}

export default function Card({ imgSrc, imgAlt, title, desc }: CardProps) {
  return (
    <div className="border border-neutral-500">
      <ClickableImage
        src={imgSrc}
        alt={imgAlt}
        className="w-full border-b border-neutral-500 object-cover"
        height={675}
        width={1200}
      />
      <div className="px-2 py-3">
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-sm text-neutral-400">{desc}</div>
      </div>
    </div>
  );
}
