"use client";

import { createClient } from "@/utils/supabase/client";
import React, { useEffect, useState } from "react";
import RadioButton from "./RadioButton";

const AddDiaryEntry: React.FC<{ userId: any; setShowAddWidget: any }> = ({
  userId,
  setShowAddWidget,
}) => {
  const supabase = createClient();
  const [allCafes, setAllCafes] = useState<any>({});
  const [selectedCafe, setSelectedCafe] = useState<string>("");
  const [origin, setOrigin] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    supabase
      .from("cafes")
      .select("id, name, city")
      .then(({ data }) => setAllCafes(data));
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase.from("diary_entries").insert([
      {
        user: userId,
        cafe: selectedCafe,
        date: selectedDate,
        score: score,
        origin: origin,
      },
    ]);

    if (error) {
      setMessage("Error adding entry: " + error.message);
    } else {
      setMessage("Entry added successfully!");
      setSelectedCafe("");
      setOrigin("");
      setScore(0);
    }

    setLoading(false);
  };

  return (
    <div className="fixed z-10 h-screen w-screen bg-black/40">
      <div className="fixed left-1/2 top-1/2 min-h-[40vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 transform border border-black bg-white lg:w-[50vw]">
        <form
          onSubmit={handleSubmit}
          className="m-3 flex flex-col gap-y-4 sm:m-10"
        >
          <button
            className="z-30 -mb-10 ml-auto text-lg"
            onClick={() => setShowAddWidget(false)}
          >
            X
          </button>
          <div>
            <label className="border-b border-black uppercase">Cafe</label>

            <select
              className="mt-2 block border border-black px-6 py-1"
              onChange={(e) => setSelectedCafe(e.target.value)}
              required
            >
              <option value={0}>select cafe</option>
              {allCafes.length &&
                allCafes.map((cafe: any) => (
                  <option value={cafe.id}>{cafe.name}</option>
                ))}
            </select>
          </div>

          <div>
            <label className="border-b border-black uppercase">Type</label>

            <div className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-5">
              <RadioButton name="type" value="Espresso" />
              <RadioButton name="type" value="Long Black" />
              <RadioButton name="type" value="Batch Brew" />
              <RadioButton name="type" value="V60" />
              <RadioButton name="type" value="Kalita Wave" />
              <RadioButton name="type" value="Chemex" />
              <RadioButton name="type" value="AeroPress" />
              <RadioButton name="type" value="Cold Brew" />
              <RadioButton name="type" value="Cortado" />
              <RadioButton name="type" value="Cappuccino" />
              <RadioButton name="type" value="Flat White" />
              <RadioButton name="type" value="Mocha" />
              <RadioButton name="type" value="Dirty" />
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div>
              <label className="border-b border-black uppercase">Origin</label>

              <input
                type="text"
                onChange={(e) => setOrigin(e.target.value)}
                className="mt-2 block h-7 w-32 border border-black px-2 focus:outline-none lg:w-40"
              />
            </div>

            <div>
              <label className="border-b border-black uppercase">Date</label>
              <input
                onChange={(e) => setSelectedDate(e.target.value)}
                className="mt-2 block w-36 border border-black bg-white px-4 text-black sm:w-44"
                type="date"
              />
            </div>
          </div>

          <div>
            <label className="border-b border-black uppercase">Score</label>

            <div className="mt-2 block">
              <input
                className="h-5 w-5 bg-black"
                type="radio"
                onClick={() => setScore(1)}
                checked={score >= 1}
              />
              <input
                className="h-5 w-5 bg-black"
                type="radio"
                onClick={() => setScore(2)}
                checked={score >= 2}
              />
              <input
                className="h-5 w-5 bg-black"
                type="radio"
                onClick={() => setScore(3)}
                checked={score >= 3}
              />
              <input
                className="h-5 w-5 bg-black"
                type="radio"
                onClick={() => setScore(4)}
                checked={score >= 4}
              />
              <input
                className="h-5 w-5 bg-black"
                type="radio"
                onClick={() => setScore(5)}
                checked={score >= 5}
              />
            </div>
          </div>

          <button
            className="mt-8 w-max border border-black p-1 text-sm hover:bg-black/10"
            type="submit"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Coffee Visit"}
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default AddDiaryEntry;
