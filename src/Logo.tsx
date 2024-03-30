import { forwardRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Color } from "three"; 
import { ToonShader } from "./shaders/ToonShader";
import { useControls } from "leva";

interface LogoProps {
  colors: string[];
  brightnessThresholds: number[];
<<<<<<< HEAD
  lightPosition: number[];
  [key: string]: any;
=======
  [key: string]: any; 
>>>>>>> parent of 921f015 (Transparent Model)
}

export const Logo = forwardRef<any, LogoProps>((props, ref) => {
  const { nodes } = useGLTF("./Building_Test_2.glb") as any;

  const { Opacity } = useControls('Shader', {
    Opacity: {
      value: 1.0,
      min: 0.1,
      max: 1.0,
      step: 0.1,
    },
  });

  useEffect(() => {
    ToonShader.uniforms.colorMap.value = props.colors.map((color) => new Color(color));
    ToonShader.uniforms.brightnessThresholds.value = props.brightnessThresholds;
<<<<<<< HEAD
    ToonShader.uniforms.lightPosition.value = props.lightPosition
    ToonShader.uniforms.uOpacity.value = Opacity;
  }, [props.colors, props.brightnessThresholds, Opacity, props.lightPosition]);
=======
  }, [props.colors, props.brightnessThresholds]);
>>>>>>> parent of 921f015 (Transparent Model)

  return (
    <group ref={ref} {...props} dispose={null}>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.qawalli.geometry}
        position={[0,0,0]}
        rotation={[Math.PI / 2, 0, 0.235]}
        scale={1}
      >
<<<<<<< HEAD
        <shaderMaterial
          attach="material"
          transparent
          opacity={0}
          {...ToonShader}
        />
      </mesh> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.大楼主体.geometry}
        position={[0, 5, 0]}
        scale={0.1}
      >
        <shaderMaterial
          attach="material"
          transparent
          opacity={0}
          {...ToonShader}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.大楼主体001.geometry}
        position={[0.0901, -2.1754, -0.0312]}
        rotation={[0, 0, 0]}
        scale={0.1}
      >
        <shaderMaterial
          attach="material"
          transparent
          opacity={0}
          {...ToonShader}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.顶盖.geometry}
        position={[0, -0.3638, 0]}
        rotation={[-Math.PI, 1.225, -Math.PI]}
        scale={2.1394}
      >
        <shaderMaterial
          attach="material"
          transparent
          opacity={0}
          {...ToonShader}
        />
=======
        <shaderMaterial attach="material" {...ToonShader} />
>>>>>>> parent of 921f015 (Transparent Model)
      </mesh>
    </group>
  );
});

useGLTF.preload("./Building_Test_2.glb");
