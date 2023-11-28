import PageNum from '../components/PageNum'
import HoverPhoto from '../components/HoverPhoto'
import HoverButton from '../components/HoverButton'

const Home = () => {
  return (
    <div className='h-full min-h-[700px] w-full p-0 lg:p-24 bg-light'>
      {/* <PageNum num="01" name="Home"/> */}
      {/* <div className="line-b"></div> */}
      {/* <div className="h-full w-auto grid grid-cols-none grid-rows-[1fr_1fr] lg:grid-rows-none lg:grid-cols-[8fr_5fr] line-all"> */}
      <div className="h-full flex flex-wrap line-all">
        <div className="h-[60%] lg:h-full w-full lg:w-[60%] grid grid-rows-[6fr_1fr]">
          <div className="flex flex-col justify-center px-8 lg:px-16 line-b">
            <div className="flex gap-10 flex-wrap">
              <p className="title-font text-9xl lg:text-[14rem]">Syaf</p>
              <p className="pt-5 text-xs">Abdullah Syafiq</p>
            </div>
            <p>Web Developer (but i dabble)</p>
          </div>
          <div className="flex">
            <HoverButton text="Projects" link="#projects"/>
            <HoverButton text="Socials" link="#socials"/>
          </div>
        </div>
        <div 
          className='h-[40%] lg:h-full w-full lg:w-[40%] overflow-hidden bg-light
          border-t-[.1rem] border-l-0 lg:border-t-0 lg:border-l-[.1rem] border-solid border-dark'
        >
          <HoverPhoto h="full" w="full" image="public\img\pic.png" text="hover"/>
        </div>
        {/* <div className="w-12 flex items-center relative">
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max rotate-90">portfolio website</p>
        </div> */}
      </div>
    </div>
  )
}

export default Home