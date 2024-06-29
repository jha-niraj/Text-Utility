import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../components/ThemeContext";

const utilities = [
    {
        description: "Daily utilities related to text like copying text, converting to Uppercase, lowercase, removing whitespaces etc...",
        path: "textutils",
        to: "Text Utils"
    },
    {
        description: "Extract the text from your image at ease... Then you can also copy and paste it.",
        path: "imagetotext",
        to: "Image to Text"
    }
]

export default () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <main className={`flex flex-col justify-between h-screen bg-${theme} text-${theme === "black" ? "white" : "black"}`}>
            <Navbar />
            ome
            <div className="flex items-center justify-around h-full flex-col p-5 gap-5">
                <div className="text-center p-2 flex flex-col gap-2">
                    <h1 className="text-4xl font-semibold">Welcome to Text Magic.</h1>
                    <h1 className="text-xl font-mini">Your one stop to daily utilities</h1>
                </div>
                <div className="h-full flex items-center flex-col gap-10 justify-center w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            utilities.map((utility, index) => {
                                return (
                                    <Card key={index} description={utility.description} path={utility.path} to={utility.to} theme={theme} />
                                )
                            })
                        }
                    </div>
                    <div>
                        <button className="text-center text-xl font-medium bg-green-200 rounded-lg p-2">More utilities coming soon...</button>
                    </div>
                </div>
            </div>
            <hr />
            <Footer />
        </main>
    )
}

const Card = ({ description, path, to, theme }) => {
    const navigate = useNavigate();

    return (
        <section className="shadow-2xl p-3 w-full flex flex-col gap-4 rounded-lg items-center border-2 border-gray-200 justify-between">
            <div>
                <p className="w-[80%] m-auto text-md font-medium text-center">{description}</p>
            </div>
            <div>
                <button onClick={() => navigate(`/${path}`)} className={`${theme === "black" ? "bg-white text-black" : "bg-black text-white"} hover:bg-slate-700 font-bold py-2 px-4 rounded`}>{to}</button>
            </div>
        </section>
    )
}