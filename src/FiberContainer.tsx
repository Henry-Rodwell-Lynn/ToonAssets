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

import Logo1 from "./assets/Asset 12 copy.svg";
import Logo2 from "./assets/Asset 1.svg";

export function FiberContainer() {
  const { High, High_Mid, Low_Mid, Low, Background, Text_Colour } = useControls(
    "Color",
    {
      Model: folder({
        High: "#ff3eec",
        High_Mid: "#f2ff00",
        Low_Mid: "#ff0000",
        Low: "#ff7b00",
      }),
      Background: folder({
        Background: "#ffffff",
      }),
      Text: folder({
        Text_Colour: "#000000",
      }),
    }
  );

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
          value: 10,
          min: 0,
          max: 20,
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
      <div
        style={{ color: Text_Colour }}
        className="absolute m-1 z-30 font-semibold text-[4rem]  border-red-500 ml-6"
      >
        <div>
          <a href="https://henryrodwell.com/" target="_blank">
            HRL'24
          </a>
        </div>
        <div className="fixed bottom-0 mb-6">
          <div className="grid grid-cols-2 gap-8">
            <div className="z-100">
              <a href="https://studiolowrie.com/" target="_blank">
                <img
                  src={Logo2}
                  className="h-[8vh]"
                  style={{ fill: Text_Colour }}
                />
              </a>
            </div>
            <div className=" z-100 ">
              <a href="https://henryrodwell.com/" target="_blank">
                <img
                  src={Logo1}
                  className="h-[8vh]"
                  style={{ fill: Text_Colour }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ color: Text_Colour }}
        className="fixed  border-red-500 m-3 font-semibold left-1/2 transform -translate-x-1/2 h-full text-[1.85vh] z-30 select-none"
      >
        <div className="grid grid-cols-2 gap-10 mt-3">
          <div className="flex flex-col place-items-end">
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
      </div>
      <div className="h-full z-0">
        <Canvas camera={{ position: [10, 0, 0], fov: 12 }}>
          <Scene colors={colors} brightnessThresholds={brightnessThresholds} />
          <OrbitControls
            minDistance={5}
            maxDistance={20}
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
