import "../styles/welcome.css"
import "aos/dist/aos.css";
import { LuMapPin } from "react-icons/lu";
import { useState } from "react";

type DestinationCardProps = 
{
    image: string;
    header: string;
    description: string;
    link: string;
}

export function DestinationCard({image, header, description, link}:DestinationCardProps)
{
    const [expanded, setExpanded] = useState(false);

    const MAX_LENGTH = 300; // characters before expand is needed
    const shouldShowExpand = description.length > MAX_LENGTH;
    return(
        <div className={`p-5 gap-5 w-150 rounded-xl border border-1px border-gray-200 shadow-lg flex justify-between items-center flex-col bg-white `}>
                <div>
                    <img
                        src={image}
                        alt="Source not found"
                        className="float-left w-40 h-auto mr-4 mb-0 rounded-lg"
                    />

                    <h1 className="text-4xl font-serif">{header}</h1>

                    <p className={`text-[#4a4a4a] font-serif leading-relaxed whitespace-pre-line transition-all duration-300 overflow-hidden  ${
    expanded ? "line-clamp-none max-h-[1000px]" : "line-clamp-5 max-h-[200px]"}`}>{description}</p>
                </div>
                
                <a className="bg-[#eae6dc] border-2 border-[#cfc8b5] rounded-lg shadow-md w-full flex items-center justify-center hover-button mt-auto" href={link}>
                    <LuMapPin size={30} />
                </a>

            {shouldShowExpand && (
                <button
                onClick={() => setExpanded(!expanded)}
                className="mt-2 text-blue-600 underline text-sm self-start"
                >
                {expanded ? "Weniger anzeigen" : "Mehr anzeigen"}
                </button>
            )}

            </div>
        
    )
}