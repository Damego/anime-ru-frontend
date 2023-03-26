import Image from "next/image";

export default function TitleCard({ imageUrl, name, url, score }) {
  return (
    <div
      className={
        "border-1 w-64 rounded-lg bg-white pb-4 shadow-md transition hover:shadow-lg"
      }
    >
      <div className={"relative"}>
        <span
          className={
            "absolute top-5 right-0 rounded-l-lg border-2 border-y-yellow-400 border-l-yellow-400 border-r-yellow-300 bg-yellow-300 pr-3 pl-2 font-medium"
          }
        >{`★ ${score}`}</span>
        <Image
          src={imageUrl}
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
