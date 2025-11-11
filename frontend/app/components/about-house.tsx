import { InfoCard } from "./infoCard";
import { ImageCard } from "./ImageCard";
import { AiOutlineEuro } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { useEffect, useState } from "react";

import {preise, extras} from "../strings"


gsap.registerPlugin(ScrollTrigger);

export function House()
{
    const [priseExpanded, setPrise] = useState(false);
    const [ausExpanded, setAus] = useState(false);
    const [regelExpanded, setRegel] = useState(false);
    
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
           <div className="flex flex-row items-start justify-between gap-5">
                <InfoCard
                    title="Preise"
                    description="Erfahren Sie mehr über unsere Saisonpreise"
                    icon={<AiOutlineEuro />}
                    information={preise}
                    expanded = {priseExpanded}
                    onClick={() => setPrise(!priseExpanded)}
                   
                />
                <InfoCard
                    icon={<BsHandbag />}
                    title="Ausstattungen"
                    description="Entdecken Sie, was unser Haus bietet"
                    information={extras}
                    expanded = {ausExpanded}
                    onClick={() => setAus(!ausExpanded)}
                   
                />
                <InfoCard
                    icon={<IoDocumentTextOutline />}
                    title="Hausregeln"
                    description="Lesen Sie gerne unsere Hausregeln durch."
                    expanded={regelExpanded}
                    
                />
                <InfoCard
                    icon={<IoCalendarNumberOutline />}
                    title="Buchung"
                    description="Alle Informationen zu Buchung und Verfügbarkeit."
                    expanded={false}
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
                subtext={"Direkt unterhalb des oberen Sitzplatzes erstreckt sich der grüne Gartenbereich mit seiner natürlichen Bepflanzung und den kleinen Ebenen. Hier lässt sich wunderbar entspannen, während man den Blick über den Garten und die umliegenden Bäume schweifen lässt. Die verschiedenen Terrassenebenen schaffen eine lebendige, zugleich ruhige Atmosphäre, die den besonderen Charme des Gartens ausmacht."}
                reverse
            />
            <ImageCard
                image="garten1.jpg"
                headText="Blick in den Garten nach Süden"
                subtext={"Auf diesem Bild seht ihr den Garten in südlicher Blickrichtung. Das Grundstück ist liebevoll mit Sträuchern, Rosen, Büschen und Bäumen bewachsen und bietet zu jeder Tageszeit ein angenehmes, natürliches Ambiente. Zwischen Haus und Sitzplätzen entsteht so ein harmonischer Übergang zwischen Wohnbereich und Natur."}
                
            />
            <ImageCard
                image="chair.jpg"
                headText="Gartenbereich unterhalb der oberen Terrasse"
                subtext={"Hier seht ihr den Sitzplatz mit Tisch und 4 Stühlen aufgenommen von der obersten Terrassenebene mit Blick auf die Südseite des Hauses. Bei Bedarf kann der im Haus vorhandene Sonnenschirm aufgespannt werden. Hier oben lässt es sich prima grillen und entspannen."}
                reverse
            />
            <ImageCard
                image="balkon1.jpg"
                headText="Der Balkon – Frühstück mit Ausblick"
                subtext="Das Haus verfügt über einen Balkon mit herrlichem Blick ins Grüne. Hier stehen ein kleiner Bistro-Tisch und zwei gemütliche Stühle bereit – ideal, um den Tag bei einer guten Tasse Kaffee und einem leckeren Schweden-Frühstück ganz entspannt zu beginnen."
                
            />
            <ImageCard
                image="FlurObenFront.jpg"
                headText="Heller Wohnbereich mit Zugang zum Balkon"
                subtext="Hier seht ihr den Flur in der ersten Etage mit der Tür zum Balkon und zwei großen Fenstern, die viel Tageslicht hereinlassen. Der geölte Holzdielenboden unterstreicht die warme und freundliche Atmosphäre des Hauses."
                reverse
            />
            <ImageCard
                image="wohzimmer1.jpg"
                headText="Wohnzimmer mitt Sofa und Vernseher"
                subtext="Das Wohnzimmer ist mit einem Sofa ausgestattet, das sich im Handumdrehen zu einem Doppelbett ausziehen lässt. Außerdem stehen ein Fernseher mit SAT-Anschluss (deutsches Fernsehen), ein DVD-Player und eine Auswahl an Gesellschaftsspielen zur Verfügung – perfekt für gemütliche Abende im Haus."
            />
            <ImageCard
                image="wohnzimmer2.jpg"
                headText="Gemütliche Leseecke im Wohnzimmer"
                subtext="Hier seht ihr die Leseecke im Wohnzimmer mit bequemen Lesesessel, Fußhocker und Fernseher. Für alle Leseratten gibt es eine große Auswahl an Romanen, Krimis und Zeitschriften. Ihr könnt Bücher gerne tauschen – lasst einfach euer altes Buch da und nehmt euch ein neues aus unserem 'Büchertausch-Regal' mit. So kommt jeder zu neuer Lektüre und spannenden Geschichten."
                reverse
                
            />
            <ImageCard
                image="schlafzimmer1.jpg"
                headText="Helles Schlafzimmer mit Blick ins Grüne"
                subtext="Hier seht ihr das erste Schlafzimmer mit gemütlichen Betten und einer Kommode. Vom Zimmer aus gelangt ihr außerdem in eine begehbare Kammer, ideal für Kleidung oder Gepäck. Gegen eine geringe Gebühr bieten wir einen Bettwäsche- und Handtuchservice an – so müsst ihr weniger mitbringen und habt mehr Platz im Auto. Sprecht uns bei Interesse gerne darauf an."
            />
            <ImageCard
               reverse
               image="br.jpg"
                headText="Zweites Schlafzimmer mit Doppelhochbett"
                subtext="Das zweite Schlafzimmer ist mit einem praktischen Doppelhochbett sowie einem Fernseher mit DVD-Player ausgestattet. Auch hier gibt es Zugang zu einer kleinen begehbaren Kammer, in der ihr Kleidung oder Gepäck bequem verstauen könnt. Der helle Raum mit seinen warmen Farbtönen wirkt einladend und gemütlich."
            />
            <ImageCard
                image="badezimmer.jpg"
                headText="Helles Badezimmer mit Dusche"
                subtext="Das Badezimmer ist mit einer praktischen Duschecke, einem Waschbecken und einem WC ausgestattet. Helle Farben und liebevolle Details sorgen für eine freundliche Atmosphäre und einen angenehmen Start in den Tag."
            />
            <ImageCard
                reverse
                image="kueche.jpg"
                headText="Helle Küche mit gemütlichem Essbereich"
                subtext="Die Küche ist mit einem Esstisch und vier Stühlen, einem Induktionskochfeld mit Backofen sowie einer Kühl-/Gefrierkombination ausgestattet. Natürlich stehen auch eine Mikrowelle, Kaffeemaschine und sämtliches Küchenzubehör zur Verfügung – ideal für gemeinsame Mahlzeiten in entspannter Atmosphäre."
            />




            <ImageCard
                image="gunga.jpg"
                headText="Schaukel im Garten"
                subtext="Im terrassenförmig angelegten Garten lädt die Schaukel zum Spielen und Entspannen ein mit Blick auf viel Grün und Sonne."
            />
            <ImageCard
                image="ring.jpg"
                headText="Turnringe im Apfelbaum"
                subtext="Zwischen den Ästen bieten die Turnringe Bewegung und Spaß ideal für kleine und große Akrobaten."
            />
            <ImageCard
                
                image="leiter.jpg"
                headText="Strickleiter im Grünen"
                subtext="Neben Schaukel und Turnringen sorgt auch die Strickleiter für Abwechslung.
Für ausreichend Spielmöglichkeiten ist also gesorgt!"
            />

            <ImageCard
              reverse
                image="bike.jpg"
                headText="Fahräder für gross und klein."
                subtext="Erwachsenen- und zahlreiche Kinderfahrräder unterschiedlicher Grössen samt Lauflernrad, Roller und Inline-Skates sind im Haus vorhanden und können von euch kostenlos mitbenutzt werden."
            />
             <ImageCard
                image="boat.JPG"
                headText="Das hier ist unser Ruderboot 'Luna'"
                subtext="welches ihr gerne kostenlos mitbenutzen dürft, um damit einen Bootsausflug auf dem Nässjön zu unternehmen. Mit einer Länge von 4,30m bietet es ausreichend Platz für 4 Erwachsene. Kinderschwimmweste ist ebenfalls vorhanden"
            />
            
           
            
            
           </div>
        </div>
    )
}