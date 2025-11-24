import React from "react";
import Image from "next/image";

async function fetchMultipleBooks(count: number) {
  const promises = Array.from({ length: count }, async () =>
    fetch(
      `https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/random_book?rand=${Math.random()}`,
      {
        cache: "no-store",
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())
  );
  return Promise.all(promises);
}

export default async function BooksForYou() {
  const books = await fetchMultipleBooks(4);

  return (
    <section className="mx-40 mt-24 flex gap-6 flex-col">
      <p className="text-[32px] font-semibold">Your Reading List</p>
      <hr className="my-6 border-gray-200 border" />
      <div className="flex flex-row  gap-7.5 justify-between">
        {books.map((book, index) => (
          <div key={`${book.cover_image}-${index}`}>
            <div className="w-60 h-70 bg-gray-300 flex items-center justify-center">
              <Image
                src={book.cover_image}
                alt={`Book cover ${index}`}
                width={100}
                height={150}
                className="filter-[drop-shadow(-20px_20px_15px_rgba(0,0,0,0.35))]"
              />
            </div>

            <div className="flex flex-col gap-2.5 p-[25px] items-start bg-white w-60 h-50">
              <p className="font-semibold text-[16px]">{book.title}</p>
              {book.category.name && (
                <p className="font-semibold text-[14px] text-[#737373]">
                  {book.category.name}
                </p>
              )}
              <div className="flex flex-row gap-2">
                <p className="text-[#BDBDBD]">{book.details.price}</p>
                <p className="text-[#23856D]">Rp 50,000</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row  gap-7.5 justify-between">
        {books.map((book, index) => (
          <div key={`${book.cover_image}-${index}`}>
            <div className="w-60 h-70 bg-gray-300 flex items-center justify-center">
              <Image
                src={book.cover_image}
                alt={`Book cover ${index}`}
                width={100}
                height={150}
                className="filter-[drop-shadow(-20px_20px_15px_rgba(0,0,0,0.35))]"
              />
            </div>

            <div className="flex flex-col gap-2.5 p-[25px] items-start bg-white w-60 h-50">
              <p className="font-semibold text-[16px]">{book.title}</p>
              {book.category.name && (
                <p className="font-semibold text-[14px] text-[#737373]">
                  {book.category.name}
                </p>
              )}
              <div className="flex flex-row gap-2">
                <p className="text-[#BDBDBD]">{book.details.price}</p>
                <p className="text-[#23856D]">Rp 50,000</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
