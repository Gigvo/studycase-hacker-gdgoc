import React from "react";
import Image from "next/image";

interface BookDisplayProps {
  bookImage: string;
}

export default function BookDisplay({ bookImage }: BookDisplayProps) {
  return (
    <div className="bg-[#B0B0B0] xl:w-127 xl:h-119 sm:w-100 sm:h-90 w-78 h-68 flex items-center justify-center">
      <Image
        src={bookImage}
        alt="Book Cover"
        width={250}
        height={350}
        className="mx-auto filter-[drop-shadow(-20px_20px_15px_rgba(0,0,0,0.35))] xl:w-[250px] xl:h-[350px] md:w-[190px] md:h-[260px] w-[150px] h-[210px]"
      />
    </div>
  );
}
