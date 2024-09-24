import React from 'react'

function CradLayout2() {
  return (
    <div className="bg-gray-100 my-20 mx-auto px-7 py-8">
        
        <div className="text-3xl font-bold text-gray-900 mb-4">Heading</div>
        
      
        <div className="text-lg text-gray-400 mb-8"> Subheading</div>

   
        <div className="space-y-8">
         
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-6">
              
              <img
                src="https://via.placeholder.com/120"
                alt="Card Image"
                className="w-[120px] h-[120px] object-cover rounded-lg"
              />
              
              
              <div className="flex flex-col space-y-2 w-full">
              
                <div className="text-2xl font-bold text-gray-900">Title {index + 1}</div>
                
              
                <div className="text-gray-600">
                  This is some descriptive text for card {index + 1}. It provides additional details about the content of the card.
                </div>

            
                <div>
                  <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md hover:bg-gray-300">
                 Button
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default CradLayout2
