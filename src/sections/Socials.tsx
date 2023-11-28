import PageNum from '../components/PageNum'
import HoverPhoto from '../components/HoverPhoto'
import HoverButton from '../components/HoverButton'

const Home = () => {
  return (
    <div id="socials" className='h-full min-h-[700px] w-full px-0 py-0 lg:px-24 lg:py-40 bg-light'>
      {/* <PageNum num="01" name="Home"/> */}
      {/* <div className="line-b"></div> */}
      <div className="h-full w-auto flex flex-wrap-reverse line-all">
        <div 
          className='overflow-hidden bg-light
          border-t-[.1rem] border-r-0 lg:border-t-0 lg:border-r-[.1rem] border-solid border-dark
          h-[40%] lg:h-full w-full lg:w-1/5 xl:w-1/3'
        >
          
        </div>
        <div className="h-[60%] lg:h-full w-full lg:w-4/5 xl:w-2/3 grid grid-rows-[2fr_1fr] sm:grid-rows-[6fr_1fr] lg:grid-rows-[3fr_1fr]">
          <div className="flex flex-col justify-center px-8 lg:px-16 line-b">
            <p className="title-font text-8xl lg:text-[10rem]">Socials</p>
            <p>Visit My Github and Behance to explore more of my portfolio</p>
          </div>
          <div className="block sm:flex">
            <div className="h-1/4 sm:h-full flex">
              <HoverButton text="Github" link="https://github.com/SyafiqSyech"/>
            </div>
            <div className="h-1/4 sm:h-full flex border-t-[.1rem] sm:border-t-0 border-solid border-dark">
              <HoverButton text="Behance" link="https://www.behance.net/abdullahsyafiq1"/>
            </div>
            <div className="h-1/4 sm:h-full flex border-t-[.1rem] sm:border-t-0 border-solid border-dark">
              <HoverButton text="Linkedin" link="https://www.linkedin.com/in/abdullah-syafiq-s-031ab025b/"/>
            </div>
            <div className="h-1/4 sm:h-full flex border-t-[.1rem] sm:border-t-0 border-solid border-dark">
              <HoverButton text="Email" link="mailto:syafiq.syech@gmail.com"/>
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

export default Home