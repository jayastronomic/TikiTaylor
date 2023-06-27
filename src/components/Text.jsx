import React from "react";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import Tiki from "../fonts/Tiki.json";
import Text2 from "./Text2";
extend({ TextGeometry });

const Text = () => {
  const font = new FontLoader().parse(Tiki);

  const config = {
    font,
    size: 0.5,
    height: 0,
    bevelEnabled: true,
    bevelThickness: 0.5,
    bevelSize: 0.01,
    bevelSegments: 0.5,
  };

  const firstLine = [
    { letter: "T", space: 0, color: "#16dbd8" },
    { letter: "a", space: 0.45, color: "#fbbd30" },
    { letter: "y", space: 0.85, color: "#e68ab9" },
    { letter: "l", space: 1.2, color: "#ec5c0c" },
    { letter: "o", space: 1.45, color: "#16dbd8" },
    { letter: "r", space: 1.85, color: "#fbbd30" },
    { letter: "'", space: 2.3, color: "#e68ab9" },
    { letter: "s", space: 2.5, color: "#ec5c0c" },
  ];

  const secondLine = [
    { letter: "T", space: 0, color: "#fbbd30" },
    { letter: "i", space: 0.5, color: "#ec5c0c" },
    { letter: "k", space: 0.75, color: "#16dbd8" },
    { letter: "i", space: 1.2, color: "#e68ab9" },
  ];
  const thirdLine = [
    { letter: "2", space: 0, color: "#e68ab9" },
    { letter: "5", space: 0.45, color: "#fbbd30" },
    { letter: "t", space: 0.9, color: "#ec5c0c" },
    { letter: "h", space: 1.2, color: "#16dbd8" },
  ];

  return (
    <group position={[-1.3, 0.6, 0.5]}>
      <group>
        {firstLine.map((char) => {
          return (
            <mesh position={[char.space, 0, 0]} key={char.letter}>
              <textGeometry args={[char.letter, config]} />
              <meshPhysicalMaterial color={char.color} />
            </mesh>
          );
        })}
        <group position={[0.65, -0.8, 0]}>
          {secondLine.map((char) => {
            if (char.letter === "i") {
              return (
                <>
                  <mesh position={[char.space, 0, 0]} key={char.letter}>
                    <textGeometry args={[char.letter, config]} />
                    <meshPhysicalMaterial color={char.color} />
                  </mesh>
                  <Text2 char={char} />
                </>
              );
            }
            return (
              <mesh position={[char.space, 0, 0]} key={char.letter}>
                <textGeometry args={[char.letter, config]} />
                <meshPhysicalMaterial color={char.color} />
              </mesh>
            );
          })}
        </group>
        <group position={[0.65, -1.6, 0]}>
          {thirdLine.map((char) => {
            return (
              <mesh position={[char.space, 0, 0]} key={char.letter}>
                <textGeometry args={[char.letter, config]} />
                <meshPhysicalMaterial color={char.color} />
              </mesh>
            );
          })}
        </group>
      </group>
    </group>
  );
};

export default Text;
