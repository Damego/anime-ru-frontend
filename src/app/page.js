"use client";

import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Header from "@/app/components/header";
import Container from "@/app/components/container";
import FilterMenu from "@/app/components/filterMenu";
import httpClient from "@/app/api/httpClient";

const inter = Inter({ subsets: ["latin"] });

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


export default function Home() {
  const [data, setData] = useState([]);
  const [selectedGenres, changeGenres] = useState([]);
  const [loadedGenres, changeLoadedGenres] = useState([]);
  const [sortType, setSortType] = useState("a");

  useEffect(() => {
    const wrapper = async () => {
      const genres = await httpClient.getGenreList();
      changeLoadedGenres(genres.map(genre => ({name: genre.name, value: genre.id})));
    };
    wrapper();
  }, []);

  useEffect(() => {
    const wrapper = async () => {
      const animeList = await httpClient.getAnimeList(sortType, selectedGenres);
      setData(animeList)
    }
    wrapper()
  }, [sortType, selectedGenres])


  const onSortClick = (type) => {
    setSortType(type);
  };

  const onGenreSelect = (selectedGenreValue) => {
    const [selectedGenre] = loadedGenres.filter(
      (genre) => genre.value === selectedGenreValue
    );
    if (selectedGenres.includes(selectedGenre)) {
      changeGenres(selectedGenres.filter((genre) => genre !== selectedGenre));
    } else {
      changeGenres([...selectedGenres, selectedGenre]);
    }
  };

  return (
    <main>
      <Header />

      <div className={"ml-6 mt-10 mr-6 flex flex-row gap-4"}>
        <Container titles={titles} />
        <FilterMenu
          activeSort={sortType}
          onSortClick={onSortClick}
          onGenreSelect={onGenreSelect}
          selectedGenres={selectedGenres}
          genres={loadedGenres}
        />
      </div>
    </main>
  );
}
