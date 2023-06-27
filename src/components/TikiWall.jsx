import React from "react";
import TikiTotem from "./TikiTotem";

const TikiWall = () => {
  return (
    <group>
      <TikiTotem position={[-1, 0, 0.3]} />
      <TikiTotem position={[1.1, 0, 0.3]} />
    </group>
  );
};

export default TikiWall;
