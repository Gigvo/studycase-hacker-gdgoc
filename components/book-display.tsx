import React from "react";
import Image from "next/image";

interface BookDisplayProps {
  bookImage: string;
}

export default function BookDisplay({ bookImage }: BookDisplayProps) {
  return (
    <div className="bg-[#B0B0B0] w-127 h-119 flex items-center justify-center">
      <Image
        src={bookImage}
        alt="Book Cover"
        width={250}
        height={350}
        className="mx-auto filter-[drop-shadow(-20px_20px_15px_rgba(0,0,0,0.35))]"
      />
    </div>
  );
}
