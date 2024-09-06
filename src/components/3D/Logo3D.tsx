import React from "react";
import { useRef } from "react";
import { PrimitiveProps, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";

export default function Logo3D() {
  const gltf = useGLTF("/rino-spinning-logo.glb", true, true);
  const ref = useRef<PrimitiveProps>();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      <Environment files="/skylit.hdr" />
      <directionalLight position={[-5, 5, 0]} />
      <directionalLight position={[5, -5, 0]} />
      <camera position={[0, 1, 0]} />
      {/* <color attach="background" args={["black"]} /> */}
      <primitive
        ref={ref}
        object={gltf.scene}
        rotation={[-Math.PI, Math.PI, Math.PI]}
        position={[0, 0, -0.5]}
      />
    </>
  );
}
