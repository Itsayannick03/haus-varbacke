import "../styles/welcome.css"
import { useEffect, useState } from "react";

type InfoCardProps = {
    title: string;
    description: string;
    information?: string;
    icon?: React.ReactNode;
    expanded:boolean;
    onClick?: () => void;
    
}

export function InfoCard({title, description, icon, information, expanded, onClick}: InfoCardProps)
{
   

    return(
    <div className={`p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition text-center font-serif text-[#4a4a4a] ${expanded ? "max-w-100" : "max-w-50"}`}>
      <div className="flex justify-center mb-3 text-3xl">{icon}</div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      {expanded ? ( <p>{information}</p>) : ( <p>{description}</p>)}
     
      <button type="button"   className="border-1 translateY hover:shadow-[0_5px_10px_rgba(0,0,0,0.2)] #000000] rounded-md  border-gray-300 mt-4 p-1" onClick={onClick} >{expanded ? "Weniger zeigen" : "Mehr erfahren"}</button>
    </div>
    )
}