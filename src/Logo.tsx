import { forwardRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Color } from "three";
import { ToonShader } from "./shaders/ToonShader";
import { useControls } from "leva";

interface LogoProps {
  colors: string[];
  brightnessThresholds: number[];
  [key: string]: any;
}

export const Logo = forwardRef<any, LogoProps>((props, ref) => {
  const { nodes } = useGLTF("./2.6K_Fac.glb") as any;

  const { Opacity } = useControls('Shader', {
    Opacity: {
      value: 0.5,
      min: 0.1,
      max: 1,
      step: 0.1,
    },
  });

  useEffect(() => {
    ToonShader.uniforms.colorMap.value = props.colors.map(
      (color) => new Color(color)
    );
    ToonShader.uniforms.brightnessThresholds.value = props.brightnessThresholds;
    ToonShader.uniforms.uOpacity.value = Opacity;
  }, [props.colors, props.brightnessThresholds, Opacity]);

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
          opacity={0}
          {...ToonShader}
        />
      </mesh>
    </group>
  );
});

useGLTF.preload("./2.6K_Fac.glb");
