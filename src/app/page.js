"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Header from "@/app/components/header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   if (isLoaded) return;
  //
  //   const wrapper = async () => {
  //     const raw = await fetch("http://127.0.0.1:8000/api/v1/animes")
  //     const data = await raw.json();
  //     setData(data)
  //     setLoaded(true);
  //   }
  //   wrapper()
  // }, [data, isLoaded, setData, setLoaded])

  return (
    <main>
      <Header />
    </main>
  );
}
