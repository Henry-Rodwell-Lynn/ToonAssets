import { useRef, ReactNode } from "react";
import { Logo } from "./Logo";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { Color } from "three";

type SceneProps = {
  colors: Color[];
  brightnessThresholds: number[];
  lightPosition: number[];
};


export const Scene = ({ colors, brightnessThresholds, lightPosition }: SceneProps) => {

  const refLogo = useRef<Group>(null);

  useFrame(() => {
    const { current: group } = refLogo;
    if (group) {
     group.rotation.y += 0.005;
    }
  });

  return (
    <>
      <Logo ref={refLogo} colors={colors} brightnessThresholds={brightnessThresholds} lightPosition={lightPosition}/>
    </>
  );
};
