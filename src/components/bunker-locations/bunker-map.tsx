"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function BunkerMap() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleEsc = () => {
      setIsModalOpen(false);
    };

    if (isModalOpen) {
      document.addEventListener("keydown", () => setIsModalOpen(false));
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isModalOpen]);

  return (
    <>
      <Image
        src="/bunker-locations.jpg"
        alt=""
        className="w-full max-w-[750px] object-contain hover:cursor-pointer"
        height={1291}
        width={1080}
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-neutral-900/90"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="absolute inset-0 z-50 flex min-h-screen items-center justify-center">
            <div className="relative max-h-full max-w-full">
              <Image
                src="/bunker-locations.jpg"
                alt=""
                className="max-h-full max-w-full object-contain hover:cursor-pointer"
                height={1291}
                width={1080}
                onClick={() => setIsModalOpen(false)}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
