function Circle({rating, text}) {
  return (
    <div className={"flex flex-col items-center"}>
      <div className={"flex bg-black rounded-full w-16 h-16"}>
        <div className={"bg-white rounded-full w-14 h-14 mx-auto my-auto text-center text-4xl pt-1"}>
          {rating}
        </div>
      </div>
      {text}
    </div>
  )
}

export default function AverageAnimeRating({rating}) {
  return (
    <div className={"flex flex-col"}>
      Средние оценки:
      <div className={"flex flex-row space-x-3 "}>
        <Circle rating={rating.score} text="Общая"/>
        <Circle rating={rating.score_by_story} text="Сюжет"/>
        <Circle rating={rating.score_by_drawing} text="Рисовка"/>
        <Circle rating={rating.score_by_characters} text="Персонажи"/>
      </div>
    </div>
  )
}