"use client";
import React, { useEffect, useState } from "react";
import { Movie } from "../typing";
import { baseUrl } from "../constants/Movie";
import Image from "next/image";
import { PlayIcon, InformationCircleIcon } from "@heroicons/react/20/solid";

interface Props {
  movies: Movie[];
}
function Banner({ movies }: Props) {
  const [displayMovie, setDisplayMovie] = useState<Movie | null>(null);
  useEffect(() => {
    if (movies) {
      setDisplayMovie(movies[Math.floor(Math.random() * movies.length)]);
    }
  }, [movies]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[100vh] w-screen -z-50">
        <Image
          src={`${baseUrl}${
            displayMovie?.backdrop_path || displayMovie?.poster_path
          }`}
          alt="movie Poster"
          fill
          objectFit="cover"
        />
      </div>
      <div className="ml-9 space-y-8 mt-6">
        {/* banner Info */}
        <div>
          <h1 className="text-4xl font-bold md:text-4xl lg:text-7xl">
            {displayMovie?.title ||
              displayMovie?.name ||
              displayMovie?.original_name}
          </h1>
          <p className="max-w-xs text-xl text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-slate-200 font-light tracking-wider left-5">
            {displayMovie?.overview}
          </p>
        </div>
        {/* banner Btn */}
        <div className="flex space-x-3">
          <button className="bannerBtn bg-white text-black">
            <PlayIcon className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
          </button>
          <button className="bannerBtn bg-[gray]/70">
            More Info{" "}
            <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
