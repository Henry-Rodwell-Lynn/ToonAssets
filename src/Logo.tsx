import { forwardRef, useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Color } from "three";
import { ToonShader } from "./shaders/ToonShader";

interface LogoProps {
  colors: string[];
  brightnessThresholds: number[];
  [key: string]: any;
}

export const Logo = forwardRef<any, LogoProps>((props, ref) => {
  const { nodes, animations } = useGLTF("./SL_Test2.glb") as any;
  const meshRef = useRef(null);
  const { actions } = useAnimations(animations, meshRef) as any;

  useEffect(() => {
    ToonShader.uniforms.colorMap.value = props.colors.map(
      (color) => new Color(color)
    );
    ToonShader.uniforms.brightnessThresholds.value = props.brightnessThresholds;
  }, [props.colors, props.brightnessThresholds]);

  useEffect(() => {
    if (actions.CurveAction) actions.CurveAction.play();
    if (actions.Curve001Action) actions.Curve001Action.play();
    if (actions.Curve002Action) actions.Curve002Action.play();
    if (actions.Curve003Action) actions.Curve003Action.play();
    if (actions.Curve004Action) actions.Curve004Action.play();
  }, [actions]);

  return (
    <group ref={ref} {...props} dispose={null}>
      <group ref={meshRef} name="Scene" rotation={[0, 1.6, 0]}>
        <mesh
          name="Curve"
          castShadow
          receiveShadow
          geometry={nodes.Curve.geometry}
          position={[1, -1.1, 0.191]}
          rotation={[Math.PI / 2, -0.143, 0]}
          scale={13.14}
        >
          <shaderMaterial attach="material" {...ToonShader} />
        </mesh>
        <mesh
          name="Curve001"
          castShadow
          receiveShadow
          geometry={nodes.Curve001.geometry}
          position={[1, -1.1, 0.191]}
          rotation={[Math.PI / 2, -0.105, 0]}
          scale={13.14}
        >
          <shaderMaterial attach="material" {...ToonShader} />
        </mesh>
        <mesh
          name="Curve002"
          castShadow
          receiveShadow
          geometry={nodes.Curve002.geometry}
          position={[1, -1.1, 0.191]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={13.14}
        >
          <shaderMaterial attach="material" {...ToonShader} />
        </mesh>
        <mesh
          name="Curve003"
          castShadow
          receiveShadow
          geometry={nodes.Curve003.geometry}
          position={[1, -1.1, 0.191]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={13.14}
        >
          <shaderMaterial attach="material" {...ToonShader} />
        </mesh>
        <mesh
          name="Curve004"
          castShadow
          receiveShadow
          geometry={nodes.Curve004.geometry}
          position={[1, -1.1, 0.191]}
          rotation={[Math.PI / 2, -0.122, 0]}
          scale={13.14}
        >
          <shaderMaterial attach="material" {...ToonShader} />
        </mesh>
      </group>
    </group>
  );
});

useGLTF.preload("./SL_Test2.glb");
