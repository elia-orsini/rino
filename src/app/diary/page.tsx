"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";

import getDiaryEntries from "@/utils/getDiaryEntries";
import AddDiaryEntry from "@/components/diary/AddDiaryEntry";
import DiaryEntry from "@/components/diary/DiaryEntry";

const Home: NextPage = () => {
  const [diaryEntries, setDiaryEntries] = useState<any>([]);
  const [showAddWidget, setShowAddWidget] = useState(false);

  useEffect(() => {
    getDiaryEntries().then((entries) => setDiaryEntries(entries));
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col">
      {showAddWidget && (
        <AddDiaryEntry
          setShowAddWidget={setShowAddWidget}
          userId={"a40c0baa-2807-4507-84ec-cdbb29f816a3"}
        />
      )}

      <button
        onClick={() => setShowAddWidget(true)}
        className="mx-2 w-max border border-black p-2 sm:mx-10"
      >
        + add coffee visit
      </button>

      <div className="mx-2 mt-4 sm:mx-10">
        <h2 className="font-semibold opacity-80">Your Visits</h2>
        <div className="mt-2 flex flex-col">
          {diaryEntries &&
            diaryEntries.map((entry: any) => <DiaryEntry entry={entry} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
