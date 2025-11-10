import { InfoCard } from "./infoCard";
import { ImageCard } from "./ImageCard";
import { AiOutlineEuro } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export function House()
{
    useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 2),
      smoothWheel: true,
    });

    // GSAP integration
    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update(); // ✅ keeps GSAP synced
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Optional: if you want GSAP to use Lenis’s scroller
    

    // Refresh ScrollTrigger on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
      
    };
  }, []);
    
    return(
        <div className="pt-20 flex flex-col gap-8 items-center justify-center bg-gradient-to-b from-[#f8f5ef] to-white text-[#4a4a4a] font-serif">
           <h1 className="font-serif text-4xl ">Über das Haus</h1>
           <div className="flex flex-row justify-between gap-5">
                <InfoCard
                    title="Preise"
                    description="Erfahren Sie mehr über unsere Saisonpreise"
                    buttonText="123"
                    icon={<AiOutlineEuro />}
                />
                <InfoCard
                    icon={<BsHandbag />}
                    title="Ausstattungen"
                    description="Entdecken Sie, was unser Haus bietet"
                    buttonText="Mehr erfahren"
                />
                <InfoCard
                    icon={<IoDocumentTextOutline />}
                    title="Hausregeln"
                    description="Lesen Sie gerne unsere Hausregeln durch."
                    buttonText="Mehr erfahren"
                />
                <InfoCard
                    icon={<IoCalendarNumberOutline />}
                    title="Buchung"
                    description="Alle Informationen zu Buchung und Verfügbarkeit."
                    buttonText="Mehr erfahren"
                />
                
           </div>

           <div className="w-full h-full px-10 whitespace-pre-line fade-text">
            <ImageCard
                image="haus1.jpg"
                headText="Willkommen im Ferienhaus Vårbacke"
                subtext={"Hier seht ihr das Haus von der Einfahrt aus mit Blick auf die Südseite. \n Solltet ihr im Spätsommer zu uns kommen, könnt ihr euch natürlich gerne soviele Äpfel pflücken, wie ihr essen könnt."}
                
            />
            <ImageCard
                image="sitzplats.jpg"
                headText="Gemütlicher Sitzplatz unter freiem Himmel"
                subtext={"Hier seht ihr den Sitzplatz mit Tisch und 4 Stühlen aufgenommen von der obersten Terrassenebene mit Blick auf die Südseite des Hauses. Bei Bedarf kann der im Haus vorhandene Sonnenschirm aufgespannt werden. Hier oben lässt es sich prima grillen und entspannen."}
                reverse
            />
            
           </div>
        </div>
    )
}