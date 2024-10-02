import React from "react";
import { useRef } from "react";
import { PrimitiveProps, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import useWindowWidth from "@/hooks/useWindowWidth";
import get3DZoomLevel from "@/utils/get3DZoomLevel";

export default function Logo3D() {
  const gltf = useGLTF("/rino-spinning-logo.glb", true, true);
  const ref = useRef<PrimitiveProps>();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  const width = useWindowWidth();
  const zoomLevel = width ? get3DZoomLevel(width) : 0;

  return (
    <>
      <Environment files="/skylit.hdr" />
      <directionalLight position={[-5, 5, 0]} />
      <directionalLight position={[5, -5, 0]} />
      <camera position={[0, 1, 0]} />
      <primitive
        ref={ref}
        object={gltf.scene}
        rotation={[-Math.PI, Math.PI, Math.PI]}
        position={[0, 0, zoomLevel]}
      />
    </>
  );
}
