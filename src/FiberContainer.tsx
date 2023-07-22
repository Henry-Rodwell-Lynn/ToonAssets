import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";
import { Ground } from "./Ground";
import { Color } from "three";
import { useControls, folder } from "leva";

export function FiberContainer() {
  const { High, High_Mid, Low_Mid, Low, Background } = useControls("Color", {
    Model: folder({
      High: "#ffffff",
      High_Mid: "#845bfe",
      Low_Mid: "#5c3fb1",
      Low: "#342364",
    }),
    Background: folder({
      Background: '#ffffff',
    }),
  });

  const { Highlights, Midtones, Shadows } = useControls("Brightness Thresholds", {
    Highlights: {
      value: 0.95,
      min: 0,
      max: 1,
      step: 0.01
    },
    Midtones: {
      value: 0.35,
      min: 0,
      max: 1,
      step: 0.01
    },
    Shadows: {
      value: 0.0,
      min: 0,
      max: 1,
      step: 0.01
    },
  });

  const colors = useMemo(
    () => [
      new Color(High).convertLinearToSRGB(),
      new Color(High_Mid).convertLinearToSRGB(),
      new Color(Low_Mid).convertLinearToSRGB(),
      new Color(Low).convertLinearToSRGB(),
    ],
    [High, High_Mid, Low_Mid, Low]
  );
  
  const brightnessThresholds = useMemo(
    () => [Highlights, Midtones, Shadows],
    [Highlights, Midtones, Shadows]
  );

  return (
    <div style={{background: Background}} className=" justify-self-center absolute h-full w-full">
      <Canvas camera={{ position: [50, 4, 0], fov: 30 }} shadows>
        <Scene colors={colors} brightnessThresholds={brightnessThresholds} />
        <Ground />
        <OrbitControls 
          minDistance={10} 
          maxDistance={100}
          enablePan={false}
          enableRotate={true} />
      </Canvas>
    </div>
  );
}
