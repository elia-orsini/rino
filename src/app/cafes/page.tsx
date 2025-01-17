"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";

import getCafes from "@/utils/getCafes";

const Home: NextPage = () => {
  const [allCafes, setAllCafes] = useState<any>({});

  useEffect(() => {
    getCafes().then((cafes) => setAllCafes(cafes));
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="m-2 grid grid-cols-3 sm:m-10">
        {allCafes.length &&
          allCafes.map((cafe: any) => (
            <div className="w-full border border-black p-5">
              <p className="text-xl">{cafe.name}</p>
              <p>{cafe.city}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
