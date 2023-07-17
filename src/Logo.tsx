import { forwardRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Color } from "three"; 
import { ToonShader } from "./ToonShader";

interface LogoProps {
  colors: string[];
  [key: string]: any; 
}

export const Logo = forwardRef<any, LogoProps>((props, ref) => {
  const { nodes } = useGLTF("/untitled6.glb") as any;

  useEffect(() => {
    ToonShader.uniforms.colorMap.value = props.colors.map((color) => new Color(color));
  }, [props.colors]);

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={30}
      >
        <shaderMaterial attach="material" {...ToonShader} />
      </mesh>
    </group>
  );
});

useGLTF.preload("/untitled6.glb");
