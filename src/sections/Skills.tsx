import { useState } from "react"
import HoverSkill from "../components/HoverSkill"
import skillsjson from "../Skills.json"

const Skills = () => {
  const defaultSkillDesc = "Hover Over My skills to Learn more"
  const [skillDesc, setSkillDesc] = useState(defaultSkillDesc)
  const [skillName, setSkillName] = useState("")

  const handleSkillHover = ( idx: any ) => {
    if(idx != null){
      setSkillDesc(skillsjson[idx].desc)
      setSkillName(skillsjson[idx].name)
      return
    }
    setSkillDesc(defaultSkillDesc)
    setSkillName("")
  }

  return (
    <div className="h-full min-h-[700px] w-full py-0 lg:py-24 bg-light">
      <div className="h-full flex flex-wrap border-solid border-dark
        border-t-[.1rem] border-b-0 border-l-[.1rem] border-r-[.1rem] lg:border-t-[.1rem] lg:border-b-[.1rem] lg:border-r-0 lg:border-l-0"
      >
        <div className="h-[20%] lg:h-full w-full lg:w-[40%] p-0 pl-8 lg:p-20 flex justify-start items-center lg:items-start lg:justify-end border-solid border-dark
          border-r-0 lg:border-r-[.1rem] border-b-[.1rem] lg:border-b-0" 
        >
          <p className="title-font text-8xl lg:text-[10rem]">Skills</p>
        </div>
        <div className="h-[80%] lg:h-full w-full lg:w-[60%] p-20">
          <div className="flex flex-wrap gap-y-4 gap-x-4">
            {skillsjson.map((n, index) => (
              <HoverSkill key={n.name} name={n.name} desc={n.desc} handleEnter={() => handleSkillHover(index)} handleLeave={() => handleSkillHover(null)}/>
              ))
            }
          </div>
          <div className="mt-24 cursor-pointer">
            <p className="mb-4">{skillName}</p>
            <p>{skillDesc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills