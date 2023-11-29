import { motion } from 'framer-motion'
import HoverButton from '../components/HoverButton'

const Socials = () => {

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
        delay: .1
      }
    }
  }

  const bgState = {
    rest: {
      scaleY: 1,
      transition: {
        duration: .2,
      }
    },
    hover: {
      scaleY: 0,
      transition: {
        duration: .2,
      }
    }
  }

  return (
    <div id="socials" className='h-full min-h-[700px] w-full px-0 py-0 lg:px-24 lg:py-40 bg-light'>
      {/* <PageNum num="01" name="Home"/> */}
      {/* <div className="line-b"></div> */}
      <div className="h-full w-auto flex flex-wrap-reverse line-all">
        <motion.div 
          className='overflow-hidden bg-dark flex justify-center items-center relative cursor-pointer
          border-t-[.1rem] border-r-0 lg:border-t-0 lg:border-r-[.1rem] border-solid border-dark
          h-[40%] lg:h-full w-full lg:w-1/5 xl:w-1/3'
          initial="rest"
          whileHover="hover"
          animate="rest"
          onClick={() => {window.location.href = '#'}}
        >
          <motion.p variants={textState} className='z-10'>back to top</motion.p>
          <motion.div variants={bgState} className="z-0 h-full w-full bg-light absolute top-0 left-0"></motion.div>
        </motion.div>
        <div className="h-[60%] lg:h-full w-full lg:w-4/5 xl:w-2/3 grid grid-rows-[2fr_1fr] sm:grid-rows-[6fr_1fr] lg:grid-rows-[3fr_1fr]">
          <div className="flex flex-col justify-center px-8 lg:px-16 line-b">
            <p className="title-font text-8xl lg:text-[10rem]">Socials</p>
            <p>Visit My Github and Behance to explore more of my portfolio</p>
          </div>
          <div className="block sm:flex">
            <div className="h-1/4 sm:h-full flex">
              <HoverButton text="Github" link="https://github.com/SyafiqSyech" linknewpage={true}/>
            </div>
            <div className="h-1/4 sm:h-full flex border-t-[.1rem] sm:border-t-0 border-solid border-dark">
              <HoverButton text="Behance" link="https://www.behance.net/abdullahsyafiq1" linknewpage={true}/>
            </div>
            <div className="h-1/4 sm:h-full flex border-t-[.1rem] sm:border-t-0 border-solid border-dark">
              <HoverButton text="Linkedin" link="https://www.linkedin.com/in/abdullah-syafiq-s-031ab025b/" linknewpage={true}/>
            </div>
            <div className="h-1/4 sm:h-full flex border-t-[.1rem] sm:border-t-0 border-solid border-dark">
              <HoverButton text="Email" link="mailto:syafiq.syech@gmail.com" linknewpage={false}/>
            </div>
          </div>
        </div>
        {/* <div className="w-12 flex items-center relative">
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max rotate-90">portfolio website</p>
        </div> */}
      </div>
    </div>
  )
}

export default Socials