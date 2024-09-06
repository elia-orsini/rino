"use client";

import { useState } from "react";
import ArrowImage from "./ArrowImage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import BackArrow from "./BackArrow";

export default function Menu() {
  const [rotated, setRotated] = useState(false);

  useGSAP(() => {
    const sectionTitles = gsap.utils.toArray(".sectionTitle");

    gsap.to(sectionTitles, {
      opacity: rotated ? 1 : 0,
      duration: 1,
      stagger: 0.2,
    });
  }, [rotated]);

  return (
    <>
      <div className="absolute right-0 z-20 m-4 flex flex-col gap-y-5 text-right font-mono text-5xl font-bold uppercase">
        <Link
          href="/music"
          className="sectionTitle ml-auto block w-max bg-black/50 opacity-0"
        >
          music
        </Link>
        <Link
          href="/productions"
          className="sectionTitle ml-auto block w-max bg-black/50 opacity-0"
        >
          productions
        </Link>
        <Link
          href="/about"
          className="sectionTitle ml-auto block w-max bg-black/50 opacity-0"
        >
          about
        </Link>
        <Link
          href="/contact"
          className="sectionTitle ml-auto block w-max bg-black/50 opacity-0"
        >
          contact
        </Link>
        <Link
          href="/"
          className="sectionTitle ml-auto block w-max bg-black/50 opacity-0"
        >
          <BackArrow />
          back
        </Link>
      </div>

      <button
        onClick={() => setRotated(!rotated)}
        className="absolute bottom-10 right-10 z-20 h-20 w-20 rounded-full border border-white p-4"
      >
        <ArrowImage rotated={rotated} />
      </button>
    </>
  );
}
