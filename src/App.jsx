import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const RotatingCylinder = () =>{
  // Creates a reference to the mesh (3D object) so you can access and manipulate it directly (like changing its rotation).
  const meshRef = useRef();

  // This hook runs every animation frame (like requestAnimationFrame).
  // Inside it, we rotate the mesh slightly on both the X and Y axes by 0.01 radians per frame.
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  })

  return(
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color={"#468585"} emissive={"#468585"} />

      {/* Sparkels */}
      <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color={"orange"} />
    </mesh>
  )
}
const App = () =>{
  return (
    <>
    {/* Canvas is used to turn everything into 3D renderer thing */}
    <Canvas style={{
      height:"100vh",
      width:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
    }}>

      <OrbitControls enableZoom enablePan enableRotate />
      <spotLight intensity={10} position={[1, 1, 1]} color={"#9CDBA6"} />
      <color attach="background" args={["#F0F0F)"]} />
      <RotatingCylinder/>
      
    </Canvas>
    </>
    )
}
export default App;