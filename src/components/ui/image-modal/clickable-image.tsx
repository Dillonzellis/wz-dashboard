"use client";

import Image from "next/image";
import { useState } from "react";
import ImageModal from "./image-modal";
import type { ImageProps } from "next/image";

export default function ClickableImage({ ...imageProps }: ImageProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <Image
        {...imageProps}
        alt={imageProps.alt}
        className="hover:cursor-pointer"
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
