import React from 'react'

function CardLayout1() {
  return (
    <div className="bg-gray-50 my-20  px-7 py-8">
    
        <div className="text-3xl font-bold text-gray-900 mb-4">Heading</div>
        
       
        <div className="text-lg text-gray-400 mb-8"> Subheading</div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white p-4 shadow-lg rounded-lg flex flex-col space-y-4">
              
              <div className="text-lg italic text-gray-900 font-bold">"This is a quote for card {index + 1}"</div>
              
              
              <div className="flex items-center space-x-4">
                
                <img
                  src="https://via.placeholder.com/80"
                  alt="Profile"
                  className="w-[80px] h-[80px] object-cover rounded-full"
                />
                
              
                <div className="flex flex-col space-y-2">
                  
                  <div className="text-xl font-bold text-gray-600">Title {index + 1}</div>
                  
                  
                  <div className="text-sm text-gray-500">This is the description for card {index + 1}.</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default CardLayout1
