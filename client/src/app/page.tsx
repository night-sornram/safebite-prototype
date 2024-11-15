"use client"

import Image from "next/image";
import { useEffect,useState } from "react";

export default function Home() {

  const [data, setData] = useState(null);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    fetch(`${backendUrl}/api/home`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h1>
        {data ? data.message : "Loading"}
      </h1>
    </div>
  );
}
