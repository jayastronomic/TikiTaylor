/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 flowers.gltf --transform
Author: yanix (https://sketchfab.com/yanix)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/flowers-b56e199f962f49b29686c1a891fe47bd
Title: Flowers
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Flowers(props) {
  const { nodes, materials } = useGLTF("/flowers-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.25} rotation={[0, 0, 0]}>
        <mesh
          geometry={nodes.Cylinder005_0.geometry}
          material={materials.lower_magnetta}
          position={[0, -0.04, 0.1]}
          rotation={[-0.52, 0.59, -1.82]}
          scale={[0.17, 0.17, 0.21]}
        />
        <mesh
          geometry={nodes.Cylinder005_0_1.geometry}
          material={materials.lower_magnetta}
          rotation={[0.65, 0.69, 1.01]}
          scale={[0.14, 0.14, 0.18]}
        />
        <mesh
          geometry={nodes.Cylinder004_0.geometry}
          material={materials.lower_red}
          position={[0.06, -0.01, 0.08]}
          rotation={[0.16, -0.27, 1.35]}
          scale={[0.17, 0.17, 0.22]}
        />
        <mesh
          geometry={nodes.Cylinder005_0_2.geometry}
          material={materials.lower_magnetta}
          position={[-0.07, 0.28, -0.06]}
          rotation={[-0.75, -0.57, -2.31]}
          scale={[0.14, 0.14, 0.18]}
        />
        <mesh
          geometry={nodes.Cylinder004_0_1.geometry}
          material={materials.lower_red}
          position={[-0.16, 0.03, 0.13]}
          rotation={[0.2, -1.21, 0.39]}
          scale={[0.13, 0.13, 0.16]}
        />
        <mesh
          geometry={nodes.Cylinder005_0_3.geometry}
          material={materials.lower_magnetta}
          position={[-0.07, -0.33, -0.06]}
          rotation={[0.89, -0.25, 0.1]}
          scale={[0.11, 0.11, 0.14]}
        />
        <mesh
          geometry={nodes.Cylinder011_0.geometry}
          material={materials.flower_yellow}
          position={[0.02, 0.51, 0.93]}
          rotation={[-0.45, -0.59, -2.16]}
          scale={[0.08, 0.08, 0.1]}
        />
        <mesh
          geometry={nodes.Cylinder011_0_1.geometry}
          material={materials.flower_yellow}
          position={[0.11, 0.73, 0.33]}
          rotation={[-1.27, 0.11, -2.59]}
          scale={[0.08, 0.08, 0.1]}
        />
        <mesh
          geometry={nodes.Cylinder011_0_2.geometry}
          material={materials.flower_yellow}
          position={[0.82, 0.17, 0.33]}
          rotation={[0.74, 1.16, 1.39]}
          scale={[0.08, 0.08, 0.1]}
        />
        <mesh
          geometry={nodes.Cylinder011_0_3.geometry}
          material={materials.flower_yellow}
          position={[0.41, 0.02, 0.99]}
          rotation={[0.6, 0.5, 1.33]}
          scale={[0.08, 0.08, 0.1]}
        />
        <mesh
          geometry={nodes.Cylinder011_0_4.geometry}
          material={materials.flower_yellow}
          position={[-0.57, -0.45, 0.54]}
          rotation={[1, -0.75, 0.77]}
          scale={[0.06, 0.06, 0.08]}
        />
        <mesh
          geometry={nodes.Cylinder011_0_5.geometry}
          material={materials.flower_yellow}
          position={[0.07, -0.7, 0.6]}
          rotation={[0.88, 0.23, 1]}
          scale={[0.05, 0.05, 0.06]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/flowers-transformed.glb");
