import "../styles/welcome.css"
import "aos/dist/aos.css";
import { LuMapPin } from "react-icons/lu";
import {emil} from "../usables/links"
import { useRef } from "react";
import { handlarn, wald, kinder, fussbalTennis, fussball, Smalspåret } from "~/strings";
import { ImageCard } from "./ImageCard";

export function Umgebung()
{
    const lokalesRef = useRef<HTMLDivElement>(null);
    
    return(
    <div>
        <div className="pt-25 pb-5 bg-gradient-to-b from-[#f8f5ef] to-whiteflex flex-col">

            <div className="fixed bottom-5 right-5 p-2  flex flex-col w-50 gap-5">
                <button className="border rounded-xl w-full p-1 shadow-lg" onClick={() => lokalesRef.current?.scrollIntoView({ behavior: "smooth" })}>Lokales</button>
                
            </div>
            
            <section ref={lokalesRef} className="flex flex-col items-center gap-10  scroll-mt-25">
                <h1 className="font-serif text-5xl">Totebo und Umgebung</h1>

                <div className="flex flex-col gap-15 pb-5 border-b">

                    <div className="flex flex-wrap items-start gap-10">
                        <ImageCard 
                            image="handlarn.jpg"
                            headText="Lanthandel"
                            subtext={handlarn}
                            btn={true}
                            link={emil}
                            reverse={false}
                        />
                        <ImageCard
                            image="bool.jpg"
                            headText="Spielplatz &amp; Boule-Bahn"
                            subtext={kinder}
                            btn={true}
                            link={emil}
                            reverse={true}
                        />
                        <ImageCard
                            image="tennis.JPG"
                            headText="Fußballtennisplatz"
                            subtext={fussbalTennis}
                            btn={true}
                            link={emil}
                            reverse={false}
                        />
                    </div>

                    <div className="flex flex-wrap gap-10 items-start">
                        <ImageCard
                            image="tennis.JPG"
                            headText="Fußballtennisplatz"
                            subtext={fussbalTennis}
                            btn={true}
                            link={emil}
                            reverse={true}
                        />
                        <ImageCard
                            image="wald.jpg"
                            headText="Wälder runt um totebo"
                            subtext={wald}
                            btn={true}
                            link={emil}
                            reverse={false}
                        />
                        <ImageCard
                            image="smalspåret.jpg"
                            headText="Smalspåret"
                            subtext={Smalspåret}
                            btn={true}
                            link={emil}
                            reverse={true}
                        />
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}
