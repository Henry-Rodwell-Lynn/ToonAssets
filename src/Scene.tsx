import { useRef, useMemo } from "react";
import { Logo } from "./Logo";
import { useFrame } from "@react-three/fiber";
import { Color, Group } from "three";
import { folder, useControls } from "leva";

export const Scene = () => {
  const { High, High_Mid, Low_Mid, Low } = useControls(
    "Color", {
    High: "#eee5e0",
    High_Mid: "#6cb4db",
    Low_Mid: "#31529e",
    Low: "#270000",
  });

  const refLogo = useRef<Group>(null);

  const colors = useMemo(
    () => [
      new Color(High).convertLinearToSRGB(),
      new Color(High_Mid).convertLinearToSRGB(),
      new Color(Low_Mid).convertLinearToSRGB(),
      new Color(Low).convertLinearToSRGB(),
    ],
    [High, High_Mid, Low_Mid, Low]
  );

  useFrame(() => {
    const { current: group } = refLogo;
    if (group) {
      group.rotation.x = group.rotation.y += 0.005;
    }
  });

  return (
    <>
      <Logo ref={refLogo} colors={colors} />
    </>
  );
};
