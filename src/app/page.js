import {cookies} from "next/headers";
import { Inter } from "next/font/google";
import Header from "@/app/components/header";
import Container from "@/app/components/container";
import FilterMenu from "@/app/components/filterMenu";
import httpClient from "@/app/utils/httpClient";


const inter = Inter({ subsets: ["latin"] });

// Test data
const titles = [
  {
    imageUrl:
      "https://animego.org/upload/anime/images/63f85d883089f370485553.jpg",
    name: "Ангел по соседству меня ужасно балует!",
    url: "#",
    score: 9.1,
  },
  {
    imageUrl:
      "https://animego.org/upload/anime/images/63f85d883089f370485553.jpg",
    name: "Ангел по соседству меня ужасно балует!",
    url: "#",
    score: 9.1,
  },
  {
    imageUrl:
      "https://animego.org/upload/anime/images/63f85d883089f370485553.jpg",
    name: "Ангел по соседству меня ужасно балует!",
    url: "#",
    score: 9.1,
  },
  {
    imageUrl:
      "https://animego.org/upload/anime/images/63f85d883089f370485553.jpg",
    name: "Ангел по соседству меня ужасно балует!",
    url: "#",
    score: 9.1,
  },
  {
    imageUrl:
      "https://animego.org/upload/anime/images/63f85d883089f370485553.jpg",
    name: "Ангел по соседству меня ужасно балует!",
    url: "#",
    score: 9.1,
  },
  {
    imageUrl:
      "https://animego.org/upload/anime/images/63f85d883089f370485553.jpg",
    name: "Ангел по соседству меня ужасно балует!",
    url: "#",
    score: 9.1,
  },
  {
    imageUrl:
      "https://animego.org/upload/anime/images/63f85d883089f370485553.jpg",
    name: "Ангел по соседству меня ужасно балует!",
    url: "#",
    score: 9.1,
  },
  {
    imageUrl:
      "https://animego.org/upload/anime/images/63f85d883089f370485553.jpg",
    name: "Ангел по соседству меня ужасно балует!",
    url: "#",
    score: 9.1,
  },
  {
    imageUrl:
      "https://animego.org/upload/anime/images/63f85d883089f370485553.jpg",
    name: "Ангел по соседству меня ужасно балует!",
    url: "#",
    score: 9.1,
  },
  {
    imageUrl:
      "https://animego.org/upload/anime/images/63f85d883089f370485553.jpg",
    name: "Ангел по соседству меня ужасно балует!",
    url: "#",
    score: 9.1,
  },
];

const predefinedGenres = [
  {name: "Романтика", id: 1},
  {name: "Иссекай", id: 2},
  {name: "Фентези", id: 3},
  {name: "Повседневность", id: 4},
  {name: "Комедия", id: 5}
]


export default async function Home({searchParams}) {
  console.log(searchParams);
  const sessionID = cookies().get("session_id");

  // TODO: parse searchParams
  // I'm not at home rn so I don't have good pc to run both front and back
  const animeTitles = titles // await httpClient.getAnimeList()
  const genres = predefinedGenres //  await httpClient.getGenreList()
  const user = null // await httpClient.getMe();

  return (
    <main>
      <Header username={user?.name}/>

      <div className={"ml-6 mt-10 mr-6 flex flex-row gap-4"}>
        <Container titles={animeTitles} />
        <FilterMenu
          genres={genres.map(({name, id}) => ({name, value: id}))}
        />
      </div>
    </main>
  );
}
