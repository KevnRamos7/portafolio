
// eslint-disable-next-line react/prop-types
const DotTech = ({image, title}) => {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] rounded-[20px] border border-[rgba(255,255,255,0.2)] backdrop-blur-lg shadow-lg
       flex flex-row items-center justify-between px-4 me-4
    ">

        <div className="flex flex-row justify-center items-center">
            <img src={image} />
            <h1 className="text-md font-light text-gray-300 ms-1">{title}</h1>
        </div>

    </div>
  )
}

export default DotTech