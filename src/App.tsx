// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
import Home from './sections/Home'
import Projects from './sections/Projects'
import Socials from './sections/Socials'

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
      <Socials/>
    </>
  )
}

export default App
