import React from "react";
import Flowers from "./Flowers";
const FlowerScape = () => {
  return (
    <group>
      <Flowers position={[0, 3, 0]} />
      <Flowers position={[-1.8, -0.5, 0]} />
      <Flowers position={[1.5, -3, 0]} />
    </group>
  );
};

export default FlowerScape;
