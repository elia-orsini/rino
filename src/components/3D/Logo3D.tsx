import React, { useEffect } from "react";
import { useRef } from "react";
import { PrimitiveProps, useFrame, useThree } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import useWindowWidth from "@/hooks/useWindowWidth";
import get3DZoomLevel from "@/utils/get3DZoomLevel";
import useRinoStore from "@/store/useStore";
import { Vector3 } from "three";

export default function Logo3D() {
  const gltf = useGLTF("/rino-spinning-logo.glb", true, true);
  const ref = useRef<PrimitiveProps>();
  const { logoPosition, cameraPosition, setLogoPosition } = useRinoStore();

  const width = useWindowWidth();
  const { camera } = useThree();

  useEffect(() => {
    const zoomLevel = width ? get3DZoomLevel(width) : 0;
    setLogoPosition(new Vector3(0, 0, zoomLevel));
  }, [width]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }

    camera.position.lerp(cameraPosition, 0.005);
    ref.current!.position.lerp(logoPosition, 0.005)
  });

  return (
    <>
      <Environment files="/skylit.hdr" />
      <directionalLight position={[-5, 5, 0]} />
      <directionalLight position={[5, -5, 0]} />
      <primitive
        ref={ref}
        object={gltf.scene}
        rotation={[-Math.PI, Math.PI, Math.PI]}
        // position={logoPosition}
      />
    </>
  );
}
