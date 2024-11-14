"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

import useWindowWidth from "@/hooks/useWindowWidth";

import ArrowImage from "./ArrowImage";
import BackArrow from "./BackArrow";
import useRinoStore from "@/store/useStore";
import { Vector3 } from "three";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const { setCameraPosition } = useRinoStore();

  useGSAP(() => {
    const sectionTitles = gsap.utils.toArray(".sectionTitle");

    gsap.to(sectionTitles, {
      opacity: showMenu ? 1 : 0,
      translateX: showMenu ? "0px" : "10px",
      duration: 0.3,
      stagger: 0.2,
    });
  }, [showMenu]);

  const isScreenMobile = useWindowWidth()! < 500;

  function onMenuClick() {
    if (isScreenMobile) {
      setShowMenu(false);
    }

    setCameraPosition(new Vector3(0, 0, 3));
  }

  function onBackClick() {
    setCameraPosition(new Vector3(0, 0, 5));
  }

  function closeMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className="absolute right-0 z-20 m-4 flex flex-col gap-y-5 text-right font-mono text-5xl font-bold uppercase">
        <Link
          onClick={onMenuClick}
          href="/music"
          className="sectionTitle ml-auto block w-max bg-black/80 opacity-0 sm:bg-black/50"
        >
          music
        </Link>
        <Link
          onClick={onMenuClick}
          href="/productions"
          className="sectionTitle ml-auto block w-max bg-black/80 opacity-0 sm:bg-black/50"
        >
          productions
        </Link>
        <Link
          onClick={onMenuClick}
          href="/about"
          className="sectionTitle ml-auto block w-max bg-black/80 opacity-0 sm:bg-black/50"
        >
          about
        </Link>
        <Link
          onClick={onMenuClick}
          href="/contact"
          className="sectionTitle ml-auto block w-max bg-black/80 opacity-0 sm:bg-black/50"
        >
          contact
        </Link>
        <Link
          onClick={onBackClick}
          href="/"
          className="sectionTitle ml-auto block w-max bg-black/80 opacity-0 sm:bg-black/50"
        >
          <BackArrow />
          back
        </Link>
      </div>

      <button
        onClick={closeMenu}
        className="absolute bottom-10 right-10 z-20 h-20 w-20 rounded-full border border-white p-4 transition-colors duration-500 hover:bg-white hover:text-black"
      >
        <ArrowImage rotated={showMenu} />
      </button>
    </>
  );
}
