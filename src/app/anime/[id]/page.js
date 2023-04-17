import httpClient from "@/app/utils/httpClient";
import { Header } from "../../components/header";
import { cookies } from "next/headers";

import AnimeInfoBox from "@/app/components/animeInfoBox";


export default async function Page({ params }) {
  const cookie = cookies().get("session_id");
  let user = null;
  let userRating = null;
  if (cookie) {
    // I hate this shit named server components
    httpClient.instance.defaults.headers.common[
      "Cookie"
    ] = `${cookie.name}=${cookie.value}`;
    user = await httpClient.getMe();
    userRating = await httpClient.getRating(params.id)
  }

  const anime = await httpClient.getFullAnimeData(params.id);

  return (
    <main>
      <Header user={user} />
      <div className="mx-auto h-full w-full py-5 px-5">
        <div className={"mx-auto rounded-lg bg-white shadow-lg"}>
          <AnimeInfoBox anime={anime} userRating={userRating}/>
        </div>
      </div>
    </main>
  );
}
