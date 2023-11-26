import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion'
import Photo from '../assets/img/pic.png'

const HoverPhoto = ({ w, h, image }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {stiffness:100 , damping: 4});
  const mouseYSpring = useSpring(y, {stiffness:100 , damping: 4});

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["20deg", "-20deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-20deg", "20deg"]
  );
  
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);

    const shad = document.querySelectorAll(".shad")
    shad.forEach((n) => {n.classList.add("shadow-2xl")})
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);

    const shad = document.querySelectorAll(".shad")
    shad.forEach((n) => {n.classList.remove("shadow-2xl")})
  };


  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
        height: h+"rem",
        width: w+"rem",
      }}
      className="relative"
    >
      <img className='h-full w-full object-cover object-center rounded-[8rem] after:content-none after:absolute after:bg-blue-500 after:top-0' src={Photo} alt="photo"/>
      <div
        style={{
          transform: "translateZ(-80px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-1 rounded-[8rem] border-[100px] border-yellow border-solid shadow-2xl"
      ></div>
      <p
        style={{
          transform: "translateZ(40px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute bottom-8 w-full text-center text-light h-0"
      >Hover</p>
      {/* <div
        style={{
          transform: "translateZ(160px)",
          transformStyle: "preserve-3d",
        }}
        className="shad absolute inset-2 rounded-[8rem] border-8 border-dark border-solid"
      ></div>
      <div
        style={{
          transform: "translateZ(240px)",
          transformStyle: "preserve-3d",
        }}
        className="shad absolute inset-2 rounded-[8rem] border-8 border-dark border-solid"
      ></div> */}
    </motion.div>
  )
}

export default HoverPhoto