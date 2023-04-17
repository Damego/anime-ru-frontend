function Line({scoreNum, score, total}) {
  return (
    <div className={`flex w-${score}/${total} bg-red justify-between`}>
      <span>{score}</span>
      <span>{scoreNum}</span>
    </div>
  )
}

export default function AllAnimeRating({data}) {
  const {total, ...scores} = data;


  return (
    <div className={"h-1/2 text-xl ml-5"}>
      <div className={"bg-red-500 text-white mx-auto flex px-2 "}>Оценки людей</div>
      {Object.values(scores).reverse().map((score, index) => <Line scoreNum={10-index} score={score} total={total} key={index}/>)}
    </div>
  )
}