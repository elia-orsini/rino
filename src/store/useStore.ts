import { Vector3 } from "three";
import { create } from "zustand";

interface RinoStore {
  logoPosition: Vector3;
  cameraPosition: Vector3;
  setCameraPosition: (newPosition: Vector3) => void;
  setLogoPosition: (newPosition: Vector3) => void;
}

const useRinoStore = create<RinoStore>()((set) => ({
  logoPosition: new Vector3(0, 0, 0),
  cameraPosition: new Vector3(0, 0, 5),
  setCameraPosition: (newPosition) =>
    set({
      cameraPosition: newPosition,
    }),
  setLogoPosition: (newPosition) =>
    set({
      logoPosition: newPosition,
    }),
}));

export default useRinoStore;
