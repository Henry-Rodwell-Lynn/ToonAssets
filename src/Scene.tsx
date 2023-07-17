import { useRef, useMemo } from "react";
import { Logo } from "./Logo";
import { useFrame } from "@react-three/fiber";
import { Color, Group } from "three";
import { useControls } from "leva";

export const Scene = () => {
  const { High, High_Mid, Low_Mid, Low } = useControls({
    High: "#de0016",
    High_Mid: "#b40000",
    Low_Mid: "#831010",
    Low: "#270000",
  });

  const refLogo = useRef<Group>(null);

  const colors = useMemo(() => [
    new Color(High).convertLinearToSRGB(),
    new Color(High_Mid).convertLinearToSRGB(),
    new Color(Low_Mid).convertLinearToSRGB(),
    new Color(Low).convertLinearToSRGB(),
  ], [High, High_Mid, Low_Mid, Low]);

  useFrame(() => {
    const { current: group } = refLogo;
    if (group) {
      group.rotation.y += 0.007;
    }
  });

  return (
    <>
      <Logo ref={refLogo} colors={colors} />
    </>
  );
};
