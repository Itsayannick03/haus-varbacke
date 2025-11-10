import { FaPhone } from "react-icons/fa";
import { FaGlobeEurope } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="text-[#4a4a4a] drop-shadow-xl flex justify-center items-center border-t bg-gradient-to-b from-white to-[#f8f5ef] text-[#4a4a4a] w-full py-10 mt-auto flex flex-col">
      <div className="font-serif font-medium flex w-10/12 justify-around">
        <div className="flex text-lg flex-col gap-2">
          <p className="text-3xl border-dotted border-b w-full mb-2">Kontakt</p>
          
          <div className="flex  flex-row gap-2 items-center">
            <p>Andreas und Katja Winkler</p>
        
          </div>
          
          <div className="flex flex-row gap-2 items-center">
            
            <p>Rutsbergsgatan 5</p>
           
            
          </div>
          <div className="flex flex-row gap-2 items-center">
            <p>59338 Västervik / Schweden</p>
            <FaGlobeEurope />
          </div>
          
          <div className="flex flex-row gap-2 items-center">
            
            <p>0046-(0)-730-740-496</p>
            <FaPhone />
          </div>
          
          <div className="flex flex-row gap-2 items-center">
            <p>andy.winkler@gmx.de</p>
            <IoIosMail size={20} />
          </div>
          
          
          
        </div>

        <div className="flex items-center">
            <h1 className="text-5xl">Ferienhaus Vårbacke</h1>
        </div>

        <div className="flex text-lg flex-col gap-2">
          <p className="text-3xl border-dotted border-b w-full mb-2">Finde uns</p>
          <div className="flex flex-row gap-1 items-center">
            <FaFacebookF size={23}/> 
            <a data-text="Facebook" className="text-lg  mirror" href="https://www.facebook.com/Varbacke">Facebook</a>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <FaHouse />
            <a className="mirror text-lg" href="https://www.ferienhausmiete.de/57321.htm">Ferien Haus Miete</a>
            
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FaGlobeEurope />
            <a className="mirror " href="https://haus-varbacke.se/"> www.haus-varbacke.se</a>
           
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FaGlobeEurope />
            <a className="mirror " href="https://haus-varbacke.se/haus-hoeganaes/"> www.haus-hoeganaes.se</a>
           
          </div>
        </div>

        

        
      </div>
      <div className="flex flex-col justify-center items-center text-sm text-gray-600">
          <p>© 2024 Ferienhaus Vårbacke</p>
        </div>
    </footer>
  );
}
