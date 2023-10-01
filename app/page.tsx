import Banner from "@/components/Banner";
import Header from "@/components/Header";
import { Movie } from "@/typing";
import requests from "../utils/requests";

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
  // products: Product[]
}
async function getData(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

export default async function Home() {
  const movies: Movie[] = await getData(requests.fetchActionMovies);
  return (
    <div className="relative h-[150vh]">
      <Header />
      <main>
        <Banner movies={await getData(requests.fetchHorrorMovies)} />
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
    </div>
  );
}
