"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Select from "@/app/components/Select";

const activeTextClass = "text-red-500 underline underline-offset-2";
const defaultTextClass =
  "hover:cursor-pointer hover:underline hover:underline-offset-2";


const SortButton = ({text, sort, allowNull, currentSort, onClick}) => {
  const check = sort === currentSort || (allowNull === true ? currentSort === null : false);
  return (<span
      className={check ? activeTextClass : defaultTextClass}
      onClick={() => onClick(sort)}
    >
      {text}
    </span>)
}
  

export default function FilterMenu({genres}) {
  const router = useRouter();
  
  const [selectedGenres, changeGenres] = useState([]);
  const [sortType, setSortType] = useState(null);

  const onSortClick = (type) => {
    setSortType(type);
  };

  const onGenreSelect = (selectedGenreValue) => {
    // todo: cursed codeeee
    const [selectedGenre] = genres.filter(
      (genre) => genre.value === selectedGenreValue
    );

    if (selectedGenres.map(genre => genre.value).includes(selectedGenreValue)) {
      changeGenres(selectedGenres.filter((genre) => genre.value !== selectedGenreValue));
    } else {
      changeGenres([...selectedGenres, selectedGenre]);
    }
  };

  useEffect(() => {
    const genreValues = selectedGenres.map(genre => genre.value);

    // why builtin urlsearchparams doesn't filter it?
    const params = {};
    if (sortType !== null) params.sort = sortType;
    if (genreValues.length !== 0) params.genres = genreValues;

    const queryString = new URLSearchParams(params).toString()

    router.push("?" + queryString);

  }, [selectedGenres, sortType]);

  return (
    <div
      className={
        "border-slate-150 w-1/5 rounded-lg border-2 bg-white pl-3 pr-3 pt-3 text-xl shadow-md"
      }
    >
      <div>
        <span className={"font-medium"}>Сортировка:</span>
        <div className={"flex flex-col pl-2"}>
          <SortButton text="По алфавиту" sort={"a"} allowNull={true} currentSort={sortType} onClick={onSortClick}/>
          <SortButton text="По рейтингу" sort={"r"} currentSort={sortType} onClick={onSortClick}/>
          <SortButton text="По популярности" sort={"p"} currentSort={sortType} onClick={onSortClick}/>
        </div>
      </div>

      <div>
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
