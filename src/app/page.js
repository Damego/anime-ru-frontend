"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Header from "@/app/components/header";
import Container from "@/app/components/container";
import FilterMenu from "@/app/components/filterMenu";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   if (isLoaded) return;
  //
  //   const wrapper = async () => {
  //     const raw = await fetch("http://127.0.0.1:8000/api/v1/animes")
  //     const data = await raw.json();
  //     setData(data)
  //     setLoaded(true);
  //   }
  //   wrapper()
  // }, [data, isLoaded, setData, setLoaded])

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

  const onSortClick = (type) => {

  }

  return (
    <main>
      <Header />

      <div className={"flex flex-row ml-6 mt-10 mr-6 gap-4"}>
        <Container titles={titles} />
        <FilterMenu onSortClick={onSortClick}/>
      </div>
    </main>
  );
}
