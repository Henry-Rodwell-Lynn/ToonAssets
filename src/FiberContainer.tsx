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
  Noise,
  DepthOfField,
} from "@react-three/postprocessing";

export function FiberContainer() {
  const { High, High_Mid, Low_Mid, Low, Background } = useControls("Color", {
    Model: folder({
      High: "#ff3eec",
      High_Mid: "#f2ff00",
      Low_Mid: "#ff0000",
      Low: "#ff7b00",
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
      value: 0.6,
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

  const { Threshold, Smoothing, Intensity, Amount, Opacity, Blur_Amount } =
    useControls("Effects", {
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
      Noise: folder({
        Opacity: {
          value: 0.3,
          min: 0,
          max: 1.0,
          step: 0.01,
        },
      }),
      Blur: folder({
        Blur_Amount: {
          value: 30,
          min: 0,
          max: 100,
          step: 1.0,
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
      <div className="absolute m-2 z-30 font-semibold text-[4rem] border-red-500 ml-6">
        <div>
          <a href="https://henryrodwell.com/" target="_blank">
            HRL'24
          </a>
        </div>
      </div>
      <div className="absolute  border-red-500 m-3 font-semibold left-[calc(50vw/2.5)] text-xl z-30">
        <div className="grid grid-cols-2 gap-10 mt-3">
          <div className="flex flex-col  place-items-end">
            <a>About:</a>
            <br />
            <br />
            <br />

            <a>Links:</a>
            <br />
            <br />
            <br />
            <br />
            <br />
            <a>Experience:</a>
            <a>Designer</a>
            <a>Junior Designer</a>
            <a>Intern</a>
            <a>Freelance</a>
            <br />
            <br />
            <br />
            <br />
            <a>Skills:</a>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <a>Edutcation:</a>
          </div>
          <div className="flex flex-col ">
            <a>Henry Rodwell</a>
            <a>24 years old</a>
            <a>Graphic / Digital / Motion Designer</a>
            <br />
            <a href="https://henryrodwell.com/" target="_blank">
              Website
            </a>
            <a href="https://www.instagram.com/_henryrodwell/" target="_blank">
              Instagram
            </a>
            <a
              href="https://www.youtube.com/watch?v=6Lcx7Sqwc5M"
              target="_blank"
            >
              2023 Showreel
            </a>
            <a
              href="https://www.are.na/henry-rodwell-lynn/channels"
              target="_blank"
            >
              Are.na
            </a>
            <a>Portfolio</a>
            <br />
            <a>(Creative)</a>
            <a href="https://www.tmc2.ai/" target="_blank">
              Time Machine Capital ²
            </a>
            <a>Magenta Studio</a>
            <a href="https://www.espluga.net/" target="_blank">
              espluga + associates
            </a>
            <a>
              London School of Hygiene & Tropical Medicine <br />
              British High Commission Charity Fund <br />
              ICCHA Street School Delhi <br />
              QUIRK Magazine
            </a>
            <br />
            <a>
              Full Adobe Suite <br />
              Cavalry & After Effects <br />
              3D Graphics (Blender,C4D) <br />
              Front End Dev (React) <br />
              Python <br />
              Real Time Render Engines (TouchDesigner, Unreal) <br />
              Publication Design
              <br />
            </a>
            <br />
            <a>
              BA (Hons) Graphic Design
              <br />
              First Class Honours <br />
              Kingston University
            </a>
            <br />
            <a>
              Foundation Diploma
              <br />
              Distinction <br />
              Totnes Art Foundation
            </a>
          </div>
        </div>
        <div className="flex">
          <div className=" z-100 ">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_2"
              data-name="Layer 2"
              viewBox="0 0 665.75 456.52"
              className=" h-[100px]"
            >
              <defs>
                <style>{".cls-1{fill:#000;stroke-width:0}"}</style>
              </defs>
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  d="M531.99 365.26c-18.1-3.02-104.42-6.14-97.52 30.37-10.63-11.68-50.89-78.18-34.65-80.26 25.48-3.27-24.16-57.5-35.49-67.81-8.71-7.92-46.19-19.42-56.91 6.08 15.03 20.3 12.24 36.25 19.24 62.95 10.89 41.52 31.18 79.49 17.1 111.51-4.23-12.06-32.93-37.17-44.7-24.45 10.25-31.31-1.15-62.7-1.76-99.52-.7-42.17 10.14-73.88-36.63-73.88 9.26-9.05 24.92-13.36 19.71-26.53-3.06-7.73 18.07-8.7 10.39-16.27-7.04-9.17-42.16-11.31-37.02-26.82 12.9-19.67 43.94-42.77 34.42-46.71-1.03-.43-13.13 2.85-8.17-5.21 14-22.8-13.97-69.73-19.33-100.02 19.9 43.51 34.5 52.9 44.66 4.48 5.6 19.04 8.02 27.47 13.54 45.74 5.52 18.27 12.48-16.18 24.3-53.66 1.87-5.93-2.49 46.95.38 77.5 1.03 10.94 9.4 19.71 20.28 21.19 22.49 3.06 60.75 4.99 78.94-2.37 2.28-.92 3.86 3.69 2.16 6.37-14.62 23.02-52.39 56.94-59.84 76.7-4.44 17.84 10.54 29.26 18.45 34.61-8.73 9.04-19.2 28.07-8.27 42.48 10.15 13.39 38.45 31 43.59 49.3 8.74 31.08-24.67 32.16 2.55 39.33L532 365.27ZM305.95 50.11c-8.65 24.4-13.3 47.11-4.1 66.43 2.76 5.79 3.07 12.47.45 18.33-7.49 16.76-21.08 35.02 3.32 49.12 2.51 1.45 2.92 4.9.81 6.88-10.52 9.87-14.82 12.96-13.46 20.55 3.21 13.75 48.47 14.77 70.97 10.24 6.04-1.22 7.96-8.91 3.19-12.82-10.54-8.65-24.6-33.45 31.84-73.58 12.72-9.04 23.92-20.89 1.12-14.44-19 5.37-75.95 16.28-65.7-51.63-15.03 39.49-24.98-4.35-28.45-19.08Z"
                  className="cls-1"
                />
                <path
                  d="M574.13 347.91c3.64 2.15-109.7-11.04-108.47-13.12 21.15-35.67-15.42-54.31-25.38-60.76-39.72-25.72-20.43-42.54 5.73-57.14-37.49-8.48-39.5-18.3-33.26-28.35 26.23-27.38 77.58-102.85 86.37-125.95-43.2 16.38-74.99 30.11-105.43 28.11-35.26-2.31-24.79-37.85-26.7-90.7 5.66 22.52 5.2 56.79 20.26 63.82 13.82 6.44 34.34-13.02 49.91-25.51C406.7 75.82 515.78 40 559.71 12.22c-27.9 57.72-124.07 133.93 30.49 86.52 12.93-3.97-202.93 100.84-127.66 92.71 88.51-9.56-46.45 55.29-15.59 59.81 65.07 9.53 55.04 60.12 63.44 46.13 14.64-24.4 105.94-8.87 155.35 3.96 0 0-197.13-15.64-91.61 46.58ZM78.84 269.43c1.41 10.44 37.71 12.83 79.32 15.27-38.85 23.71-36.85 38.93 5.98 45.66-36.36 38.49-61.12 67.03 43.9 50.74-19.85 8.98-124.16 43.53-178.32 75.42 29.54-32.62 110.22-105.32 96.02-120.08-4.47-4.65-41.3-.66-42.79-1.92-1.76-1.49 31.91-32.17 30.49-38.94-.88-4.18-60.54-9.84-95.95-14.61 18.22-8.47 51.06-25.38 69.28-33.85C59.13 234.26 29.15 220.36 0 211.6c83.87-27.52 129.25-12.79 39.32-66.79 27.36-2.76 66.28 5.46 71.92-2.45 9.71-13.61-31.12-58.61-56.01-95.05 25.46 5.36 91.18 25.43 109.47 30.79-48.45.02-54.9 4.4-39.39 24.48 39.62 49.53 35.74 59.32-28.04 60.5 38.96 27.28 25.97 41.59-21.49 52.56 38.15 19.32 134.41 16 140.14-10.47 5.73-26.44-57.33-36.65-57.33-36.65 42.81 0 71.54-58.93 72.13-65.77 2.25-26.08-33.16-41.22-22.43-36.93 31.82 12.72 20.12-43.26 21.58-57.12 12.85 29.34 24.62 56.57 27.37 79.43 1.3 10.8 1.61 24.32-5.12 31.53-4.36 4.68 12.81 1.24 5.33 9.21-54.89 26.89-37.38 44.16-4.35 58.78-61.36 23.43 37.51 20.37-32.08 41.73 60.42 14.29 58.33 20.66 53.14 62.92-4.18 34.09 15.43 77.54 2.55 111.34-14 3.12-22.31 10.22-57.39 28.96-4.52-15.82-1-36.37 5.17-56.94 11.92-39.72 33.73-79.51 26.61-85.42-5.33-3.73-17.41-8.76-50.44 3.62 19.57-16.4 42.01-32.3 28.15-39.93-30.2-16.64-152.81-5.7-149.95 15.5Z"
                  className="cls-1"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="h-full z-0">
        <Canvas camera={{ position: [50, 4, 0], fov: 30 }} shadows>
          <Scene colors={colors} brightnessThresholds={brightnessThresholds} />
          <OrbitControls
            minDistance={10}
            maxDistance={100}
            enablePan={false}
            enableRotate={true}
          />
          <EffectComposer enabled={true}>
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
            <Noise opacity={Opacity} />
            <DepthOfField
              focusDistance={0}
              focalLength={0}
              bokehScale={Blur_Amount}
              height={480}
            />
          </EffectComposer>
        </Canvas>
      </div>
    </div>
  );
}
