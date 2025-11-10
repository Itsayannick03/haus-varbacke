import { InfoCard } from "./infoCard";
import { ImageCard } from "./ImageCard";
import { AiOutlineEuro } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";


export function House()
{
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

           <div className="w-full h-full px-10 ">
            <ImageCard
                image="haus1.jpg"
                headText="Haus"
                subtext="asd"
                
            />
            <ImageCard
                image="haus1.jpg"
                headText="Haus"
                subtext="asd"
                reverse
            />
            
           </div>
        </div>
    )
}