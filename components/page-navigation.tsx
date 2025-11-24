import React from "react";
import Image from "next/image";

export default function PageNav() {
  return (
    <div className="py-6 flex flex-row mx-42 mt-32">
      <div className="flex flex-row items-center gap-[15px] py-2.5">
        <p className="font-bold">Home</p>
        <Image
          src={"arrow-right-icon.svg"}
          alt="arrow right icon"
          width={9}
          height={16}
        ></Image>
        <p className="font-bold text-[#BDBDBD]">Shop</p>
      </div>
    </div>
  );
}
