import React from 'react'

function CardLayout3() {
  return (
    <div className="bg-gray-100 my-20 mx-auto px-7 py-8">

        <div className="text-3xl font-bold text-gray-900 mb-4">Main Heading</div>
        
       
        <div className="text-lg text-gray-400 mb-8">This is the subheading with additional information</div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
       
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col space-y-4">
              
              <img
                src="https://via.placeholder.com/150"
                alt={`Card Image ${index + 1}`}
                className="w-[150px] h-[150px] object-cover rounded-lg"
              />
              
            
              <div className="text-xl font-bold text-gray-900 text-left">Title {index + 1}</div>
              
             
              <div className="text-gray-600 text-left">
                This is some descriptive text for card {index + 1}. It provides additional details about the content of the card.
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default CardLayout3
