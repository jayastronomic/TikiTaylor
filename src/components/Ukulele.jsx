/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 ukulele.gltf --transform
Author: damai55 (https://sketchfab.com/damai55)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ukulele-e15fa5ac39a04695a4caa1bcf0a268ef
Title: Ukulele
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Ukulele(props) {
  const { nodes, materials } = useGLTF("/ukulele-transformed.glb");
  return (
    <group position={[0, -2.3, 0.3]} {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[0, 0, 0.8]} scale={0.001}>
        <mesh
          geometry={nodes.Ukulele_nero_0.geometry}
          material={materials.nero}
        />
        <mesh
          geometry={nodes.Ukulele_acciaio_0.geometry}
          material={materials.acciaio}
        />
        <mesh
          geometry={nodes.Ukulele_acciaio_0_1.geometry}
          material={materials.acciaio}
        />
        <mesh
          geometry={nodes.Ukulele_acciaio_0_2.geometry}
          material={materials.acciaio}
        />
        <mesh
          geometry={nodes.Ukulele_acciaio_0_3.geometry}
          material={materials.acciaio}
        />
        <mesh
          geometry={nodes.Ukulele_Corde_0.geometry}
          material={materials.Corde}
        />
        <mesh
          geometry={nodes.Ukulele_ponti_0.geometry}
          material={materials.ponti}
        />
        <mesh
          geometry={nodes.Ukulele_legno_0.geometry}
          material={materials.legno}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/ukulele-transformed.glb");
