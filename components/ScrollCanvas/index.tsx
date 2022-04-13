import {
  Environment,
  Scroll,
  ScrollControls,
  useAspect,
} from "@react-three/drei";
import { Canvas, GroupProps, MeshProps, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { sRGBEncoding } from "three";
import Island from "../Island";
import Content from "./content";

const Video = (props: MeshProps) => {
  const size = useAspect(1000, 1000);
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "/infinite-surface-2.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  return (
    <mesh scale={size} {...props}>
      <planeBufferGeometry args={[0.4, 0.4]} />
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={sRGBEncoding} />
      </meshBasicMaterial>
    </mesh>
  );
};

const Item = (props: GroupProps) => <group {...props}>{props.children}</group>;

const Items = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <Scroll>
      <Item>
        <Video position={[0, 0, 0]} />
        <Island position={[0, 0, 0]} />
      </Item>
      <Item>
        <mesh position={[0, -h, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color={"hotpink"} />
        </mesh>
      </Item>
      <Item>
        <mesh position={[0, -h * 2, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color={"hotpink"} />
        </mesh>
      </Item>
    </Scroll>
  );
};

const ScrollCanvas = () => {
  return (
    <Canvas
      gl={{ antialias: false, stencil: false, depth: false }}
      dpr={[1, 1.5]}
      camera={{ zoom: 1 }}
    >
      <ScrollControls pages={3} damping={2}>
        {/* @ts-ignore */}
        <Scroll html style={{ width: "100%" }}>
          <Content />
        </Scroll>
        <Items />
      </ScrollControls>
      <Suspense fallback={null}>
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
};

export default ScrollCanvas;
