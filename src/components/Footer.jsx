import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex flex-col gap-4 p-3 bg-gray-200 rounded-lg items-center justify-between md:flex-row">
            <div>
                <ul className="flex items-center justify-center gap-3 sm:gap-10">
                    <li className="hover:text-cyan-500 hover:scale-110 transition-all">
                        <Link to="/">Home</Link>
                    </li>                    
                    <li className="hover:text-cyan-500 hover:scale-110 transition-all">
                        <Link to="/about">About</Link>
                    </li>                    
                    <li className="hover:text-cyan-500 hover:scale-110 transition-all">
                        <Link to="/projects">Projects</Link>
                    </li>                    
                    <li className="hover:text-cyan-500 hover:scale-110 transition-all">
                        <Link to="/articles">Articles</Link>
                    </li>                    
                    <li className="hover:text-cyan-500 hover:scale-110 transition-all">
                        <Link to="/contact">Contact</Link>
                    </li>                    
                </ul>
            </div>
            <div className="flex items-center justify-center text-center">
                <p>&copy; 2024 Niraj Kumar Jha. All Rights Reserved.</p>
            </div>
        </div>
    )
}  

export default Footer;