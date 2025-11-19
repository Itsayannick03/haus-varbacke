import "../styles/welcome.css"
import "aos/dist/aos.css";
import { LuMapPin } from "react-icons/lu";

type DestinationCardProps = 
{
    image: string;
    header: string;
    description: string;
    link: string;
}

export function DestinationCard({image, header, description, link}:DestinationCardProps)
{
    return(
        <div className={`p-5 gap-5 w-150 rounded-xl border border-1px border-gray-200 shadow-lg flex justify-between items-center flex-col bg-white `}>
                <div>
                    <img
                        src={image}
                        alt="Source not found"
                        className="float-left w-40 h-auto mr-4 mb-0 rounded-lg"
                    />

                    <h1 className="text-4xl font-serif">{header}</h1>

                    <p className="text-[#4a4a4a] font-serif leading-relaxed whitespace-pre-line ">{description}</p>
                </div>
                
                <a className="bg-[#eae6dc] border-2 border-[#cfc8b5] rounded-lg shadow-md w-full flex items-center justify-center hover-button mt-auto" href={link}>
                    <LuMapPin size={30} />
                </a>

            </div>
    )
}