import React from "react";
import { Movie } from "../typing";
import Image from "next/image";

interface Props {
  movie: Movie;
}
function Thumbnail({ movie }: Props) {
  return (
    <div className='relative min-w-[180px] h-28 cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 '>
      <Image
        alt='movie poster'
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className='rounded-sm object-cover md:rounded'
        fill
      />
      {movie.name}
    </div>
  );
}

export default Thumbnail;
