import React from 'react'
import { LuFigma } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
function Footer() {
  return (
    <div className="bg-gray-100 my-20 mx-auto px-4 sm:px-7 py-8">
        <div className="flex flex-col lg:flex-row">
          
          <div className="flex flex-col items-start gap-6">
            <Link to="/" className="text-[35px] font-bold text-gray-900">
              <LuFigma />
            </Link>
            <div className='flex gap-4'>
              <div className="text-xl text-gray-700"><FaXTwitter /></div>
              <div className="text-xl text-gray-700"><FiInstagram /></div>
              <div className="text-xl text-gray-800"><FaYoutube /></div>
              <div className="text-xl text-gray-800"><IoLogoLinkedin /></div>
            </div>
          </div>

         
          <div className="flex-grow mt-10 lg:mt-0 lg:ml-12"> 
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="flex flex-col items-start gap-4">
                <div className="text-xl font-bold">Use Cases</div>
                <div className="flex flex-col items-start gap-2">
                  <div className="text-gray-600">UI design</div>
                  <div className="text-gray-600">UX Design</div>
                  <div className="text-gray-600">WireFraming</div>
                  <div className="text-gray-600">Diagramming</div>
                  <div className="text-gray-600">Brainstorming</div>
                  <div className="text-gray-600">Online Whiteboard</div>
                  <div className="text-gray-600">Team collaboration</div>
                </div>
              </div>

          
              <div className="flex flex-col items-start gap-4">
                <div className="text-xl font-bold">Explore</div>
                <div className="flex flex-col items-start gap-2">
                  <div className="text-gray-600">Design</div>
                  <div className="text-gray-600">Prototyping</div>
                  <div className="text-gray-600">Development features</div>
                  <div className="text-gray-600">Design systems</div>
                  <div className="text-gray-600">Collaboration features</div>
                  <div className="text-gray-600">Design process</div>
                  <div className="text-gray-600">FigJam</div>
                </div>
              </div>

          
              <div className="flex flex-col items-start gap-4">
                <div className="text-xl font-bold">Resources</div>
                <div className="flex flex-col items-start gap-2">
                  <div className="text-gray-600">Blog</div>
                  <div className="text-gray-600">Best practices</div>
                  <div className="text-gray-600">Colors</div>
                  <div className="text-gray-600">Color wheel</div>
                  <div className="text-gray-600">Support</div>
                  <div className="text-gray-600">Developers</div>
                  <div className="text-gray-600">Resource library</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer
