"use client";

import Image from "next/image";
import AverageAnimeRating from "@/app/components/AverageAnimeRating";
import AllAnimeRating from "@/app/components/allAnimeRating";
import {useRouter} from "next/navigation";

export default function AnimeInfoBox({ anime, userRating }) {
  const router = useRouter();

  const Button = <button
    className="mt-5 h-12 w-48 rounded-lg border-2 bg-white"
    onClick={() => {router.push(`/rating?animeID=${anime.id}`)}}
  >
    Поставить оценку
  </button>

  return (
    <div className={"flex p-5 "}>
      <div className={"shrink-0"}>
        <Image
          src={anime.image_url}
          alt={anime.name}
          width={260}
          height={200}
          className={"rounded-lg"}
        />
      </div>

      <div className={"flex w-1/2 flex-col pl-5"}>
        <span className={"text-3xl"}>{anime.name}</span>
        <div className={"text-xl"}>
          <div>Описание:</div>
          <span>{anime.description}</span>
          <div>
            <br />
            <span>
              {"Жанры: " + anime.genres.map(({ name }) => name).join(", ")}
            </span>
          </div>
          <br />
          {anime.average_rating ? (
            <AverageAnimeRating rating={anime.average_rating} />
          ) : (
            ""
          )}
          {!userRating ? Button : `Ваша оценка: ${userRating.score}`}
        </div>
      </div>
      {anime.total_rating ? <AllAnimeRating data={anime.total_rating} /> : ""}
    </div>
  );
}
