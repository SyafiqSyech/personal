import { motion } from 'framer-motion'
import HoverPhoto from './HoverPhoto'

const HoverButton = ({title, subtitle, img, role, tools ,desc, year, link}) => {

  const popState = {
    rest: {
      display: "none",
    },
    hover: {
      display: "grid",
    }
  }

  const textState = {
    rest: {
      color: "#00040F",
      x: 0,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 7,
      }
    },
    hover: {
      color: "#00040F",
      x: "3rem",
      transition: {
        type: "spring",
        stiffness: 800,
        damping: 25,
      }
    },
    click: {
      color: "#FFFBF0",
      x: "3rem",
      transition: {
        type: "spring",
        stiffness: 800,
        damping: 25,
      }
    }
  }
  
  const textrightState = {
    rest: {
      color: "#00040F",
      opacity: 0,
      x: "-3rem",
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 7,
      }
    },
    hover: {
      color: "#00040F",
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 800,
        damping: 25,
      }
    },
    click: {
      color: "#FFFBF0",
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 800,
        damping: 25,
      }
    }
  }


  const goToLink = () => {
    window.location.href = link
  }

  return (
    <motion.div className="h-20 cursor-pointer relative"
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={goToLink}
    >
      <motion.div 
        variants={popState}
        className="grid line-all fixed z-20 left-0
        h-[calc(45dvh-1rem)] w-[calc(100dvw-1rem)] mx-2 grid-rows-[1fr_1fr] top-2 -translate-y-0
        lg:h-[calc(100dvh-6rem)] lg:w-[calc(50dvw-6rem)] lg:mx-12 lg:grid-rows-[4fr_6fr] lg:top-1/2 lg:-translate-y-1/2"
      > 
      {/* <motion.div 
        variants={popState}
        className="h-[calc(100dvh-6rem)] w-[calc(50dvw-6rem)] mx-12 grid grid-rows-[4fr_6fr] line-all fixed top-1/2 -translate-y-1/2 z-20 left-0"
      >  */}
        <HoverPhoto h="full" w="full" image={img} text=""/>
        <div className="line-t bg-light flex flex-col p-2 lg:p-4 gap-2 lg:gap-4">
          <p className="text-center">{title}</p>
          <div className="line-all grid grid-cols-2">
            <p className="p-2 lg:p-4">
              Role:<br/>
              {role}
            </p>
            <p className="p-2 lg:p-4 line-l">
              Tools:<br/>
              {tools}
            </p>
          </div>
          <div className="h-full flex flex-col justify-between">
            <p>
              {desc}
            </p>
            <div className="flex justify-between">
              <p>{subtitle}</p>
              <p>{year}</p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="h-full w-full p-10 flex items-center absolute top-0 left-0 overflow-hidden">
        <motion.p variants={textState} className="z-10 w-max absolute right-[calc(100%+1rem)]">-----------+</motion.p>
        <motion.p variants={textState} className="z-10">{title}</motion.p>
        <motion.p variants={textrightState} className="z-10 w-max absolute right-8">{subtitle}</motion.p>
      </div>
      {/* <motion.div variants={bgState} className="z-0 h-full w-full bg-dark absolute top-0 left-0"></motion.div> */}
    </motion.div>
  )
}

export default HoverButton