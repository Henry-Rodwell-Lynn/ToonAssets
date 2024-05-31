import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";
import { Color } from "three";
import { useControls, folder } from "leva";
import {
  EffectComposer,
  Bloom,
  Pixelation,
  Scanline,
  Noise,
  DepthOfField
} from "@react-three/postprocessing";

export function FiberContainer() {
  const { High, High_Mid, Low_Mid, Low, Background } = useControls("Color", {
    Model: folder({
      High: "#B45CB9",
      High_Mid: "#849797",
      Low_Mid: "#985BE0",
      Low: "#8216F0",
    }),
    Background: folder({
      Background: "#ffffff",
    }),
  });

  const { Highlights, Midtones, Shadows } = useControls("Shader", {
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
  });

  const { Threshold, Smoothing, Intensity, Amount, Density } = useControls(
    "Effects",
    {
      Bloom: folder({
        Threshold: {
          value: 0.01,
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
          value: 1.4,
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

  return (
    <div
      style={{ background: Background }}
      className=" justify-self-center absolute h-full w-full"
    >
      <Canvas camera={{ position: [50, 4, 0], fov: 30 }} shadows>
        <Scene colors={colors} brightnessThresholds={brightnessThresholds} />
        <OrbitControls
          minDistance={10}
          maxDistance={100}
          enablePan={false}
          enableRotate={true}
        />
        <EffectComposer enabled={true}>
          <Scanline scrollSpeed={0.05} density={Density} opacity={0.3} />
          <Bloom
            luminanceThreshold={Threshold}
            luminanceSmoothing={Smoothing}
            height={480}
            intensity={Intensity}
            resolutionScale={1000}
            resolutionX={1080}
            resolutionY={1080}
          />
          <Pixelation granularity={Amount} />
          <Noise opacity={0.2} />
          <DepthOfField focusDistance={0} focalLength={0} bokehScale={20} height={480} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
