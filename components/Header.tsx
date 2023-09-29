"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);
  return (
    <header
      className={isScrolled ? "bg-[#141414] px-[0.96rem] py-[0.96rem]" : ""}>
      <div className="flex items-center space-x-2 md:space-x-10 ">
        <Image
          src="/imgs/Netflix_logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & popular</li>
          <li className="headerLink">My list</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden sm:inline w-6 h-6" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="sm:inline w-6 h-6" />
        <Link href="/account">
          <Image
            src="https://rb.gy/g1pwyx"
            alt="account"
            width={30}
            height={30}
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
