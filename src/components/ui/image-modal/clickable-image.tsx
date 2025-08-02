"use client";

import Image from "next/image";
import { useState } from "react";
import ImageModal from "./image-modal";
import type { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export default function ClickableImage({
  className,
  ...imageProps
}: ImageProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <Image
        {...imageProps}
        alt={imageProps.alt}
        className={cn("hover:cursor-pointer", className)}
        onClick={() => setIsModalOpen(true)}
      />
      <ImageModal
        {...imageProps}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
