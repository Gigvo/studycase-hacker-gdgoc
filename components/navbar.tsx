"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearchButton from "./search-bar";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 z-50 w-full shadow-xs ">
        <div className="bg-[#23856D] text-white text-sm flex flex-row justify-between xl:px-40 px-8 items-center  py-1.5 max-lg:hidden">
          <div className="flex flex-row gap-2.5">
            <div className="p-2.5 flex flex-row gap-[5px]">
              <Image
                src={"/telephone-icon.svg"}
                alt="telephone icon"
                width={16}
                height={16}
              ></Image>
              <p>(222) 555-0118</p>
            </div>

            <div className="p-2.5 flex flex-row gap-[5px]">
              <Image
                src={"/mail-icon.svg"}
                alt="mail icon"
                width={16}
                height={16}
              ></Image>
              <p>michelle.rivera@example.com</p>
            </div>
          </div>

          <p className="font-bold p-2.5">
            Follow Us and get a chance to win 80% off
          </p>
          <div className="p-2.5 flex flex-row gap-2.5">
            <p>Follow Us :</p>
            <div className="flex flex-row gap-[5.5px]">
              <Image
                src={"/instagram-icon.svg"}
                alt="instagram icon"
                width={16}
                height={16}
              ></Image>
              <Image
                src={"/youtube-icon.svg"}
                alt="youtube icon"
                width={16}
                height={16}
              ></Image>
              <Image
                src={"/facebook-icon.svg"}
                alt="facebook icon"
                width={16}
                height={16}
              ></Image>
              <Image
                src={"/twitter-icon.svg"}
                alt="twitter icon"
                width={16}
                height={16}
              ></Image>
            </div>
          </div>
        </div>
        <div className="bg-white py-2.5 flex flex-row justify-between xl:px-40 px-8 items-center font-semibold">
          <p className="font-semibold text-2xl pr-[89px] p-[13px]">Bookstar</p>
          <div className="flex flex-row justify-between  lg:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              <Image
                src={"/hamburger-menu.svg"}
                alt="hamburger menu"
                width={22}
                height={22}
              ></Image>
            </button>
          </div>
          <div className="flex flex-row gap-3.75 text-[#737373] items-center text-[14px] max-lg:hidden">
            <p>Home</p>
            <NavigationMenu className="text-black">
              <NavigationMenuList className="flex-wrap">
                <NavigationMenuItem className="">
                  <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="">Book Details</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#your-reading-list">
                            Your Reading List
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#books-for-you">Books For You</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Pages</p>
          </div>
          <div className="flex flex-row max-lg:hidden items-center">
            <p className="text-[#23A6F0] p-[15px]">Login / Register</p>

            <SearchButton />

            <div className="p-[15px] flex flex-row text-[#23A6F0] text-xs gap-[5px] items-center font-normal">
              <Image
                src={"/blue-cart-icon.svg"}
                alt="blue cart icon"
                width={16}
                height={16}
              ></Image>
              <p>1</p>
            </div>

            <div className="p-[15px] flex flex-row text-[#23A6F0] text-xs gap-[5px] items-center font-normal">
              <Image
                src={"/blue-love-icon.svg"}
                alt="blue love icon"
                width={16}
                height={16}
              ></Image>
              <p>1</p>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col items-center bg-white transition-all duration-200 ease-in-out lg:hidden z-50
            ${
              mobileOpen
                ? "max-h-screen py-4"
                : "max-h-0 opacity-0 overflow-hidden"
            }
            `}
        >
          <div className="flex flex-col gap-3.75 text-[#737373] items-center text-[14px] lg:hidden">
            <p>Home</p>
            <p>Shop</p>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Pages</p>
          </div>
          <div className="flex flex-col items-center lg:hidden">
            <p className="text-[#23A6F0] p-[15px]">Login / Register</p>
            <button onClick={() => setMobileOpen(false)}>
              <SearchButton />
            </button>

            <div className="p-[15px] flex flex-row text-[#23A6F0] text-xs gap-[5px] items-center font-normal">
              <Image
                src={"/blue-cart-icon.svg"}
                alt="blue cart icon"
                width={16}
                height={16}
              ></Image>
              <p>1</p>
            </div>

            <div className="p-[15px] flex flex-row text-[#23A6F0] text-xs gap-[5px] items-center font-normal">
              <Image
                src={"/blue-love-icon.svg"}
                alt="blue love icon"
                width={16}
                height={16}
              ></Image>
              <p>1</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
