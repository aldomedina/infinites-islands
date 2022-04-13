import { useGLTF } from "@react-three/drei";
import { GroupProps, useThree } from "@react-three/fiber";
import { DoubleSide } from "three";

const Island = (props: GroupProps) => {
  // @ts-ignore
  const { scene, nodes } = useGLTF("/models/low-poly-island.glb", true);
  console.log(nodes);
  return (
    <group {...props}>
      <mesh geometry={nodes.island.geometry}>
        <meshStandardMaterial color={"green"} side={DoubleSide} />
      </mesh>
    </group>
  );
};

export default Island;
