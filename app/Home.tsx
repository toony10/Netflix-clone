import Banner from "@/components/Banner";
import Header from "@/components/Header";
import { Movie } from "@/typing";
import requests from "../utils/requests";
import { getData } from "./page";

export default async function Home() {
  const movies: Movie[] = await getData(requests.fetchActionMovies);
  return (
    <div className="relative h-[150vh]">
      <Header />
      <main>
        <Banner movies={await getData(requests.fetchNetflixOriginals)} />
        <section>
          <Row />
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
