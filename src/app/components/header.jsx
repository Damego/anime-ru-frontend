"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import buildQueryString from "../utils/buildQueryString";

export function Header({user}) {
  const router = useRouter();

  return (
    <div>
      <div className="flex h-12 flex-row justify-between bg-white shadow-md">
        <div className="ml-2 self-center">
          <a href={"/"}>Аниме ру</a>
        </div>

        <div className="mr-2 self-center">
          {/* TODO: maybe better use tag `a`? */}
          {!user ? (
            <a href={"/auth"}>Вход</a>
          ) : (
            user.name
          )}
        </div>
      </div>
    </div>
  );
}

export function HeaderWithSearch({ user }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchText, changeSearchText] = useState("");

  useEffect(() => {
    const sort = searchParams.get("sort");
    const genres = searchParams.get("genres");
    router.push(buildQueryString({ sort, genres, search: searchText }));
  }, [searchText]);

  return (
    <div>
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
          onInput={(inputEl) => changeSearchText(inputEl.target.value)}
        />

        <div className="mr-2 self-center">
          {/* TODO: maybe better use tag `a`? */}
          {!user ? (
            <a href={"/auth"}>Вход</a>
          ) : (
            user.name
          )}
        </div>
      </div>
    </div>
  );
}
