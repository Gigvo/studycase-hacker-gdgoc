"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Input } from "./ui/input";
import { useDebouncedCallback } from "use-debounce";
import BookList from "./book-list";

export default function SearchButton() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const debouncedSetQuery = useDebouncedCallback((value: string) => {
    setQuery(value);
  }, 300);

  const handleBookClick = async (bookId: string) => {
    try {
      const response = await fetch(
        `https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/book/${bookId}`
      );

      if (response.ok) {
        const bookData = await response.json();

        window.dispatchEvent(
          new CustomEvent("bookSelected", { detail: bookData })
        );

        setOpen(false);
      }
    } catch (err) {
      console.error("Failed to get book details: ", err);
    }
  };

  return (
    <div className="cursor-pointer">
      <Dialog open={open} onOpenChange={setOpen}>
        <form>
          <DialogTrigger asChild>
            <Image
              src={"/blue-search-icon.svg"}
              alt="blue search icon"
              width={16}
              height={16}
              className="m-[15px]"
            ></Image>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Search Book</DialogTitle>
            </DialogHeader>
            <div className="max-h-100 px-2">
              <div className=" ">
                <Input
                  id="name-1"
                  name="name"
                  placeholder="Search"
                  onChange={(e) => {
                    debouncedSetQuery(e.target.value);
                  }}
                  className="mb-2"
                />
                <div className="overflow-y-scroll max-h-80">
                  <BookList query={query} onBookClick={handleBookClick} />
                </div>
              </div>
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
