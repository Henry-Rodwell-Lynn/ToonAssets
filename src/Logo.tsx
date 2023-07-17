import { forwardRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { Color, Vector3 } from "three";
import { ToonShader } from "./ToonShader";

export const Logo = forwardRef((props, ref) => {
  const { nodes } = useGLTF("/untitled6.glb");

  const uniforms = useMemo(
    () => ({
      colorMap: {
        value: props.colors,
      },
      brightnessThresholds: {
        value: [0.65, 0.3, 0.001],
      },
      lightPosition: {
        value: new Vector3(5, 10, -10),
      },
    }),
    [props.colors]
  );

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={30}
      >
        <shaderMaterial attach="material" {...ToonShader} uniforms={uniforms} />
      </mesh>
    </group>
  );
});

useGLTF.preload("/untitled6.glb");
