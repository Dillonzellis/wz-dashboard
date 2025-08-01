"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { ImageProps } from "next/image";

interface ImageModalProps extends Omit<ImageProps, "onClick"> {
  isOpen: boolean;
  onClose: () => void;
  alt: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  ...imageProps
}: ImageModalProps) {
  useEffect(() => {
    const handleKeyPress = () => {
      onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-neutral-900/90" onClick={onClose} />
      <div className="absolute inset-0 z-50 flex min-h-screen items-center justify-center">
        <div className="relative max-h-full max-w-full">
          <Image
            {...imageProps}
            alt={imageProps.alt}
            className="max-h-full max-w-full object-contain p-4 hover:cursor-pointer"
            onClick={onClose}
          />
        </div>
      </div>
    </>
  );
}
