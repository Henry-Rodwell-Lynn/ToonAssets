import { useRef } from "react";
import { Logo } from "./Logo";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";


export const Scene = () => {
  const refLogo = useRef(null);

  useFrame(() => {
    const { current: group } = refLogo;
    if (group) {
      group.rotation.y += 0.01;
    }
  });

  return (
    <>
      <Logo
        ref={refLogo}
        colors={[
          new Color("#1f0303").convertLinearToSRGB(),
          new Color("#c7151f").convertLinearToSRGB(),
          new Color("#ff001b").convertLinearToSRGB(),
          new Color("#ff0000").convertLinearToSRGB(),
        ]}
      />
    </>
  );
};
