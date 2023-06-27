import React from "react";
import Reg from "../fonts/reg.json";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
extend({ TextGeometry });

const Text2 = ({ char }) => {
  const font = new FontLoader().parse(Reg);
  const config = {
    font,
    size: 0.5,
    height: 0,
    bevelEnabled: true,
    bevelThickness: 0.5,
    bevelSize: 0.01,
    bevelSegments: 0.5,
  };
  return (
    <mesh position={[char.space, 0, 0]} key={char.letter}>
      <textGeometry args={[char.letter, config]} />
      <meshPhysicalMaterial color={char.color} />
    </mesh>
  );
};

export default Text2;
