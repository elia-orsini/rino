import { Vector3 } from "@react-three/fiber";

export default function toVector3Like(vector: Vector3) {
  return { x: vector[0], y: vector[0], z: vector[0] };
}
