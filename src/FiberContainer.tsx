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
  Outline,
} from "@react-three/postprocessing";

export function FiberContainer() {
  const { High, High_Mid, Low_Mid, Low, Background } = useControls("Color", {
    Model: folder({
      High: "#ff76f1",
      High_Mid: "#c700b3",
      Low_Mid: "#4b0044",
      Low: "#26004b",
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

  const { luminanceThreshold, luminanceSmoothing, intensity, granularity } =
    useControls("Effects", {
      Bloom: folder({
        luminanceThreshold: {
          value: 0.01,
          min: 0.01,
          max: 1,
          step: 0.01,
        },
        luminanceSmoothing: {
          value: 0,
          min: 0,
          max: 1,
          step: 0.01,
        },
        intensity: {
          value: 1.4,
          min: 0,
          max: 5,
          step: 0.01,
        },
      }),
      Pixelate: folder({
        granularity: {
          value: 0,
          min: 0,
          max: 10,
          step: 0.1,
        },
      }),
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
        <EffectComposer
          enabled={true}
          disableNormalPass={true}
          depthBuffer={false}
        >
          <Bloom
            luminanceThreshold={luminanceThreshold}
            luminanceSmoothing={luminanceSmoothing}
            height={300}
            intensity={intensity}
          />
          <Pixelation granularity={granularity} />
          <Outline />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
