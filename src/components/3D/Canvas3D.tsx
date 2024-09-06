"use client";
import { Canvas } from "@react-three/fiber";
import Logo3D from "./Logo3D";

export default function Canvas3D() {
  return (
    <Canvas className="z-10">
      <Logo3D />
    </Canvas>
  );
}
