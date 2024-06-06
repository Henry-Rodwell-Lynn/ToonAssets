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
      className="justify-self-center absolute h-full w-full"
    >
      <div
        style={{ color: Text_Colour }}
        className="absolute m-1 z-30 font-semibold text-[4rem] border-red-500 ml-6 pointer-events-none"
      >
        <div className="flex flex-col select-none">
          <a
            href="https://henryrodwell.com/"
            target="_blank"
            className="pointer-events-auto"
          >
            HRL'24
          </a>
        </div>
        <div className="fixed bottom-0 mb-6">
          <div className="grid grid-cols-5 gap-24 align-middle select-none justify-stretch">
            <div className="z-100 h-[6vh] w-[6vh] flex items-center justify-center ">
              <a href="https://drive.google.com/file/d/1pY6ScsBCf0OT3-BJDF2zUe7YM1xeqYeS/view?usp=sharing" target="_blank" className="pointer-events-auto">
                <svg
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 37 37"
                  className="h-[6vh] w-[6vh]"
                  fill={Text_Colour}
                >
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g>
                      <path
                        className="cls-1"
                        d="M19.56,9.4h-.75l-2.58,18.22h.79c1.45,0,1.98-1.17,2.35-3.86l1.45-10.36c.37-2.55.26-4.01-1.26-4.01Z"
                      />
                      <path
                        className="cls-1"
                        d="M10.81,9.4h-.81l-1.09,7.87h.82c1.35,0,1.69-1.04,1.97-3l.2-1.41c.27-1.92.28-3.46-1.09-3.46Z"
                      />
                      <path
                        className="cls-1"
                        d="M0,0v37h37V0H0ZM9.43,20.34h-.97l-1.45,10.35h-2.43l3.42-24.38h3.1c2.65,0,3.78,2.41,3.24,6.5l-.22,1.68c-.5,3.89-1.58,5.85-4.7,5.85ZM17.05,30.69h-3.66l3.42-24.38h2.9c3.58,0,4.11,3.27,3.4,8.33l-1.29,9.16c-.62,4.33-1.4,6.89-4.76,6.89ZM31.92,9.73h-3.69l-.88,6.5h3.52l-.51,3.42h-3.52l-1.54,11.05h-2.48l3.42-24.38h6.17l-.49,3.42Z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className="z-100 h-[6vh] w-[6vh] flex items-center justify-center ">
              <a
                href="https://www.youtube.com/watch?v=6Lcx7Sqwc5M"
                target="_blank"
                className="pointer-events-auto"
              >
                <svg
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.8 32.49"
                  className="h-[6vh]"
                  fill={Text_Colour}
                >
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g>
                      <path
                        className="cls-1"
                        d="M7.74,4.79c0-1.55.02-3.12.05-4h-.04c-.36,1.35-1.71,4.93-2.66,7.56h-.99C3.36,6.21,1.97,2.19,1.59.77h-.04c.06.96.09,2.82.09,4.25v3.33H.6V0h1.65c.95,2.59,2.11,5.93,2.39,6.99h.02c.2-.8,1.57-4.47,2.55-6.99h1.6v8.34h-1.08v-3.56Z"
                      />
                      <path
                        className="cls-1"
                        d="M11.11,2.26c.98,2.91,1.52,4.53,1.68,5.14h.01c.2-.69.63-2.08,1.62-5.14h1.06l-2.19,6.36c-.62,1.78-1.08,2.23-2.32,2.23-.19,0-.42-.01-.65-.04v-.91c.15.02.33.03.5.03.77,0,1.06-.34,1.42-1.35l-2.28-6.32h1.14Z"
                      />
                      <path
                        className="cls-1"
                        d="M.04,20.34v-.07c0-1.14.75-2.32,2.38-3.55,1.27-.97,1.61-1.27,1.61-2.14,0-.79-.42-1.39-1.37-1.39s-1.41.5-1.57,1.46H.06c.14-1.34.99-2.34,2.6-2.34,1.77,0,2.46,1.14,2.46,2.24,0,1.19-.51,1.66-1.97,2.79-1.09.84-1.67,1.47-1.86,2.08h4.14l-.15.93H.04Z"
                      />
                      <path
                        className="cls-1"
                        d="M11.98,16.34c0,1.96-.56,4.15-2.76,4.15s-2.75-2.05-2.75-4.09.65-4.09,2.79-4.09,2.73,2.01,2.73,4.03ZM7.58,16.4c0,1.5.26,3.2,1.65,3.2s1.64-1.61,1.64-3.25c0-1.52-.26-3.14-1.61-3.14s-1.68,1.46-1.68,3.19Z"
                      />
                      <path
                        className="cls-1"
                        d="M13.15,20.34v-.07c0-1.14.75-2.32,2.38-3.55,1.27-.97,1.61-1.27,1.61-2.14,0-.79-.42-1.39-1.37-1.39s-1.41.5-1.57,1.46h-1.03c.14-1.34.99-2.34,2.6-2.34,1.77,0,2.46,1.14,2.46,2.24,0,1.19-.51,1.66-1.97,2.79-1.09.84-1.67,1.47-1.86,2.08h4.14l-.15.93h-5.23Z"
                      />
                      <path
                        className="cls-1"
                        d="M19.6,14.33c.12-.97.81-2.02,2.5-2.02s2.38,1,2.38,2.05c0,.96-.57,1.45-1.05,1.63v.03c.71.23,1.39.81,1.39,1.99,0,1.25-.78,2.48-2.74,2.48-1.81,0-2.58-1.14-2.7-2.19h1.04c.16.7.69,1.31,1.7,1.31,1.13,0,1.6-.75,1.6-1.6,0-1.05-.65-1.52-1.71-1.52h-.57v-.86h.47c1.03,0,1.48-.41,1.48-1.23,0-.71-.47-1.2-1.35-1.2-.95,0-1.3.51-1.44,1.14h-1.02Z"
                      />
                      <path
                        className="cls-1"
                        d="M1.13,30.02c.23,1,.91,1.54,2.12,1.54,1.3,0,1.82-.61,1.82-1.4,0-.84-.41-1.31-2.08-1.71-1.97-.48-2.65-1.15-2.65-2.32,0-1.24.91-2.25,2.78-2.25,1.99,0,2.8,1.15,2.92,2.24h-1.13c-.15-.74-.61-1.35-1.83-1.35-1.02,0-1.59.46-1.59,1.25s.47,1.09,1.93,1.45c2.38.58,2.8,1.51,2.8,2.58,0,1.35-1,2.4-3.04,2.4s-3-1.15-3.18-2.43h1.13Z"
                      />
                      <path
                        className="cls-1"
                        d="M8.7,23.54v3.62c.31-.53.86-1.04,1.9-1.04.97,0,2.05.53,2.05,2.34v3.88h-1.05v-3.71c0-1.03-.44-1.61-1.32-1.61-1.09,0-1.58.72-1.58,1.99v3.32h-1.05v-8.81h1.05Z"
                      />
                      <path
                        className="cls-1"
                        d="M19.67,29.29c0,1.75-1,3.2-2.86,3.2-1.74,0-2.8-1.35-2.8-3.18s1.03-3.19,2.87-3.19c1.69,0,2.79,1.26,2.79,3.17ZM15.09,29.3c0,1.33.67,2.31,1.76,2.31s1.74-.92,1.74-2.3-.62-2.31-1.76-2.31-1.73.92-1.73,2.31Z"
                      />
                      <path
                        className="cls-1"
                        d="M21.49,26.26c.76,2.85,1.19,4.48,1.29,5.11h.02c.11-.56.54-2.08,1.4-5.11h1.03c.95,3.44,1.23,4.44,1.33,4.99h.01c.15-.65.39-1.56,1.34-4.99h1.06l-1.87,6.08h-1.14c-.59-2.22-1.18-4.27-1.3-4.93h-.01c-.11.66-.65,2.51-1.34,4.93h-1.17l-1.76-6.08h1.11Z"
                      />
                      <path
                        className="cls-1"
                        d="M29.96,27.92c0-.85,0-1.33-.01-1.65h1.03c.02.17.03.65.03,1.24.32-.82,1.04-1.35,2.05-1.39v1.05c-1.25.04-2.05.69-2.05,2.23v2.95h-1.05v-4.43Z"
                      />
                      <path
                        className="cls-1"
                        d="M34.72,29.49c0,1.24.63,2.12,1.66,2.12.96,0,1.27-.5,1.47-.94h1.06c-.24.78-.89,1.82-2.56,1.82-1.91,0-2.69-1.55-2.69-3.12,0-1.81.91-3.25,2.76-3.25,1.96,0,2.6,1.57,2.6,2.87,0,.19,0,.34-.02.5h-4.29ZM37.95,28.75c-.01-1-.52-1.8-1.55-1.8s-1.54.74-1.65,1.8h3.2Z"
                      />
                      <path
                        className="cls-1"
                        d="M41.06,29.49c0,1.24.63,2.12,1.66,2.12.96,0,1.27-.5,1.47-.94h1.06c-.24.78-.89,1.82-2.56,1.82-1.91,0-2.69-1.55-2.69-3.12,0-1.81.91-3.25,2.76-3.25,1.96,0,2.6,1.57,2.6,2.87,0,.19,0,.34-.02.5h-4.29ZM44.3,28.75c-.01-1-.52-1.8-1.55-1.8s-1.54.74-1.65,1.8h3.2Z"
                      />
                      <path
                        className="cls-1"
                        d="M46.75,32.34v-8.81h1.05v8.81h-1.05Z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className="z-100 content-center  h-[6vh] w-[6vh] flex items-center justify-center ">
              <a href="https://drive.google.com/file/d/1pY6ScsBCf0OT3-BJDF2zUe7YM1xeqYeS/view?usp=sharing" target="_blank" className="pointer-events-auto">
                <svg
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 57 25.06"
                  className="h-[4vh] self-center"
                  fill={Text_Colour}
                >
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g>
                      <path
                        className="cls-1"
                        d="M17.97,3.76h-1.49v2.4h1.49c.27,0,.49-.09.64-.26s.24-.4.24-.7v-.46c0-.3-.08-.53-.24-.71s-.37-.27-.65-.27Z"
                      />
                      <path
                        className="cls-1"
                        d="M11.19,9.76c.38,0,.68-.12.9-.35s.33-.55.33-.95v-3.45c0-.4-.11-.71-.33-.95s-.52-.35-.9-.35-.68.12-.9.35-.33.55-.33.95v3.45c0,.4.11.71.33.95s.52.35.9.35Z"
                      />
                      <path
                        className="cls-1"
                        d="M5.89,6.13c.16-.19.24-.44.24-.74v-.57c0-.32-.08-.58-.24-.77s-.38-.28-.66-.28h-1.46v2.65h1.46c.27,0,.49-.09.65-.28Z"
                      />
                      <path
                        className="cls-1"
                        d="M35.03,3.72c-.38,0-.68.12-.9.35s-.33.55-.33.95v3.45c0,.4.11.71.33.95s.52.35.9.35.68-.12.9-.35.33-.55.33-.95v-3.45c0-.4-.11-.71-.33-.95s-.52-.35-.9-.35Z"
                      />
                      <path
                        className="cls-1"
                        d="M50,0H0v18.74c0,3.1,1.85,6.32,5.06,6.32.63,0,1.41-.22,1.92-.59l1.48-1.08c.32-.23.74-.23,1.23.12l1.36.99c.49.36,1.34.42,1.95.42,3.25,0,5-3.07,5-6.18v-4.74h32c3.87,0,7-3.13,7-7s-3.13-7-7-7ZM8.59,4.99c0-.54.11-1,.32-1.39s.51-.69.9-.9.85-.32,1.38-.32.99.11,1.38.32.69.51.9.9.32.85.32,1.39v3.49c0,.53-.11.99-.32,1.38s-.51.69-.9.9-.85.32-1.38.32-.99-.11-1.38-.32-.69-.51-.9-.9-.32-.85-.32-1.38v-3.49ZM2.44,2.48h2.78c.47,0,.88.09,1.22.27s.6.44.79.79.28.75.28,1.21v.7c0,.46-.09.86-.28,1.2s-.45.6-.8.78-.75.27-1.21.27h-1.44v3.3h-1.34V2.48ZM19,11l-1.48-3.56h-1.05v3.56h-1.34V2.47h2.8c.47,0,.88.09,1.22.27s.61.43.8.76.28.73.28,1.18v.5c0,.46-.09.87-.28,1.2s-.46.59-.8.78c-.08.04-.18.06-.26.1l1.64,3.74h-1.54ZM26.05,3.76h-1.92v7.24h-1.33V3.76h-1.92v-1.28h5.17v1.28ZM31.56,3.76h-3.26v2.45h2.79v1.27h-2.79v3.52h-1.34V2.48h4.61v1.28ZM37.63,8.49c0,.53-.11.99-.32,1.38s-.51.69-.9.9-.85.32-1.38.32-.99-.11-1.38-.32-.69-.51-.9-.9-.32-.85-.32-1.38v-3.49c0-.54.11-1,.32-1.39s.51-.69.9-.9.85-.32,1.38-.32.99.11,1.38.32.69.51.9.9.32.85.32,1.39v3.49ZM43.57,11h-4.6V2.48h1.34v7.24h3.26v1.28ZM45.92,11h-1.35V2.48h1.35v8.52ZM52.52,8.49c0,.53-.11.99-.32,1.38s-.51.69-.9.9-.85.32-1.38.32-.99-.11-1.38-.32-.69-.51-.9-.9-.32-.85-.32-1.38v-3.49c0-.54.11-1,.32-1.39s.51-.69.9-.9.85-.32,1.38-.32.99.11,1.38.32.69.51.9.9.32.85.32,1.39v3.49Z"
                      />
                      <path
                        className="cls-1"
                        d="M49.92,3.72c-.38,0-.68.12-.9.35s-.33.55-.33.95v3.45c0,.4.11.71.33.95s.52.35.9.35.68-.12.9-.35.33-.55.33-.95v-3.45c0-.4-.11-.71-.33-.95s-.52-.35-.9-.35Z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className="z-100  h-[6vh] w-[6vh] flex items-center justify-center ">
              <a
                href="https://studiolowrie.com/"
                target="_blank"
                className="pointer-events-auto"
              >
                <svg
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 730.63 734.88"
                  className="h-[6vh]"
                  fill={Text_Colour}
                >
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g>
                      <path
                        className="cls-1"
                        d="M487.89,734.81c-43.05-.37-80.85-14.46-114.61-41.49-32.51-26.03-65.29-51.69-96.65-79.1-19.94-17.43-39.5-35.28-58.84-53.39-25.41-23.79-50.4-48.02-75.11-72.53-11.58-11.48-23.97-22.23-34.25-34.96-10.17-12.6-14.82-26.74-10.05-42.91,7.22-24.5,35.46-36.29,58.06-24.41,11.29,5.93,19.6,15.4,28.77,23.82,32.51,29.86,64.86,59.89,97.31,89.8,2.06,1.9,4.38,3.62,6.82,5.01,3.26,1.85,6.68,2.29,9.51-.98,2.96-3.42.92-6.43-1.32-8.87-6.31-6.86-12.85-13.52-19.38-20.19-14.56-14.87-29.17-29.68-43.74-44.53-14.92-15.21-29.86-30.41-44.73-45.67-33.24-34.13-66.68-68.08-99.55-102.57-12.73-13.36-16.69-29.92-9.27-47.21,7.77-18.1,21.83-29.4,42.12-30.64,14-.86,25.62,5.36,35.09,15.3,28.39,29.77,56.66,59.67,84.91,89.58,25.62,27.12,51.15,54.33,76.74,81.49,3.2,3.4,6.43,6.8,10.51,9.17,2.75,1.59,5.71,2.37,8.29-.19,2.61-2.59,2.49-5.66.76-8.73-3.63-6.43-8.45-11.96-13.28-17.47-22.83-26.06-45.66-52.11-68.49-78.17-20.3-23.17-40.64-46.32-60.9-69.53-19.82-22.71-40.19-44.98-59.12-68.41-14.05-17.39-17.17-37.47-6.24-57.97,11.96-22.45,36.97-29.38,59.58-17.66,14.8,7.68,25.35,19.78,35.71,32.22,26.11,31.36,52.26,62.69,78.36,94.05,23.33,28.04,46.6,56.12,69.93,84.16,5.01,6.02,10.05,12.01,15.28,17.83,4.73,5.25,9.51,6.73,12.5,4.33,2.83-2.27,2.27-7.58-1.84-13.16-11.56-15.69-23.2-31.32-34.91-46.9-35.92-47.82-71.88-95.61-107.82-143.42-13.89-18.48-13.61-40.13.69-57.6,11.02-13.47,31.51-18.47,48.78-11.94,10.44,3.95,18.82,10.64,25.51,19.42,32.79,43.07,65.45,86.24,98.26,129.3,27.26,35.77,55.67,70.62,84.88,104.8,8.92,10.44,18.83,19,33.42,20.95,13.41,1.79,23.02-3.03,30.22-13.87,5.02-7.57,8.22-15.96,10.93-24.57,6.03-19.11,7.57-39.33,13.82-58.31,9.69-29.41,28.29-51.69,57.44-63.4,16.85-6.76,34.07-5.33,50.22,3.51,15.88,8.69,22.02,26.17,16.35,44.88-4.83,15.93-13.18,30.21-20.79,44.81-15.9,30.5-24.03,62.37-21.28,97.17,2.66,33.69,10.46,66.42,15.86,99.6,4.12,25.34,7.2,50.89,6.31,76.57-1.29,37.31-13.05,71.02-36.39,100.66-23.59,29.95-50.22,56.54-82.41,77.13-28.75,18.4-59.17,32.77-93.97,35.18-2.65.18-5.33.02-7.99.02Z"
                      />
                      <path
                        className="cls-1"
                        d="M553.59,152.41c-3.32.63-3.81-2.03-4.62-4.12-4.63-11.97-9.97-23.58-16.41-34.71-14.68-25.36-33.37-47.19-56.48-65.25-14.49-11.32-29.96-20.97-46.77-28.48-6.19-2.76-6.22-2.9-3.97-9.36,4.54-13.02,2.86-12.15,14.95-6.84,22.46,9.86,42.41,23.61,60.59,39.97,24.52,22.07,44.32,47.74,58.58,77.58,3.6,7.53,6.33,15.38,9.3,23.15,1.49,3.9.51,6.02-3.79,6.5-3.8.42-7.58,1.04-11.38,1.57Z"
                      />
                      <path
                        className="cls-1"
                        d="M15.16,487.99c4.09-.5,4.61,2.34,5.43,4.59,5.75,15.7,13.22,30.54,22.3,44.56,18.38,28.37,41.79,51.59,70.65,69.33,9.1,5.59,18.46,10.62,28.2,14.93,3.34,1.48,4.02,3.36,2.85,6.61-5.44,15.09-2.9,13.26-16.15,7.82-20.95-8.59-39.5-21.28-56.55-36.09-23.21-20.17-42.38-43.64-57-70.76-5.78-10.72-10.51-21.88-14.35-33.44-1.15-3.45-.63-5.37,3.38-5.79,3.96-.42,7.89-1.22,11.25-1.76Z"
                      />
                      <path
                        className="cls-1"
                        d="M65.03,464.29c3.02-.4,3.62,1.87,4.42,3.89,7.84,19.83,18.59,37.94,32.57,54.04,18.78,21.64,41.2,38.19,68.43,47.69,4.02,1.4,5.62,3.05,3.61,7.15-.8,1.63-1.23,3.44-1.8,5.18-2.52,7.73-2.56,7.83-10.32,4.7-30.89-12.46-56.86-31.55-77.8-57.53-13.68-16.96-24.54-35.56-33.39-55.4-2.46-5.52-2.43-5.58,3.6-7.17,3.54-.93,7.12-1.71,10.68-2.56Z"
                      />
                      <path
                        className="cls-1"
                        d="M503.98,175.86c-3.9.34-4.31-2.32-5.11-4.41-6.97-18.2-16.65-34.82-28.91-49.95-19.41-23.96-43.42-41.59-72.48-52.1-3.55-1.28-4.16-2.88-3.08-6.3,4.11-13.03,3.98-12.98,15.96-7.96,39.18,16.41,68.81,43.68,90.87,79.62,6.55,10.67,12.11,21.83,17.34,33.19,1.45,3.15.79,4.6-2.53,5.26-4.25.84-8.46,1.85-12.06,2.65Z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className="z-100  h-[6vh] w-[6vh] flex items-center justify-center ">
              <a
                href="https://henryrodwell.com/"
                target="_blank"
                className="pointer-events-auto"
              >
                <svg
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 665.75 456.52"
                  className="h-[6vh]"
                  fill={Text_Colour}
                >
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      className="cls-1"
                      d="m531.99,365.26c-18.1-3.02-104.42-6.14-97.52,30.37-10.63-11.68-50.89-78.18-34.65-80.26,25.48-3.27-24.16-57.5-35.49-67.81-8.71-7.92-46.19-19.42-56.91,6.08,15.03,20.3,12.24,36.25,19.24,62.95,10.89,41.52,31.18,79.49,17.1,111.51-4.23-12.06-32.93-37.17-44.7-24.45,10.25-31.31-1.15-62.7-1.76-99.52-.7-42.17,10.14-73.88-36.63-73.88,9.26-9.05,24.92-13.36,19.71-26.53-3.06-7.73,18.07-8.7,10.39-16.27-7.04-9.17-42.16-11.31-37.02-26.82,12.9-19.67,43.94-42.77,34.42-46.71-1.03-.43-13.13,2.85-8.17-5.21,14-22.8-13.97-69.73-19.33-100.02,19.9,43.51,34.5,52.9,44.66,4.48,5.6,19.04,8.02,27.47,13.54,45.74,5.52,18.27,12.48-16.18,24.3-53.66,1.87-5.93-2.49,46.95.38,77.5,1.03,10.94,9.4,19.71,20.28,21.19,22.49,3.06,60.75,4.99,78.94-2.37,2.28-.92,3.86,3.69,2.16,6.37-14.62,23.02-52.39,56.94-59.84,76.7-4.44,17.84,10.54,29.26,18.45,34.61-8.73,9.04-19.2,28.07-8.27,42.48,10.15,13.39,38.45,31,43.59,49.3,8.74,31.08-24.67,32.16,2.55,39.33l90.59,14.91ZM305.95,50.11c-8.65,24.4-13.3,47.11-4.1,66.43,2.76,5.79,3.07,12.47.45,18.33-7.49,16.76-21.08,35.02,3.32,49.12,2.51,1.45,2.92,4.9.81,6.88-10.52,9.87-14.82,12.96-13.46,20.55,3.21,13.75,48.47,14.77,70.97,10.24,6.04-1.22,7.96-8.91,3.19-12.82-10.54-8.65-24.6-33.45,31.84-73.58,12.72-9.04,23.92-20.89,1.12-14.44-19,5.37-75.95,16.28-65.7-51.63-15.03,39.49-24.98-4.35-28.45-19.08Z"
                    />
                    <path
                      className="cls-1"
                      d="m574.13,347.91c3.64,2.15-109.7-11.04-108.47-13.12,21.15-35.67-15.42-54.31-25.38-60.76-39.72-25.72-20.43-42.54,5.73-57.14-37.49-8.48-39.5-18.3-33.26-28.35,26.23-27.38,77.58-102.85,86.37-125.95-43.2,16.38-74.99,30.11-105.43,28.11-35.26-2.31-24.79-37.85-26.7-90.7,5.66,22.52,5.2,56.79,20.26,63.82,13.82,6.44,34.34-13.02,49.91-25.51-30.46,37.51,78.62,1.69,122.55-26.09-27.9,57.72-124.07,133.93,30.49,86.52,12.93-3.97-202.93,100.84-127.66,92.71,88.51-9.56-46.45,55.29-15.59,59.81,65.07,9.53,55.04,60.12,63.44,46.13,14.64-24.4,105.94-8.87,155.35,3.96,0,0-197.13-15.64-91.61,46.58Z"
                    />
                    <path
                      className="cls-1"
                      d="m78.84,269.43c1.41,10.44,37.71,12.83,79.32,15.27-38.85,23.71-36.85,38.93,5.98,45.66-36.36,38.49-61.12,67.03,43.9,50.74-19.85,8.98-124.16,43.53-178.32,75.42,29.54-32.62,110.22-105.32,96.02-120.08-4.47-4.65-41.3-.66-42.79-1.92-1.76-1.49,31.91-32.17,30.49-38.94-.88-4.18-60.54-9.84-95.95-14.61,18.22-8.47,51.06-25.38,69.28-33.85-27.64-12.86-57.62-26.76-86.77-35.52,83.87-27.52,129.25-12.79,39.32-66.79,27.36-2.76,66.28,5.46,71.92-2.45,9.71-13.61-31.12-58.61-56.01-95.05,25.46,5.36,91.18,25.43,109.47,30.79-48.45.02-54.9,4.4-39.39,24.48,39.62,49.53,35.74,59.32-28.04,60.5,38.96,27.28,25.97,41.59-21.49,52.56,38.15,19.32,134.41,16,140.14-10.47,5.73-26.44-57.33-36.65-57.33-36.65,42.81,0,71.54-58.93,72.13-65.77,2.25-26.08-33.16-41.22-22.43-36.93,31.82,12.72,20.12-43.26,21.58-57.12,12.85,29.34,24.62,56.57,27.37,79.43,1.3,10.8,1.61,24.32-5.12,31.53-4.36,4.68,12.81,1.24,5.33,9.21-54.89,26.89-37.38,44.16-4.35,58.78-61.36,23.43,37.51,20.37-32.08,41.73,60.42,14.29,58.33,20.66,53.14,62.92-4.18,34.09,15.43,77.54,2.55,111.34-14,3.12-22.31,10.22-57.39,28.96-4.52-15.82-1-36.37,5.17-56.94,11.92-39.72,33.73-79.51,26.61-85.42-5.33-3.73-17.41-8.76-50.44,3.62,19.57-16.4,42.01-32.3,28.15-39.93-30.2-16.64-152.81-5.7-149.95,15.5Z"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ color: Text_Colour }}
        className="fixed border-red-500 m-3 font-semibold left-1/2 transform -translate-x-1/2 h-full text-[1.85vh] z-30 select-none pointer-events-none"
      >
        <div className="grid grid-cols-2 gap-10 mt-3">
          <div className="flex flex-col place-items-end">
            <a className="pointer-events-auto">About:</a>
            <br />
            <br />
            <br />
            <a className="pointer-events-auto">Links:</a>
            <br />
            <br />
            <br />
            <br />
            <br />
            <a className="pointer-events-auto">Experience:</a>
            <a className="pointer-events-auto">Designer</a>
            <a className="pointer-events-auto">Junior Designer</a>
            <a className="pointer-events-auto">Intern</a>
            <a className="pointer-events-auto">Freelance</a>
            <br />
            <br />
            <br />
            <br />
            <a className="pointer-events-auto">Skills:</a>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <a className="pointer-events-auto">Edutcation:</a>
          </div>
          <div className="flex flex-col ">
            <a className="pointer-events-auto">Henry Rodwell</a>
            <a className="pointer-events-auto">24 years old</a>
            <a className="pointer-events-auto">
              Graphic / Digital / Motion Designer
            </a>
            <br />
            <a
              href="https://henryrodwell.com/"
              target="_blank"
              className="hover:underline pointer-events-auto "
            >
              Website
            </a>
            <a
              href="https://www.instagram.com/_henryrodwell/"
              target="_blank"
              className="pointer-events-auto hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/watch?v=6Lcx7Sqwc5M"
              target="_blank"
              className="pointer-events-auto hover:underline"
            >
              2023 Showreel
            </a>
            <a
              href="https://www.are.na/henry-rodwell-lynn/channels"
              target="_blank"
              className="pointer-events-auto hover:underline"
            >
              Are.na
            </a>
            <a href="https://drive.google.com/file/d/1pY6ScsBCf0OT3-BJDF2zUe7YM1xeqYeS/view?usp=sharing" target="_blank" className="pointer-events-auto hover:underline">Portfolio</a>
            <br />
            <a className="pointer-events-auto">(Creative)</a>
            <a
              href="https://www.tmc2.ai/"
              target="_blank"
              className="pointer-events-auto hover:underline"
            >
              Time Machine Capital ²
            </a>
            <a className="pointer-events-auto">Magenta Studio</a>
            <a
              href="https://www.espluga.net/"
              target="_blank"
              className="pointer-events-auto hover:underline"
            >
              espluga + associates
            </a>
            <a className="pointer-events-auto">
              London School of Hygiene & Tropical Medicine <br />
              British High Commission Charity Fund <br />
              ICCHA Street School Delhi <br />
              QUIRK Magazine
            </a>
            <br />
            <a className="pointer-events-auto">
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
            <a className="pointer-events-auto">
              BA (Hons) Graphic Design
              <br />
              First className Honours <br />
              Kingston University
            </a>
            <br />
            <a className="pointer-events-auto">
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
