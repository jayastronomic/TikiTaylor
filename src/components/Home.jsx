import React from "react";
import { Canvas } from "@react-three/fiber";
import { Html, Loader, OrbitControls, Sky } from "@react-three/drei";

import GrassWall from "./Sketch";
import Text from "./Text";
import FlowerScape from "./FlowerScape";
import Ukulele from "./Ukulele";
import BeachChair from "./Beach_chair";
import PineApple from "./Pineapple";
import Table from "./Table";
import Malibu from "./Malibu";
import PalmTree from "./PalmTree";
import TikiWall from "./TikiWall";
import { Sparkles } from "@react-three/drei";
import Interface from "./Interface";
import TreeBox from "./TreeBox";
import BeachBall from "./BeachBall";

const Home = () => {
  return (
    <div className="relative h-screen">
      <Canvas
        style={{ height: "100%", width: "100%", backgroundColor: "green" }}
      >
        <directionalLight intensity={1.2} position={[0, -0.1, 3.5]} />
        <GrassWall />
        <Text />
        <FlowerScape />
        <Ukulele />
        <BeachChair />
        <PineApple />
        <Table />
        <Malibu />
        <TreeBox />
        <TikiWall />
        <Sparkles size={2} scale={5} speed={0.5} />
        <BeachBall />
      </Canvas>
      <Interface />
      <Loader />
    </div>
  );
};

export default Home;
