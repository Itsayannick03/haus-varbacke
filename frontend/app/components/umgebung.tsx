import "../styles/welcome.css"
import "aos/dist/aos.css";
import { LuMapPin } from "react-icons/lu";
import { DestinationCard } from "./destinationCard";
import "../links"

export function Umgebung()
{
    return(
    <div className="pt-25 pb-5 gap-5 bg-gradient-to-b from-[#f8f5ef] to-white flex flex-col items-center">
           
           <DestinationCard
            image="logo.png"
            header="hello"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
                        ligula vel ornare laoreet. Sed semper, sapien at venenatis malesuada,
                        felis justo feugiat arcu, ut placerat lacus dolor id est. Vestibulum
                        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                        curae. Curabitur tincidunt eros nec nisl scelerisque, vitae vestibulum
                        nunc maximus."
            link="www.google.com"
           />
        
            <div className="p-6 gap-3 w-120 rounded-md border border-1px border-gray-200 shadow-lg flex justify-center items-center flex-col">
                <div>
                    <img
                        src="family.jpg"
                        alt="description"
                        className="float-left w-40 h-auto mr-4 mb-2 rounded-lg"
                    />

                    <h1 className="text-4xl font-serif">
                        Rubrik
                    </h1>

                    <p className="text-[#4a4a4a] font-serif leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
                        ligula vel ornare laoreet. Sed semper, sapien at venenatis malesuada,
                        felis justo feugiat arcu, ut placerat lacus dolor id est. Vestibulum
                        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                        curae. Curabitur tincidunt eros nec nisl scelerisque, vitae vestibulum
                        nunc maximus.
                    </p>
                </div>
                

                <button className="bg-[#eae6dc] border-2 border-[#cfc8b5] rounded-lg shadow-md w-full flex items-center justify-center hover-button">
                    <LuMapPin size={30} />
                </button>
                

            
            </div>
           
        
       
        
        

            
    </div>
    )
}