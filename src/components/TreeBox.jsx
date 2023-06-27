import React from "react";
import { Model } from "./Scene";

const TreeBox = () => {
  return (
    <group position={[0, 0, -2]}>
      <group position={[-2.6, 1, -3]} rotation={[0, -0.3, -1]}>
        <Model />
      </group>
      <group position={[-2.6, -1, -3]} rotation={[0, -0.3, -1]}>
        <Model />
      </group>
      <group position={[-2.6, -3, -3]} rotation={[0, -0.3, -1]}>
        <Model />
      </group>
      <group position={[-2.6, -5, -3]} rotation={[0, -0.3, -1.3]}>
        <Model />
      </group>
    </group>
  );
};

export default TreeBox;
