import { motion } from 'framer-motion'

const HoverButton = (props: {text: any, link: any, linknewpage: any}) => {
  // const onButtonHover = () => {
  //   animate([['.buttonBackground', {scaleY: 1}, {duration: .2}]])
  //   animate([['.buttonText', {y: ['0%', '-100%', '0%'], color: ["#00040F", "#00040F", "#FFFBF0", "#FFFBF0"]}, {duration: .2, delay: .2}]])
  // }
  
  // const onButtonNotHover = () => {
  //   animate([['.buttonBackground', {scaleY: 0}, {duration: .2}]])
  //   animate([['.buttonText', {y: ['0%', '100%', '0%'], color: ["#FFFBF0", "#FFFBF0", "#00040F", "#00040F"]}, {duration: .2, delay: .2}]])
  // }
  
  const textState = {
    rest: {
      color: "#00040F",
      transition: {
        duration: .2,
      }
    },
    hover: {
      color: "#FFFBF0",
      transition: {
        duration: .2,
      }
    }
  }

  const bgState = {
    rest: {
      scaleX: 0,
      originX: 0,
      transition: {
        duration: .2,
      }
    },
    hover: {
      scaleX: 1,
      originX: 0,
      transition: {
        duration: .2,
      }
    }
  }

  const boxState = {
    rest: {
      paddingLeft: "2rem",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      }
    },
    hover: {
      paddingLeft: "4rem",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      }
    }
  }
  
  return (
    // <motion.div className="h-full w-min line-r flex items-center cursor-pointer relative"
    //   onHoverStart={onButtonHover}
    //   onHoverEnd={onButtonNotHover}
    // >
    //   <motion.div className="button px-8 flex proj overflow-hidden text-dark">
    //     <p className="buttonText z-10 pr-3 text-center relative">{text}</p>
    //     <div className="buttonText h-6 flex items-center z-10 relative">
    //       <ArrowDown className="mb-[0.1rem]" size={16} strokeWidth={2}/>
    //     </div>
    //   </motion.div>
    //   <motion.div initial={{ scaleY: 0, originY: 1 }} className="buttonBackground z-0 h-full w-full bg-dark absolute top-0 left-0"></motion.div>
    // </motion.div>
    <motion.div 
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="h-full w-min line-r flex items-center cursor-pointer relative"
      onClick={() => {props.linknewpage ? window.open(props.link) : window.location.href = props.link}}
    >
      <motion.div variants={boxState} className="pr-8 flex proj overflow-hidden text-dark relative">
        <motion.p variants={textState} className="z-10 pr-3">{props.text}</motion.p>
        <motion.p variants={textState} className="z-10">+</motion.p>
      </motion.div>
      <motion.div variants={bgState} className="z-0 h-full w-full bg-dark absolute top-0 left-0"></motion.div>
    </motion.div>
  )
}

export default HoverButton