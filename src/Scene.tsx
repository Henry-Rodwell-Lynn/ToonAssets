import { useRef } from "react";
import { Logo } from "./Logo";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { Color } from "three";

type SceneProps = {
  colors: Color[];
  brightnessThresholds: number[];
};


export const Scene = ({ colors, brightnessThresholds }: SceneProps) => {

  const refLogo = useRef<Group>(null);

  useFrame(() => {
    const { current: group } = refLogo;
    if (group) {
     group.rotation.y += 0.002;
    }
  });

  return (
    <>
      <Logo ref={refLogo} colors={colors} brightnessThresholds={brightnessThresholds}/>
    </>
  );
};
