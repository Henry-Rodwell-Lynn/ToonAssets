import { forwardRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Color } from "three"; 
import { ToonShader } from "./ToonShader";

interface LogoProps {
  colors: string[];
  [key: string]: any; 
}

export const Logo = forwardRef<any, LogoProps>((props, ref) => {
  const { nodes } = useGLTF("./2.6K_Fac.glb") as any;

  useEffect(() => {
    ToonShader.uniforms.colorMap.value = props.colors.map((color) => new Color(color));
  }, [props.colors]);

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.qawalli.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1}
      >
        <shaderMaterial attach="material" {...ToonShader} />
      </mesh>
    </group>
  );
});

useGLTF.preload("./2.6K_Fac.glb");
