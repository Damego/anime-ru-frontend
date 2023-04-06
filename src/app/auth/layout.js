import {cookies} from "next/headers";
import {redirect} from "next/navigation";

import "../globals.css";

export const metadata = {
  title: "Anime ru",
  description: "Оценивайте просмотренные вами аниме тайтлы",
};

export default function RootLayout({ children }) {
  if (cookies().get("session_id") !== undefined) {
    redirect("/");
    return
  }

  return (
    <html lang="en">
    <body className="bg-slate-50">{children}</body>
    </html>
  );
}


