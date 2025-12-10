import "../styles/welcome.css"
import "aos/dist/aos.css";
import { LuMapPin } from "react-icons/lu";
import {emil} from "../usables/links"
import { useEffect, useRef } from "react";
import { handlarn, wald, kinder, fussbalTennis, fussball, Smalspåret, gård, see, älg, västervik, skärgård, gränsö, Vimmerby, näs, värld, buller, katthult } from "~/strings";
import { ImageCard } from "./ImageCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'









gsap.registerPlugin(ScrollTrigger);

export function Umgebung()
{
    const lokalesRef = useRef<HTMLDivElement>(null);
    const ausflügeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sections = gsap.utils.toArray(".scroll-section")
        sections.forEach((el : any) => {
            gsap.fromTo(el,
       { autoAlpha: 0, y: 200 },   // start left
   {
     autoAlpha: 1,
     y: 0,                      // end at normal position
     duration: 1,
     ease: "power3.out",
     scrollTrigger: {
       trigger: el,
       start: "top 100%",        // adjust if needed
          end: "top 10%",
       scrub: 2,
       markers: false
     }})
        })
    }, [])
    

    
    return(
    <div>
        <div className="pt-25 pb-5 bg-gradient-to-b from-[#f8f5ef] to-white flex flex-col">

            <div className="fixed bottom-5 right-5 p-2  flex flex-col w-50  gap-5 z-100 ">
                <button className="border rounded-xl w-full p-1 bg-white hover-button " onClick={() => lokalesRef.current?.scrollIntoView({ behavior: "smooth" })}>Lokales</button>
                <button className="border rounded-xl w-full p-1 bg-white hover-button" onClick={() => ausflügeRef.current?.scrollIntoView({ behavior: "smooth" })}>Ausflug Ziele</button>

                
            </div>
            
            <section ref={lokalesRef} className="flex flex-col items-center gap-10  pb-10 scroll-mt-25 ">
                <h1 className="font-serif text-5xl">Totebo und Umgebung</h1>

                <div className="flex flex-col gap-5 pb-5 border-b rounded-lg shadow-lg">

                    <div className="flex flex-wrap items-start fade">
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
                            noFade={true}
                        />
                        <ImageCard
                            image="tennis.JPG"
                            headText="Fußballtennisplatz"
                            subtext={fussbalTennis}
                            btn={true}
                            link={emil}
                            reverse={false}
                        />
                
                        <ImageCard
                            image="fussball.JPG"
                            headText="Fußballsplatz"
                            subtext={fussball}
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
                        
                        <ImageCard
                            image="totebo_gard.jpg"
                            headText="Totebo Gård"
                            subtext={gård}
                            btn={true}
                            link={emil}
                            reverse={false}
                        />

                        <ImageCard
                            image="see.jpg"
                            headText="Badesee Nässjön"
                            subtext={see}
                            btn={true}
                            link={emil}
                            reverse={true}
                        />
                        <ImageCard
                            image="boat.JPG"
                            headText="Unser bot Luna"
                            subtext='Hier am Nässjön liegt auch unser 4,30m langes Ruderboot "Luna", welches zusammen mit unserem "on-top" Kajak von unseren Gästen kostenlos mitbenutzt werden kann.'
                            btn={true}
                            link={emil}
                            reverse={false}
                        />
                    </div>
                </div>
            </section>
                
            <section ref={ausflügeRef} className="flex flex-col items-center gap-10  scroll-mt-25 scroll-section">
                <h1 className="font-serif text-5xl">Ausflug Ziele</h1>
                <ImageCard
                    image="alg.jpg"
                    headText="Virum Elchpark"
                    subtext={älg}
                    btn={true}
                    link={emil}
                    reverse={false}
                />

                <ImageCard
                    image="skärgård.jpg"
                    headText="Västerviks Schärengarten"
                    subtext={skärgård}
                    btn={true}
                    link={emil}
                    reverse={true}
                />

                <ImageCard
                    image="gränsö.jpg"
                    headText="Naturreservat Gränsö"
                    subtext={gränsö}
                    btn={true}
                    link={emil}
                    reverse={false}
                />

                <ImageCard
                    image="vimmerby.jpg"
                    headText="Vimmerby"
                    subtext={Vimmerby}
                    btn={true}
                    link={emil}
                    reverse={true}
                />

                <ImageCard
                    image="näs.jpg"
                    headText="Astrid Lindgrens Näs"
                    subtext={näs}
                    btn={true}
                    link={emil}
                    reverse={false}
                />

                <ImageCard
                    image="villaKunter.jpg"
                    headText="Astrid Lindgrens Värld"
                    subtext={värld}
                    btn={true}
                    link={emil}
                    reverse={true}
                />

                <ImageCard
                    image="Bullerbü.jpg"
                    headText="Bullerbyn"
                    subtext={buller}
                    btn={true}
                    link={emil}
                    reverse={false}
                />

                <ImageCard
                    image="katthult.jpg"
                    headText="Katthult"
                    subtext={katthult}
                    btn={true}
                    link={emil}
                    reverse={true}
                />
               

            </section>
        </div>
    </div>
    )
}
