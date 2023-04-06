import {cookies} from "next/headers";
import HomePage from "@/app/page_wrap";

// I fucked client and server components lmao
// Why I can't use cookies in the client components which renders in the user's BROWSER?!?!!?

export default function Home() {
  const sessionID = cookies().get("session_id");

  return (
    <HomePage sessionID={sessionID}/>
  );
}
