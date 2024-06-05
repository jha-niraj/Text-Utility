import { useState } from "react";

import "../index.css"
import { Sun, SunMoon, Menu, X } from "lucide-react";

const Navbar = () => {
    const [ darkToggle, setDarkToggle ] = useState(false);
    const [ navbarToggle, setNavbarToggle ] = useState(false);
    const [ backgroundColor, setBackgroundColor ] = useState("black");

    const hanldeBlur = () => {
        setDarkToggle(false);
    }

    return (
        <section className={`flex flex-col items-center justify-between w-full p-2 ${backgroundColor === "black" ? "bg-blac text-whit" : ""}`}>
            <div className="flex items-center justify-between w-full">
                <div className="">
                    <h1 className="text-3xl">TextMagic</h1>
                </div>
                <div className="">
                    <ul className="gap-5 hidden">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">About</a>
                        <a href="#">About</a>
                        <a href="#">About</a>
                    </ul>
                </div>
                <div className="flex gap-4">
                    <button className="bg-gray-300 p-1 rounded-lg" onClick={() => setDarkToggle(c => !c)} onBlur={hanldeBlur}>
                        <Sun className="size-8 cursor-pointer" />
                    </button>
                    {   darkToggle ? 
                        <div className="flex flex-col absolute top-14 right-28 bg-black text-white p-2 rounded-lg duration-500 animate-in-opacity">
                            <button onClick={() => setBackgroundColor("white")} className="hover:bg-gray-600 hover:text-white p-1 rounded-lg">Light</button>
                            <button onClick={() => setBackgroundColor("black")} className="hover:bg-gray-600 hover:text-white p-1 rounded-lg">Dark</button>
                            <button onClick={() => setBackgroundColor("black")} className="hover:bg-gray-600 hover:text-white p-1 rounded-lg">System</button>
                        </div> : ""
                    }
                    <div className="bg-gray-300 p-1 rounded-lg" onClick={() => setNavbarToggle(c => !c)}>
                        {   !navbarToggle ? 
                            <Menu className="size-8 cursor-pointer" />
                            : <X className="size-8 cursor-pointer" />
                        }
                    </div>
                </div>
            </div>
            {   navbarToggle ? 
                <div className="w-full flex items-center justify-end">
                    <ul className="gap-2 flex flex-col">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Projects</a>
                        <a href="#">Niraj Jha</a>
                    </ul>
                </div>
                : ""
            }
        </section>
    )
}

export default Navbar;