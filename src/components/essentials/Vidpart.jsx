import React from 'react'

const Vidpart = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-black  to-green-900 flex  items-center justify-center">
    
    <video controls autoPlay loop muted className="w-[85rem] h-[40rem] py-4">
     <source src="/docs/videos/offcourt.mp4" type="video/mp4"/>
    </video>
    
    </div>
  )
}


export default Vidpart;