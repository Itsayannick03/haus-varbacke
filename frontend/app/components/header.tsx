import "../styles/header.css"

export function Header()
{
    return(
    <header className="font-sans fixed top-0 left-0 w-full h-20 bg-white/30 backdrop-blur-lg z-50 flex items-center justify-around">
        <div className="">
        <p  className="font-serif absolute text-xl top-3 left-5 w-32 h-auto object-contain">Ferienhaus Vårbacke</p>
        </div>
    

        <nav className="text-black space-x-25 text-lg">
            <a href="#home">Home</a>
            <a href="#about" className="hover:text-gray-600">About</a>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
        </nav>

        <button className="btn">Hier Buchen!</button>
    </header>

        
    )
}