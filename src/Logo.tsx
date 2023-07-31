import { forwardRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Color } from "three";
import { ToonShader } from "./shaders/ToonShader";

interface LogoProps {
  colors: string[];
  brightnessThresholds: number[];
  [key: string]: any;
}

export const Logo = forwardRef<any, LogoProps>((props, ref) => {
  const { nodes } = useGLTF("./2.6K_Fac.glb") as any;

  useEffect(() => {
    ToonShader.uniforms.colorMap.value = props.colors.map(
      (color) => new Color(color)
    );
    ToonShader.uniforms.brightnessThresholds.value = props.brightnessThresholds;
    ToonShader.uniforms.uOpacity.value = 0.5;
  }, [props.colors, props.brightnessThresholds]);

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.qawalli.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.5}
      >
        <shaderMaterial
          attach="material"
          transparent
          opacity={0.5}
          {...ToonShader}
        />
      </mesh>
    </group>
  );
});

useGLTF.preload("./2.6K_Fac.glb");
