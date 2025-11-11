import "../styles/header.css"
import { FaUserCircle } from "react-icons/fa";

export function Header()
{
    return(
    <header className="font-sans text-white fixed top-0 left-0 w-full h-20 bg-white/30 backdrop-blur-lg z-50 flex  items-center justify-center">
        <div className="">
            <p  className="text-gray-800 font-serif absolute text-3xl top-1 left-5 w-32 h-auto object-contain">Ferienhaus Vårbacke</p>
        </div>
    
        
        <nav className=" font-serif text-xl text-gray-800 flex flex-col justify-baseline  items-center text-lg">
            
            <div className="flex-row space-x-10">
                <a href="/" className="mirror">Home</a>
                <a href="#uberHaus" className="mirror">Über das Haus</a>
                

            </div>

            <div className="flex-row space-x-5">
                <a href="#umgebung" className="mirror" >Umgebung</a>

                <a href="#anreise" className="mirror" >Anreise</a>
                <a href="#gastebuch" className="mirror" >Gästebuch</a>

                <a href="#uberUns" className="mirror" >Über Uns</a>
            </div>
            
                           
        </nav>

        <div className=" absolute right-5 flex items-center space-x-6 text-black">
            <button className="btn">Hier Buchen!</button>
            
        </div>
        
    </header>

        
    )
}