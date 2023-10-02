import Banner from "@/components/Banner";
import Header from "@/components/Header";
import { Movie } from "@/typing";
import requests from "../utils/requests";
import Row from "@/components/Row";

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
    <div className="relative h-[150vh] bg-gradient-to-b lg:h-140vh">
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner movies={await getData(requests.fetchNetflixOriginals)} />
        <section>
          <Row
            title="Trending Now"
            movies={await getData(requests.fetchTrending)}
          />
          <Row
            title="Top Rated"
            movies={await getData(requests.fetchTopRated)}
          />
          <Row
            title="Action Thrillers"
            movies={await getData(requests.fetchActionMovies)}
          />
          {/* My List Component */}
          {/* {list.length > 0 && <Row title="My List" movies={list} />} */}
          <Row
            title="Comedies"
            movies={await getData(requests.fetchComedyMovies)}
          />
          <Row
            title="Scary Movies"
            movies={await getData(requests.fetchHorrorMovies)}
          />
          <Row
            title="Romance Movies"
            movies={await getData(requests.fetchRomanceMovies)}
          />
          <Row
            title="Documentaries"
            movies={await getData(requests.fetchDocumentaries)}
          />
        </section>
      </main>
      {/* Modal */}
    </div>
  );
}
