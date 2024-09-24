import React from 'react'

function Display2() {
  return (
    <div className="bg-white min-h-[300px] my-20 mx-auto px-4 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 gap-6">
  
    <img
      src="https://via.placeholder.com/400"
      alt="Placeholder 1"
      className="w-full md:w-[400px] lg:w-[500px] h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-lg"
    />
    
    <img
      src="https://via.placeholder.com/400"
      alt="Placeholder 2"
      className="w-full md:w-[400px] lg:w-[500px] h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-lg"
    />
  </div>
  )
}

export default Display2
