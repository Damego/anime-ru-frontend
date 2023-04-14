import Image from "next/image";

export default function TitleCard({ image_url, name, url, average_rating }) {
  const scoreLabel = (
    <span
      className={
        "absolute top-5 right-0 rounded-l-lg border-2 border-y-yellow-400 border-l-yellow-400 border-r-yellow-300 bg-yellow-300 pr-3 pl-2 font-medium"
      }
    >{`★ ${average_rating}`}</span>
  )
  return (
    <div
      className={
        "border-1 w-64 rounded-lg bg-white pb-4 shadow-md transition hover:shadow-lg"
      }
    >
      <div className={"relative"}>
        {average_rating !== null ? scoreLabel : ""}
        <Image
          src={image_url}
          alt={name}
          width={260}
          height={200}
          className={"rounded-lg"}
        />
      </div>

      <div className="pl-2 pr-2">
        <a href={url}>{name}</a>
      </div>
    </div>
  );
}
