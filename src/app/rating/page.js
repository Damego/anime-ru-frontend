"use client";

import { useState } from "react";
import httpClient from "@/app/utils/httpClient";
import { useRouter, useSearchParams } from "next/navigation";

const inputClassName = "border-2";

const ScoreInput = ({ onChange }) => {
  const [currentNum, setNum] = useState(0);

  const onStarClick = (number) => {
    setNum(number);
    onChange(number);
  };
  return (
    <div className={""}>
      {[...Array(10).keys()].map((num) => (
        <span
          className={`mx-1 text-4xl hover:cursor-pointer hover:bg-red-500 ${
            currentNum === num + 1 ? "bg-red-400" : ""
          }`}
          onClick={() => onStarClick(num + 1)}
          key={num}
        >
          {num + 1}
        </span>
      ))}
    </div>
  );
};

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [score, setScore] = useState(null);
  const [scoreStory, setScoreStory] = useState(null);
  const [scoreDrawing, setScoreDrawing] = useState(null);
  const [scoreCharacters, setScoreCharacters] = useState(null);
  const [reviewText, changeReviewText] = useState("");

  const submit = async () => {
    const animeID = searchParams.get("animeID");

    await httpClient.addRating(
      Number(animeID),
      score,
      scoreStory,
      scoreDrawing,
      scoreCharacters,
      reviewText
    );

    router.back();
  };

  return (
    <div
      className={"flex h-screen w-screen flex-col items-center justify-center"}
    >
      <div
        className={
          "flex h-1/2 w-1/3 flex-col items-center justify-center rounded-lg bg-white text-xl shadow-md"
        }
      >
        <label>Общая оценка</label>
        <ScoreInput onChange={(num) => setScore(num)} />
        <label>Оценка за сюжет</label>
        <ScoreInput onChange={(num) => setScoreStory(num)} />
        <label>Оценка за рисовку</label>
        <ScoreInput onChange={(num) => setScoreDrawing(num)} />
        <label>Оценка за персонажей</label>
        <ScoreInput onChange={(num) => setScoreCharacters(num)} />

        <label>Отзыв</label>
        <textarea
          className={inputClassName}
          onChange={(inputElement) =>
            changeReviewText(inputElement.target.value)
          }
        />

        <button onClick={submit}>Отправить</button>
      </div>
    </div>
  );
}
