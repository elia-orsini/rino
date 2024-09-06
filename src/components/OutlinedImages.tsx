"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const images = [
  "/outlined_images/1.png",
  "/outlined_images/2.png",
  "/outlined_images/3.png",
];

export default function Slideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);

  useGSAP(() => {
    const interval = setInterval(() => {
      gsap.to(imageRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

          gsap.fromTo(
            imageRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1 }
          );
        },
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 h-screen w-screen overflow-hidden opacity-80">
      <div ref={imageRef} className="absolute inset-0" style={{ opacity: 1 }}>
        <Image
          src={images[currentImageIndex]}
          alt="bg"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
