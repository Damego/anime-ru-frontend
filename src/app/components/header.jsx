"use client";

import { useRouter } from 'next/navigation';

export default function Header({isAuthorized}) {
  const router = useRouter();

  return (
    <div className="flex h-12 flex-row justify-between bg-white shadow-md">
      <div className="ml-2 self-center">
        <a>Аниме ру</a>
      </div>

      <input
        type={"text"}
        placeholder={"поиск аниме..."}
        name={"search"}
        id={"search"}
        className={
          "border-slate-150 h-8 w-1/2 self-center rounded-full border-2 pl-2 focus:border-slate-500 focus:outline-none"
        }
      />

      <div className="mr-2 self-center">
        {!isAuthorized ? <div onClick={() => router.push("/auth")}>Вход</div> : <></>}
      </div>
    </div>
  );
}
