import React from "react"
import { Link } from "react-router-dom"

const Navbar =()=>{
    return(
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    
    <span className="font-semibold text-xl tracking-tight">Rick and Morty</span>
  </div>
  
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <Link to='/' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue mr-4">Home</Link>
    </div>
  </div>
</nav>
    )
}

export default Navbar