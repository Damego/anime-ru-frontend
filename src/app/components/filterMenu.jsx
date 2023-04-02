import { useState } from "react";

import Select from "@/app/components/Select";
export default function FilterMenu({ onSortClick, onGenreChange }) {
  const [activeSort, setActiveSort] = useState("a");
  const activeTextClass = "text-red-500 underline underline-offset-2";
  const defaultTextClass =
    "hover:cursor-pointer hover:underline hover:underline-offset-2";

  const onSortTextClick = (type) => {
    onSortClick(type);
    setActiveSort(type);
  };

  return (
    <div
      className={
        "border-slate-150 w-1/3 rounded-lg border-2 bg-white pl-3 pr-3 pt-3 text-xl shadow-md"
      }
    >
      <div>
        <span className={"font-medium"}>Сортировка:</span>
        <div className={"flex flex-col pl-2"}>
          <span
            className={activeSort === "a" ? activeTextClass : defaultTextClass}
            onClick={() => onSortTextClick("a")}
          >
            По алфавиту
          </span>
          <span
            className={activeSort === "r" ? activeTextClass : defaultTextClass}
            onClick={() => onSortTextClick("r")}
          >
            По рейтингу
          </span>
          <span
            className={activeSort === "p" ? activeTextClass : defaultTextClass}
            onClick={() => onSortTextClick("p")}
          >
            По популярности
          </span>
        </div>
      </div>

      <div className={""}>
        <span className={"font-medium"}>Фильтр</span>

        <Select
          options={[
            { name: "Genre 1", value: 1 },
            { name: "Genre 2", value: 2 },
            { name: "Genre 3", value: 3 },
            { name: "Genre 4", value: 4 },
          ]}
        />
      </div>
    </div>
  );
}
