import Image from "next/image";

export default function TitleCard({imageUrl, titleName, url}) {
  return (
    <div className={"flex flex-column bg-red border-1 rounded-lg shadow-md"}>
      <Image src={imageUrl} alt={titleName} width={200} height={200}/>


        <a href={url}>{titleName}</a>

    </div>
  )
}