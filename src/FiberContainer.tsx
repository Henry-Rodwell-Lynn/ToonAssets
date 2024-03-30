import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";
import { Ground } from "./Ground";
import { Color } from "three";
import { useControls, folder } from "leva";
import {
  EffectComposer,
  Bloom,
  Pixelation,
  Scanline,
} from "@react-three/postprocessing";
import { Perf } from "r3f-perf";

export function FiberContainer() {
  const { High, High_Mid, Low_Mid, Low, Background } = useControls("Color", {
    Model: folder({
<<<<<<< HEAD
      High: "#ff76f1",
      High_Mid: "#c700b3",
      Low_Mid: "#4b0044",
      Low: "#26004b",
=======
      High: "#ff97f1",
      High_Mid: "#ff5ce9",
      Low_Mid: "#b03fa5",
      Low: "#1f003e",
>>>>>>> parent of 921f015 (Transparent Model)
    }),
    Background: folder({
      Background: "#ffffff",
    }),
  });

  const { Highlights, Midtones, Shadows, Light_X, Light_Y, Light_Z } =
    useControls("Shader", {
      Material: folder({
        Highlights: {
          value: 0.87,
          min: 0,
          max: 1,
          step: 0.01,
        },
        Midtones: {
          value: 0.35,
          min: 0,
          max: 1,
          step: 0.01,
        },
        Shadows: {
          value: 0.0,
          min: 0,
          max: 1,
          step: 0.01,
        },
      }),
      Light_Position: folder({
        Light_X: {
          value: 25,
          min: -100,
          max: 100,
          step: 1,
        },
        Light_Y: {
          value: 25,
          min: -100,
          max: 100,
          step: 1,
        },
        Light_Z: {
          value: 25,
          min: -100,
          max: 100,
          step: 1,
        },
      }),
    });

  const { Threshold, Smoothing, Intensity, Amount, Density } = useControls(
    "Effects",
    {
      Bloom: folder({
        Threshold: {
          value: 0.0,
          min: 0.01,
          max: 1,
          step: 0.01,
        },
        Smoothing: {
          value: 0,
          min: 0,
          max: 1,
          step: 0.01,
        },
        Intensity: {
          value: 0.0,
          min: 0,
          max: 5,
          step: 0.01,
        },
      }),
      Pixelate: folder({
        Amount: {
          value: 0,
          min: 0,
          max: 10,
          step: 0.1,
        },
      }),
      Scanlines: folder({
        Density: {
          value: 0.0,
          min: 0,
          max: 2,
          step: 0.01,
        },
      }),
    }
  );

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

  const lightPosition = useMemo(
    () => [Light_X, Light_Y, Light_Z],
    [Light_X, Light_Y, Light_Z]
  );

  return (
<<<<<<< HEAD
    <div
      style={{ background: Background }}
      className=" justify-self-center absolute h-full w-full"
    >
      <Canvas camera={{ position: [400, 0, 0], fov: 30 }} shadows>
        <Perf position="bottom-left" />
        <Scene
          colors={colors}
          brightnessThresholds={brightnessThresholds}
          lightPosition={lightPosition}
        />
        <OrbitControls
          minDistance={40}
          maxDistance={50}
          enablePan={true}
          enableRotate={true}
        />
        <EffectComposer
          enabled={false}
          disableNormalPass={false}
          depthBuffer={false}
        >
          <Scanline scrollSpeed={0.05} density={Density} opacity={0.3} />
          <Bloom
            luminanceThreshold={Threshold}
            luminanceSmoothing={Smoothing}
            height={300}
            intensity={Intensity}
            resolutionScale={1000}
            resolutionX={1080}
            resolutionY={1080}
          />
        </EffectComposer> 
           <Pixelation granularity={Amount} />
=======
    <div style={{background: Background}} className=" justify-self-center absolute h-full w-full">
      <Canvas camera={{ position: [50, 4, 0], fov: 30 }} shadows>
        <Scene colors={colors} brightnessThresholds={brightnessThresholds} />
        <Ground />
        <OrbitControls 
          minDistance={10} 
          maxDistance={100}
          enablePan={false}
          enableRotate={true} />
>>>>>>> parent of 921f015 (Transparent Model)
      </Canvas>
    </div>
  );
}
