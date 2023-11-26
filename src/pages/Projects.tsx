// import { motion } from 'framer-motion'

import HoverPhoto from "../components/HoverPhoto"
import PageNum from "../components/PageNum"

const Projects = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-[1fr_16fr] bg-light line-t">
      <PageNum num="02" name="Projects"/>
      <div className="w-auto grid grid-cols-[3fr_4fr]">
        <div className="flex flex-col items-center py-16">
          <HoverPhoto h={24} w={30} image=""/>
        </div>
        <div className="line-l">

        </div>
      </div>
    </div>
  )
}

export default Projects