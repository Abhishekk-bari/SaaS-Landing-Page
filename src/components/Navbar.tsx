import Image from "next/image"
import logoImage from "../assets/images/logosaas.png"
import MenuIcon from "../assets/icons/menu.svg"


export const Navbar = () => {

  return (
    <div className=" bg-black">
    <div className="px-4">
      <div className="py-4 flex item-center justify-between">
        <div className="relative">
          <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)] blur-md"></div>
        <Image 
        src={logoImage} 
        alt="Saas logo" 
        className="h-12 w-12 relative" 
        />
        </div>
      <div className="border border-white border-opacity-30 h-10 w-10 sm:hidden inline-flex justify-center items-center rounded-lg">
      <MenuIcon className="text-white"/>
      </div>
      <nav className="gap-6 items-center hidden sm:flex">
        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100">ABOUT</a>
        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100">CONTACT</a>
        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100">FEATURE</a>
        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100">LOGIN</a>
        <button className="bg-white py-2 px-3 rounded-lg">Get For Free</button>
      </nav>
      </div>
    </div>
    </div>
  )
}
