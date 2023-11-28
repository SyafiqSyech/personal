// import { motion } from 'framer-motion'
import HoverProjectButton from "../components/HoverProjectButton"
import projectsjson from "../Projects.json"
import dabblesjson from "../Dabbles.json"

const Projects = () => {

  return (
    <div id="projects" className="min-h-screen w-full bg-light">
      <div className="min-h-screen w-auto block lg:grid grid-cols-[1fr_1fr]">
        <div></div>
        <div className="py-40 border-solid border-dark
          border-t-0 border-b-0 border-l-[.1rem] border-r-[.1rem] lg:border-t-[.1rem] lg:border-b-[.1rem] lg:border-r-0
        ">
          <p className="title-font text-8xl lg:text-[10rem] p-8">Projects</p>
            {projectsjson.map((n) => (
                <HoverProjectButton 
                  title={n.title}
                  subtitle={n.subtitle}
                  img={n.image}
                  role={n.role}
                  tools={n.tools}
                  desc={n.desc}
                  year={n.year}
                  link={n.link}
                />
              ))
            }
          <p className="title-font text-8xl lg:text-[10rem] pt-40 p-8">My Dabbles</p>
            {dabblesjson.map((n) => (
                <HoverProjectButton 
                  title={n.title}
                  subtitle={n.subtitle}
                  img={n.image}
                  role={n.role}
                  tools={n.tools}
                  desc={n.desc}
                  year={n.year}
                />
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Projects