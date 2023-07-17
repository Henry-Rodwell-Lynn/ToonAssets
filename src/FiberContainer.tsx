import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";
import { Ground } from "./Ground";

export function FiberContainer() {
  return (
    <div className=" justify-self-center absolute h-full w-full bg-[#0140b9]">
    <Canvas camera={{ position: [14.4666, 2.0365, 5.556165], fov: 30 }} shadows>
      <Scene />
      <Ground />
      <OrbitControls 
      minDistance={5} 
      maxDistance={30}
      enablePan={false}
      enableRotate={true} />
    </Canvas>
    </div>
  );

}
