import React from "react";
import PalmTree from "./PalmTree";

const TreeBox = () => {
  return (
    <group>
      <PalmTree position={[-1, -1.2, 0.0]} />
      <PalmTree position={[1.4, -0.4, 0.0]} />
      <PalmTree position={[-0.6, 2.5, 0.0]} />
    </group>
  );
};

export default TreeBox;
