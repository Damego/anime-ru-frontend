import Image from "next/image";

export default function TitleCard({imageUrl, titleName, url, score}) {
  return (
    <div className={"bg-white border-1 rounded-lg shadow-md w-48 pb-4"}>
      <div className={"relative"}>
        <span className={"bg-yellow-300 absolute top-5 right-0 font-medium pr-2 pl-1"}>{`★ ${score}`}</span>
        <Image src={imageUrl} alt={titleName} width={200} height={200} className={"rounded-lg"}/>
      </div>


      <div className="pl-2 pr-2">
        <a href={url}>{titleName}</a>
      </div>


    </div>
  )
}