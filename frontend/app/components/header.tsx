import "../styles/header.css"
import { FaUserCircle } from "react-icons/fa";

export function Header()
{
    return(
    <header className="font-sans fixed top-0 left-0 w-full h-20 
                       bg-white/30 backdrop-blur-lg z-50 
                       flex items-center px-6">
        
        {/* Left section — LOGO */}
        <div className="flex-shrink-0">
            <img 
                className="w-auto h-20  object-contain" 
                src="logo.png" 
                alt="Ferienhaus Vårbacke Logo" 
            />
        </div>

        {/* Center section — NAVIGATION */}
        <nav className="flex-1 font-serif text-gray-800 text-lg flex flex-col items-center">
            <div className="flex space-x-10">
                <a href="/" className="mirror">Home</a>
                <a href="#uberHaus" className="mirror">Über das Haus</a>
            </div>

            <div className="flex space-x-5">
                <a href="#umgebung" className="mirror">Umgebung</a>
                <a href="#anreise" className="mirror">Anreise</a>
                <a href="#gastebuch" className="mirror">Gästebuch</a>
                <a href="#uberUns" className="mirror">Über Uns</a>
            </div>
        </nav>

        {/* Right section — Button */}
        <div className="flex-shrink-0">
            <button className="btn text-black">Hier Buchen!</button>
        </div>

    </header>
    )
}
