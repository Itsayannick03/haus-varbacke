import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LuMapPin } from "react-icons/lu";

type ImageCardProps = {
    image: string;
    headText: string;
    subtext: string;
    link?: string;
    reverse?: boolean;
    btn?:boolean
}

export function ImageCard({ image, headText, subtext, reverse, btn, link }: ImageCardProps) {
  
 const [expanded, setExpanded] = useState(false);

 const textLen = subtext?.split("\n").length;
 const shouldShowExpand = textLen >= 5;
  
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-10 px-12 py-10  ${
        reverse ? "md:flex-row-reverse fade-text-reverse" : "fade-text"
      }`}
    >
      <div className="rounded-3xl overflow-hidden box">
  <img src={image} alt="" className="w-full h-full object-cover" />
</div>
      <div className="md:w-1/2 text-[#4a4a4a] font-serif ">
        <h3 className="text-3xl  font-semibold mb-4 relative right-0">{headText}</h3>
        <div className="flex flex-row  ">
          {subtext && <p className={`transition-all duration-200 ${expanded ? "line-clamp-none max-h-[1000px]" : "line-clamp-5 max-h-[200px]"}`}>{subtext}</p>}
          {shouldShowExpand && <button className="flex flex-col justify-end mt-2 text-blue-600 underline text-sm"  onClick={() => setExpanded(!expanded)}>{expanded ? "Weniger Anzeigen" : "Mehr Anzeigen"}</button>}
        </div>
        
        {btn && <a className="bg-[#eae6dc] border-2 border-[#cfc8b5] rounded-xl shadow-md w-full flex items-center justify-center hover-button mt-auto" href={link}> <LuMapPin size={30} /></a>}
      </div>
</div>
  );
}
