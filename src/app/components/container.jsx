import TitleCard from "@/app/components/titleCard";

export default function Container({ titles }) {
  return (
    <div
      className={
        "flex flex-row flex-wrap content-start gap-4 w-4/5"
      }
    >
      {titles.map((title) => (
        <TitleCard {...title} key={title.name} />
      ))}
    </div>
  );
}
