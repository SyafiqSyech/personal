const PageNum = ({ num, name }) => {
  return (
    <div className="w-auto py-8 flex flex-col items-center line-r">
      <p className="w-full text-center pb-1">{num}</p>
      <p className="w-0 rotate-90">{name}</p>
    </div>
  )
}

export default PageNum