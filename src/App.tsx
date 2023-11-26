// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
import Home from './pages/Home'
import Projects from './pages/Projects'

// function Scene() {
//   return(
//     <Canvas>
//       <OrbitControls></OrbitControls>
//       <mesh>
//         <icosahedronGeometry></icosahedronGeometry>
//         <meshPhongMaterial></meshPhongMaterial>
//         <directionalLight position={10, 10, 10}></directionalLight>
//         {/* <directionalLightHelper></directionalLightHelper> */}
//       </mesh>
//     </Canvas>
//   );
// }

function App() {

  return (
    <>
      <Home/>
      <Projects/>
    </>
  )
}

export default App
