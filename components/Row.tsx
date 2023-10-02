"use client";
import { Movie } from "@/typing";
import React, { useRef, useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import Thumbnail from "./Thumbnail";
interface Props {
  title: string;
  movies: Movie[];
}

function Row({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    if (rowRef.current) {
      setIsMoved(true);
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  console.log(rowRef.current?.scrollLeft, rowRef.current?.clientWidth);

  return (
    <div className="h-40 space-y-0.5 md:space-y-2 md:mt-14">
      <h2 className="w-56 cursor-pointer text-sm md:text-2xl font-semibold text-[#e5e5e5] transition duration-200 hover:text-white">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-11 w-11 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />

        <div
          className="flex items-center space-x-0.5 md:space-x-2.5 md:p-2 overflow-scroll sm:no-scrollbar"
          ref={rowRef}>
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon
          className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-11 w-11 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default Row;
