import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
    const [ content, setContent ] = useState("");

    const handleTextarea = (e) => {
        setContent(e.target.value);
        const wordCount = e.target.value.trim().split(/\s+/).length;
        setCountWord(wordCount);
        setCountChar(e.target.value.length);
    }

    return (
        <section className="flex flex-col items-center justify-between w-full">
            <div className="w-[99%]">
                <Navbar />
            </div>
            <div className="h-full w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] m-3 flex flex-col items-center justify-center gap-3">
                <div>
                    <h1 className="text-center text-3xl font-bold">TextMagic - Word counter, Character Counter, Remove Spaces, Copy Text</h1>
                </div>
                <div className="w-full flex items-center justify-center">
                    <textarea className="border-2 p-2 border-gray-400 rounded-md w-full h-40" onChange={(e) => { 
                        handleTextarea(e); 
                    }}></textarea>
                </div>
                <div className="w-full gap-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <button className="p-2 bg-gray-900 hover:scale-105 transition-all duration-500 text-white text-center rounded-lg text-md font-medium">Convert to Lowercase</button>
                    <button className="p-2 bg-gray-900 hover:scale-105 transition-all duration-500 text-white text-center rounded-lg text-md font-medium">Convert to Uppercase</button>
                    <button className="p-2 bg-gray-900 hover:scale-105 transition-all duration-500 text-white text-center rounded-lg text-md font-medium">Clear Text</button>
                    <button className="p-2 bg-gray-900 hover:scale-105 transition-all duration-500 text-white text-center rounded-lg text-md font-medium">Copy to Clipboard</button>
                    <button className="p-2 bg-gray-900 hover:scale-105 transition-all duration-500 text-white text-center rounded-lg text-md font-medium">Remove Extra Spaces</button>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                    <h1 className="text-2xl font-bold">Text Summary</h1>
                    <div className="flex flex-col">
                        <p className="text-md font-medium">Words - {content.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>                        
                        <p className="text-md font-medium">Characters - { content.length }</p>
                        <p className="text-md font-medium">Read Minutes - {0.008 * content.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                    <h1 className="text-2xl font-bold">Preview</h1>
                    <div className="">
                        <p className="text-md font-medium">
                            {content || "Nothing to Show"}
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[99%]">
                <Footer />
            </div>
        </section>
    )
}

export default HomePage;