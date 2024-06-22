import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../index.css"
import { Sun, SunMoon, Menu, X } from "lucide-react";

const Navbar = () => {
    const [ darkToggle, setDarkToggle ] = useState(false);
    const [ navbarToggle, setNavbarToggle ] = useState(false);
    const navigate = useNavigate();

    const hanldeBlur = () => {
        setDarkToggle(false);
    }

    return (
        <section className={`flex flex-col gap-3 items-center justify-between rounded-lg w-full p-2 bg-gray-200`}>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-center gap-5">
                    <div className="">
                        <button onClick={() => navigate("/")} className="text-3xl">TextMagic</button>
                    </div>
                    <div className="hidden sm:flex items-center justify-center gap-5 w-full">
                        <Link to="#">Home</Link>
                        <Link to="#">Project Info</Link>
                        <Link to="#">About Me</Link>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="bg-gray-300 p-1 rounded-lg" onClick={() => setDarkToggle(c => !c)} onBlur={hanldeBlur}>
                        <Sun className="size-8 cursor-pointer" />
                        {   darkToggle ? 
                            <div className="flex flex-col absolute top-16 gap-2 right-28 sm:right-3 bg-black text-white p-2 rounded-lg duration-500 animate-in-opacity">
                                <button onClick={() => setBackgroundColor("white")} className="hover:bg-gray-600 hover:text-white transition-all duration-300 p-1 rounded-lg">Light</button>
                                <button onClick={() => setBackgroundColor("black")} className="hover:bg-gray-600 hover:text-white transition-all duration-300 p-1 rounded-lg">Dark</button>
                                <button onClick={() => setBackgroundColor("black")} className="hover:bg-gray-600 hover:text-white transition-all duration-300 p-1 rounded-lg">System</button>
                            </div> : ""
                        }
                    </button>
                    <button className="bg-gray-300 p-1 flex sm:hidden rounded-lg" onClick={() => setNavbarToggle(c => !c)} onBlur={() => setNavbarToggle(false)}>
                        {   !navbarToggle ? 
                            <Menu className="size-8 cursor-pointer" />
                            : <X className="size-8 cursor-pointer" />
                        }
                        {   navbarToggle ?
                                <div className="flex flex-col absolute top-16 gap-2 right-3 bg-black text-white p-2 rounded-lg duration-500">
                                    <a href="#" className="hover:bg-gray-600 hover:text-white transition-all duration-300 p-1 rounded-lg">Home</a>
                                    <a href="#" className="hover:bg-gray-600 hover:text-white transition-all duration-300 p-1 rounded-lg">About</a>
                                    <a href="#" className="hover:bg-gray-600 hover:text-white transition-all duration-300 p-1 rounded-lg">Projects</a>
                                    <a href="#" className="hover:bg-gray-600 hover:text-white transition-all duration-300 p-1 rounded-lg">Niraj Jha</a>
                                </div>
                            : ""
                        }
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Navbar;