import { ArrowDown } from 'lucide-react'
import PageNum from '../components/PageNum'
import { motion } from "framer-motion"
import HoverPhoto from '../components/HoverPhoto'

const Home = () => {
  return (
    <div className='h-screen w-full grid grid-cols-[1fr_16fr] bg-light'>
      <PageNum num="01" name="Home"/>
      <div className="w-auto grid grid-cols-[8fr_5fr_auto]">
        <div className="grid grid-rows-[1fr_6fr_1fr]">
          <div></div>
          <div className="h-full flex flex-col justify-center p-10 line-t line-b">
            <p className="title-font text-[14rem] -my-8">Syaf</p>
            <p>Web Developer (but i dabble)</p>
          </div>
          <motion.div className="w-min px-8 flex items-center line-r cursor-pointer"
            // whileHover={{ opacity: 0 }}
          >
            <p className="pr-3">Projects</p>
            <ArrowDown className="mb-[0.1rem]" size={16} color='#00040F' strokeWidth={2}/>
          </motion.div>
        </div>
        <div className='flex items-center justify-center line-l line-r'>
          <HoverPhoto h={30} w={24} image="" />
        </div>
        <div className="w-12 flex items-center relative">
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max rotate-90 text-gray">portfolio website</p>
        </div>
      </div>
    </div>
  )
}

export default Home