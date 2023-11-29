import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion'

// w: any, h: any, image: any, text: any

const HoverPhoto = (props: {w: any, h: any, image: any, text: any}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {stiffness:100 , damping: 8});
  const mouseYSpring = useSpring(y, {stiffness:100 , damping: 8});

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["30deg", "-30deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-30deg", "30deg"]
  );
  
  const handleMouseMove = (e: any) => {
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
    shad.forEach((n) => {n.classList.add("shadow-xl")})
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);

    const shad = document.querySelectorAll(".shad")
    shad.forEach((n) => {n.classList.remove("shadow-xl")})
  };

  const textState = {
    rest: {
      opacity: 1,
      transition: {
        duration: .2
      }
    },
    hover: {
      opacity: 0,
      transition: {
        duration: .2
      }
    },
  }

  const boxOuterState = {
    rest: {
      width: "100%",
      height: "100%",
      transition: {
        duration: .2
      }
    },
    hover: {
      width: "80%",
      height: "80%",
      transition: {
        duration: .2
      }
    },
  }

  const boxState = {
    rest: {
      borderRadius: 0,
      transition: {
        duration: .2
      }
    },
    hover: {
      borderRadius: "8rem",
      transition: {
        duration: .2
      }
    },
  }

  const boxTop = [-2, -1, 1, 2]

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{
        height: props.h == "full" ? "100%" : props.h+"rem",
        width: props.w == "full" ? "100%" : props.w+"rem",
      }}
      className="relative overflow-hidden flex justify-center items-center bg-dark"
    >
      <motion.div
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        variants={boxOuterState}
        className='h-full w-full relative'
      >

        <motion.img
          style={{
            transform: "translateZ(0px)",
            transformStyle: "preserve-3d",
          }}
          variants={boxState} 
          className='shad h-full w-full object-cover object-center overflow-auto' 
          src={props.image} 
          alt="photo"
        />
        {/* <motion.div
          style={{
            transform: "translateZ(-80px)",
            transformStyle: "preserve-3d",
          }}
          variants={boxState}
          className="absolute m-auto left-0 right-0 top-0 bottom-0 bg-yellow shadow-2xl"
        ></motion.div> */}
        <motion.p
          style={{
            transform: "translateZ(40px)",
            transformStyle: "preserve-3d",
          }}
          variants={textState}
          className="absolute bottom-8 w-full text-center text-light h-0"
        >{props.text}</motion.p>
        {boxTop.map((b) => (
          <motion.div
          style={{
            transform: "translateZ("+(b*100)+"px)",
            transformStyle: "preserve-3d",
          }}
          variants={boxState}
          className="shad absolute m-auto left-0 right-0 top-0 bottom-0 border-4 border-light border-solid"
        ></motion.div>
        ))}
        {/* <motion.div
          style={{
            transform: "translateZ(100px)",
            transformStyle: "preserve-3d",
          }}
          variants={boxTopState}
          className="shad absolute m-auto left-0 right-0 top-0 bottom-0 border-4 border-light border-solid"
        ></motion.div>
        <motion.div
          style={{
            transform: "translateZ(140px)",
            transformStyle: "preserve-3d",
          }}
          variants={boxTopState}
          className="shad absolute m-auto left-0 right-0 top-0 bottom-0 border-4 border-light border-solid"
        ></motion.div>
        <motion.div
          style={{
            transform: "translateZ(180px)",
            transformStyle: "preserve-3d",
          }}
          variants={boxTopState}
          className="shad absolute m-auto left-0 right-0 top-0 bottom-0 border-4 border-light border-solid"
        ></motion.div> */}
      </motion.div>
    </motion.div>
  )
}

export default HoverPhoto