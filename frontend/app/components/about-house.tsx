import { InfoCard } from "./infoCard";
import { AiOutlineEuro } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
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
                    title="Ausstattungen"
                    description="Entdecken Sie, was unser Haus bietet"
                    buttonText="Mehr erfahren"
                    icon={<BsHandbag />}
                />
                
           </div>
        </div>
    )
}