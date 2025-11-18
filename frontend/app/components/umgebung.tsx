import "../styles/welcome.css"
import "aos/dist/aos.css";
import { LuMapPin } from "react-icons/lu";
import { DestinationCard } from "./destinationCard";
import {emil} from "../usables/links"
import { useRef } from "react";
import { handlarn, wald, kinder, fussbalTennis } from "~/strings";



export function Umgebung()
{
    const lokalesRef = useRef<HTMLDivElement>(null);
    
    return(
    <div>
        <div className="pt-25 pb-5 gap-5 bg-gradient-to-b from-[#f8f5ef] to-whiteflex flex-col">

            <div className="fixed bottom-5 right-5 p-2  flex flex-col w-50 gap-5">
                <button className="border rounded-xl w-full p-1 shadow-lg" onClick={() => lokalesRef.current?.scrollIntoView({ behavior: "smooth" })}>Lokales</button>
                
            </div>
            
            <section ref={lokalesRef} className="flex flex-col items-center gap-10 scroll-mt-25">
                <h1 className="font-serif text-5xl">Totebo und Umgebung</h1>
                    <DestinationCard
                        image="handlarn.jpg"
                        header="Lanthandel"
                        description={handlarn}
                        link={emil}
                    />
                    <DestinationCard
                        image="bool.jpg"
                        header="Kinderspielplatz & Boule-Bahn"
                        description={kinder}
                        link={emil}
                    />
                    <DestinationCard
                        image="tennis.JPG"
                        header="Fußballtennisplatz"
                        description={fussbalTennis}
                        link={emil}
                    />
                    <DestinationCard
                        image="tennis.JPG"
                        header="Fußballtennisplatz"
                        description="Direkt hinter der Boule-Bahn findet ihr einen Fußballtennisplatz, der sich perfekt für schnelle, sportliche Matches eignet."
                        link={emil}
                    />
                    <DestinationCard
                        image="wald.jpg"
                        header="Rasenplatz an der alten Schule"
                        description="Auf dem Gelände der alten Schule gibt es einen großen Rasenplatz zum freien Fußballspielen."
                        link={emil}
                    />

                    
            </section>

            
            
            
                
            
            
        
            
            

                
        </div>
    </div>
    )
}