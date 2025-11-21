import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LuMapPin } from "react-icons/lu";
import Lenis from "@studio-freight/lenis";

type ImageCardProps = {
    image: string;
    headText: string;
    subtext: string;
    link?: string;
    reverse?: boolean;
    btn?:boolean
    noFade?:boolean
}

export function ImageCard({ image, headText, subtext, reverse, btn, link, noFade }: ImageCardProps) {
  
 const [expanded, setExpanded] = useState(false);
 const test = 0;

 const textLen = subtext?.split("\n").length;
 const shouldShowExpand = textLen >= 4;

 useEffect(() => {
     const texts = gsap.utils.toArray(".fade-text");
     texts.forEach((el: any) => {
       gsap.fromTo(
       el,
       { autoAlpha: 0, x: -200 },   // start left
   {
     autoAlpha: 1,
     x: 0,                      // end at normal position
     duration: 1,
     ease: "power3.out",
     scrollTrigger: {
       trigger: el,
       start: "top 90%"
       ,        // adjust if needed
       end: "top 30%",
 
       scrub: 2,
       markers: false
     }}
       
     )
     })
   }, [])
 
   useEffect(() => {
     const revTexts = gsap.utils.toArray(".fade-text-reverse");
     revTexts.forEach((el: any) => {
       gsap.fromTo(
       el,
       { autoAlpha: 0, x: 200 },   // start left
   {
     autoAlpha: 1,
     x: 0,                      // end at normal position
     duration: 1,
     ease: "power3.out",
     scrollTrigger: {
       trigger: el,
       start: "top 70%",        // adjust if needed
          end: "top 10%",
       scrub: 2,
       markers: false
     }}
       
     )
     })
   }, [])
 
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

  
  
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-10 px-12 py-10  ${ [
  reverse && "md:flex-row-reverse",
  !noFade && (reverse ? "fade-text-reverse fade" : "fade-text")
].filter(Boolean).join(" ")
        }
        
        `}
    >
    <div className="rounded-3xl overflow-hidden box">
  <img src={image} alt="" className="w-full h-full object-cover" />
</div>
      <div className="md:w-1/2 text-[#4a4a4a] font-serif ">
        <h3 className="text-3xl  font-semibold mb-4 relative right-0">{headText}</h3>
        <div className="flex flex-row  ">
          {subtext && <p className={`transition-all leading-relaxed overflow-hidden duration-1000 whitespace-pre-line ${expanded ? "line-clamp-none max-h-[1000px]" : "line-clamp-5 max-h-[200px]"}`}>{subtext}</p>}
          {shouldShowExpand && <button className="flex flex-col  w-50 justify-end mb-2 mx-5 text-blue-600 underline text-sm"  onClick={() => setExpanded(!expanded)}>{expanded ? "Weniger Anzeigen" : "Mehr Anzeigen"}</button>}
        </div>
        
        {btn && <a className="bg-[#eae6dc] border-2 border-[#cfc8b5] rounded-xl shadow-md w-full flex items-center justify-center hover-button mt-auto" href={link}> <LuMapPin size={30} /></a>}
      </div>
</div>
  );
}
