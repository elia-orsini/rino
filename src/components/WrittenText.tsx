"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

const WrittenText: React.FC<{ text: string }> = ({ text }) => {
  useGSAP(() => {
    gsap.registerPlugin(TextPlugin);

    const texts = gsap.utils.toArray(".writeText");

    gsap.fromTo(
      texts,
      {
        text: "",
        ease: "none",
      },
      {
        duration: Math.floor(text.length * 0.005),
        text: text,
      }
    );
  }, []);

  return <p className="writeText bg-black/60" />;
};

export default WrittenText;
