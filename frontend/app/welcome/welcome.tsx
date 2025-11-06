import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import "../styles/welcome.css"
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export function Welcome() {
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const textRef3 = useRef<HTMLDivElement>(null);

  const imgRef2 = useRef<HTMLImageElement>(null);
  const imgRef3 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const texts = gsap.utils.toArray(".fade-text");
    const images = gsap.utils.toArray(".fade-image")

    gsap.fromTo(
      textRef1.current,
      {
        autoAlpha: 0,     // start fully invisible
        y: 30,            // slight motion from below
      },
      {
        autoAlpha: 1,     // full visibility
        y: 0,             // back to normal position
        duration: 2.5,    // smooth timing
        ease: "power2.out", // nice easing curve
      }
    );


    texts.forEach((el: any) => {
      gsap.fromTo(
      el,
      {autoAlpha: 0, y: 50},
      {
        autoAlpha: 1, y:0,
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          end: "top 10%",
          scrub: 1.5,
          markers: false
        },
      }
    )
    })

 
    images.forEach((el: any) => {
      gsap.fromTo(
      el,
      {autoAlpha: 0},
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 30%",
          scrub: 1.5,
          markers: false
        },
      }
    )
    })

  },[]);


  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 2),
      smoothWheel: true,
      

    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
  <div className="text-stroke snap-y snap-mandatory">
    <div className="relative overflow-hidden">
      
      <section className="snap-start relative w-screen h-screen overflow-hidden">
        <img className="w-screen h-screen object-cover"  src="stad.jpg" alt=""/>  
        <div ref={textRef1}  className="text-7xl flex-shrink-0 whitespace-nowrap absolute inset-0 flex flex-col space-y-4 justify-center items-center text-white text-7xl font-bold tracking-wide drop-shadow text-shadow ">
              
          <p >Herzlich Willkommen in Haus Vårbacke!</p>
          <p >oder wie man auf schwedisch sagt</p>
          <p className="italic">"Välkomna till hus vårbacke!"</p>
          <button className="btn">
          Hier Buchen!
        </button>
        </div>
        
        
      </section>
    </div>

    <section className="snap-start relative w-screen h-screen overflow-hidden" >
      <img className="fade-image w-screen h-screen object-cover" src="hus.JPG" alt="" />
      <div   className="fade-text text-7xl flex-shrink-0 whitespace-nowrap absolute inset-0 flex flex-col space-y-4 justify-center items-center text-white text-7xl font-bold tracking-wide drop-shadow text-shadow ">
        <p>Ein Zuhause auf dem Frühlingshügel.</p>
        <p>Ruhe, Natur und Raum für die ganze Familie</p>
        <button className="btn">
          Mehr über das Haus
        </button>

      </div>
    </section>

    <section className="snap-start relative w-screen h-screen overflow-hidden">
      <img className="fade-image w-screen h-screen object-cover"  src="see.jpg" alt="" />
      <div   className="fade-text text-7xl flex-shrink-0 whitespace-nowrap absolute inset-0 flex flex-col space-y-4 justify-center items-center text-white text-7xl font-bold tracking-wide drop-shadow text-shadow ">
        <p>Entdecke die Natur </p>
        <p>in und um Totebo</p>
        <button className="btn">
          Totebo und die Umgebung
        </button>

      </div>
    </section>

    <section className="snap-start relative w-screen h-screen overflow-hidden">
      <img className="fade-image w-screen h-screen object-cover" src="family.jpg" alt="" />
      <div   className="fade-text text-7xl flex-shrink-0 whitespace-nowrap absolute inset-0 flex flex-col space-y-4 justify-center items-center text-white text-7xl font-bold tracking-wide drop-shadow text-shadow ">
        <p>Die Reise nach Totebo </p>
        <p>der Beginn deines Abenteuers</p>
        <button className="btn">
          Anreise nach Totebo
        </button>

      </div>
    </section>

    

    <section className="snap-start relative w-screen h-screen overflow-hidden">
      <img className="fade-image w-screen h-screen object-cover" src="wedding.jpg" alt="" />
      <div   className="fade-text text-7xl flex-shrink-0 whitespace-nowrap absolute inset-0 flex flex-col space-y-4 justify-center items-center text-white text-7xl font-bold tracking-wide drop-shadow text-shadow ">
        <p>Unser Gästebuch </p>
        <p>Feedback und Bewertung</p>
        <button className="btn">
          Zum Gästebuch
        </button>

      </div>
    </section>

    <section className="snap-start relative w-screen h-screen overflow-hidden">
      <img className="fade-image w-screen h-screen object-cover" src="mammaPappa.jpg" alt="" />
      <div   className="fade-text text-7xl flex-shrink-0 whitespace-nowrap absolute inset-0 flex flex-col space-y-4 justify-center items-center text-white text-7xl font-bold tracking-wide drop-shadow text-shadow ">
        <p>Alles, was ihr </p>
        <p>über uns wissen solltet</p>
        <button className="btn">
          Über uns
        </button>

      </div>
    </section>

  </div>
  
  )
}

const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];
