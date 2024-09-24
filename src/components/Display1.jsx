import React from 'react'

function Display1() {
  return (
    <div className="bg-gray-100 min-h-[500px] my-20 mx-auto px-4 flex flex-col justify-center items-center space-y-4">
      
        <h1 className="text-5xl font-bold text-gray-900">Title</h1>
        
        <p className="text-2xl text-gray-500">Subtitle</p>

        <div className="flex space-x-4">
          <button className="bg-gray-300 text-gray-900 px-6 py-1 rounded-md hover:bg-gray-400">Button 1</button>
          <button className="bg-gray-900 text-white px-6 py-1 rounded-md hover:bg-gray-800">Button 2</button>
        </div>
      </div>
  )
}

export default Display1
