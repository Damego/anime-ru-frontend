import { useState } from "react";

import Select from "@/app/components/Select";

const activeTextClass = "text-red-500 underline underline-offset-2";
const defaultTextClass =
  "hover:cursor-pointer hover:underline hover:underline-offset-2";

export default function FilterMenu({activeSort, onSortClick, selectedGenres, genres, onGenreSelect }) {
  return (
    <div
      className={
        "border-slate-150 w-1/5 rounded-lg border-2 bg-white pl-3 pr-3 pt-3 text-xl shadow-md"
      }
    >
      <div>
        <span className={"font-medium"}>Сортировка:</span>
        <div className={"flex flex-col pl-2"}>
          <span
            className={activeSort === "a" ? activeTextClass : defaultTextClass}
            onClick={() => onSortClick("a")}
          >
            По алфавиту
          </span>
          <span
            className={activeSort === "r" ? activeTextClass : defaultTextClass}
            onClick={() => onSortClick("r")}
          >
            По рейтингу
          </span>
          <span
            className={activeSort === "p" ? activeTextClass : defaultTextClass}
            onClick={() => onSortClick("p")}
          >
            По популярности
          </span>
        </div>
      </div>

      <div className={""}>
        <span className={"font-medium"}>Фильтр</span>

        <Select
          options={genres}
          selectedOptions={selectedGenres}
          onOptionSelect={onGenreSelect}
        />
      </div>
    </div>
  );
}
