import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BookDisplay from "./book-display";
import { Button } from "./ui/button";

export const revalidate = 3600;

export default async function BookDetails() {
  const data = await fetch(
    "https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/random_book?"
    // {
    //   next: { revalidate: 3600 },
    // }
  );
  const book = await data.json();
  const bookImage = book.cover_image;

  return (
    <section className="mx-40 flex flex-row gap-7.5 justify-center">
      <div className="w-1/2">
        <Carousel className="relative w-127 h-119">
          <CarouselContent>
            <CarouselItem>
              <BookDisplay bookImage={bookImage} />
            </CarouselItem>
            <CarouselItem>
              <BookDisplay bookImage={bookImage} />
            </CarouselItem>
            <CarouselItem>
              <BookDisplay bookImage={bookImage} />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent border-none" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-none" />
        </Carousel>
      </div>
      <div className="w-1/2">
        {book.tags && book.tags.length > 0 && (
          <div className="flex flex-row gap-4 justify-start">
            {book.tags[0]?.name && (
              <p className="bg-[#E0E0E0] px-4 py-1 rounded-[40px]">
                {book.tags[0].name}
              </p>
            )}
            {book.tags[1]?.name && (
              <p className="bg-[#E0E0E0] px-4 py-1 rounded-[40px]">
                {book.tags[1].name}
              </p>
            )}
          </div>
        )}
        <p className="text-[32px] font-semibold mt-[35px]">{book.title}</p>
        <p className="text-2xl font-semibold">{book.details.price}</p>
        <p className="text-[#737373] text-[16px] font-semibold mt-2 mb-4">
          Availability : <span className="text-[#23A6F0]">In Stock</span>
        </p>
        <p className="text-[#858585] text-[16px]">{book.summary}</p>
        <div className="text-[#858585] mt-5">
          <p>
            <span className="font-semibold">Pages: </span>
            {book.details.total_pages}
          </p>
          <p>
            <span className="font-semibold">Publisher: </span>
            {book.publisher}
          </p>
          <p>
            <span className="font-semibold">ISBN: </span>
            {book.details.isbn}
          </p>
          <p>
            <span className="font-semibold">Published: </span>
            {book.details.published_date}
          </p>
        </div>
        <div className="flex flex-row items-center gap-2.5 mt-5">
          <Button className="bg-[#007AFF] cursor-pointer">Buy Now</Button>
          <div className="rounded-full bg-[#DBECFF] p-2.5 flex items-center justify-center">
            <Image
              src={"./black-love-icon.svg"}
              alt="love icon"
              width={20}
              height={20}
            />
          </div>
          <div className="rounded-full bg-[#DBECFF] p-2.5 flex items-center justify-center">
            <Image
              src={"./black-cart-icon.svg"}
              alt="cart icon"
              width={20}
              height={20}
            />
          </div>
          <div className="rounded-full bg-[#DBECFF] p-2.5 flex items-center justify-center">
            <Image
              src={"./eye-icon.svg"}
              alt="eye icon"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
