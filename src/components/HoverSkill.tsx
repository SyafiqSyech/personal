import { motion } from 'framer-motion'

const HoverSkill = (props: {name: any, desc: any, handleEnter: any, handleLeave: any}) => {

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
      scaleY: 0,
      originY: 1,
      transition: {
        duration: .2,
      }
    },
    hover: {
      scaleY: 1,
      originY: 1,
      transition: {
        duration: .2,
      }
    }
  }

  return (
    <motion.div
      className="relative rounded-full overflow-hidden"
      initial="rest"
      whileHover="hover"
      animate="rest"
      onMouseEnter={props.handleEnter}
      onMouseLeave={props.handleLeave}
    >
      <motion.div className="rounded-full px-4 py-1 line-all">
        <motion.p variants={textState} className="z-10 relative">{props.name}</motion.p>
      </motion.div>
      <motion.div variants={bgState} className="z-0 h-full w-full bg-dark absolute top-0 left-0"></motion.div>
    </motion.div>
  )
}

export default HoverSkill