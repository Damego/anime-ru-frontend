import { cookies } from "next/headers";
import { Inter } from "next/font/google";
import Header from "@/app/components/header";
import Container from "@/app/components/container";
import FilterMenu from "@/app/components/filterMenu";
import httpClient from "@/app/utils/httpClient";

const inter = Inter({ subsets: ["latin"] });

export default async function Home({ searchParams }) {
  const cookie = cookies().get("session_id");
  // I hate this shit named server components
  httpClient.instance.defaults.headers.common[
    "Cookie"
  ] = `${cookie.name}=${cookie.value}`;
  const user = await httpClient.getMe();

  const genres = await httpClient.getGenreList();
  // I know we can use usememo hook but ehh...
  let selectedGenres = [];
  if (searchParams.genres !== undefined) {
    const selectedGenreValues = searchParams.genres
      .split(",")
      .map((strGenre) => Number(strGenre));
    selectedGenres = genres.filter((genre) =>
      selectedGenreValues.includes(genre.id)
    );
  }
  const { sort, search } = searchParams;

  const animeTitles = await httpClient.getAnimeList(
    sort,
    selectedGenres.map((genre) => genre.id).toString(),
    search
  );

  return (
    <main>
      <Header user={user} />

      <div className={"ml-6 mt-10 mr-6 flex flex-row gap-4"}>
        <Container titles={animeTitles} />
        <FilterMenu
          selectGenres={selectedGenres.map(({ name, id }) => ({
            name,
            value: id,
          }))}
          loadedGenres={genres.map(({ name, id }) => ({ name, value: id }))}
        />
      </div>
    </main>
  );
}
