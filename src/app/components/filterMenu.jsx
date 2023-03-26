import {useState} from "react";

export default function FilterMenu({ onSortClick, onGenreChange }) {
  const [activeSort, setActiveSort] = useState("a");
  const activeTextClass = "text-red-500 underline underline-offset-2"
  const defaultTextClass = "hover:cursor-pointer hover:underline hover:underline-offset-2"

  const onSortTextClick = (type) => {
    onSortClick(type);
    setActiveSort(type);
  }

  return (
    <div
      className={
        "border-slate-150 w-1/3 rounded-lg border-2 bg-white pl-3 pt-3 shadow-md text-xl"
      }
    >
      <div>
        <span className={"font-medium"}>Сортировка:</span>
        <div className={"flex flex-col pl-2"}>
          <span className={(activeSort === "a" ? activeTextClass : defaultTextClass)} onClick={() => onSortTextClick("a")}>По алфавиту</span>
          <span className={(activeSort === "r" ? activeTextClass : defaultTextClass)} onClick={() => onSortTextClick("r")}>По рейтингу</span>
          <span className={(activeSort === "p" ? activeTextClass : defaultTextClass)} onClick={() => onSortTextClick("p")}>По популярности</span>
        </div>
      </div>

      <div className={""}>
        <span className={"font-medium"}>Фильтр</span>

        <div>
        </div>
      </div>
    </div>
  );
}
