import React from 'react';
import { Link } from "react-router-dom";
const Sidebar = (props) => {
  return (
   <div>
    <div className="flex-3 w-40 h-screen " >
      <div className="flex flex-col items-center h-full overflow-hidden text-gray-400 bg-gray-900 rounded">
        <a className="flex items-center w-full px-3 mt-3" href='/'>
           <span className="ml-2 text-sm font-bold">Theta Flix</span>
        </a>
        <div className="w-full px-2">
          <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
        <span>
        <Link to="/Collections">NFT Collections</Link>
            </span> 
          </div> 
        </div> 
      </div> 
    </div> 
  </div>
  )
};

export default Sidebar;
