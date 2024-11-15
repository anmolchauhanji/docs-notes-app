
import Card from "./card"


function Forground() {
  
  const Data=[{
    desc: "Lorem ipsum dolor sit amet",
    color: "bg-blue-500",
    size:"5.4 MB",
    icon: false,
    down : true,
  },
  {
    desc: "Lorem ipsum dolor sit amet",
    color: "bg-blue-500",
    size:"5.4 MB",
    icon: false,
    down : true,
  },
  {
    desc: "lorem ipsum dolor sit amet ",
    color: "bg-blue-500",
    size:"0.4 MB",
    icon: false,
    down : false,
  }]
  return (
 <div>
  <div className='flex gap-5 mt-16 w-full  h-screen absoulte z-[3] top-0 left-0  fixed'>
   {Data.map((item,index)=>(
    <Card Data={item} key={index}/>
   ))}
 </div>
 </div>
  )
}

export default Forground