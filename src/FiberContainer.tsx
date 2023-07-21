import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";
import { Ground } from "./Ground";

export function FiberContainer() {
  return (
    <div className=" justify-self-center absolute h-full w-full bg-[#ffffff]">
    <Canvas camera={{ position: [50, 4, 0], fov: 30 }} shadows>
      <Scene />
      <Ground />
      <OrbitControls 
      minDistance={40} 
      maxDistance={100}
      enablePan={false}
      enableRotate={true} />
    </Canvas>
    </div>
  );

}
