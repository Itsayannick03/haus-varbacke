import { FaFacebook } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";

export function Footer()
{
    return(
        <div className="text-white drop-shadow-xl flex justify-center items-center h-40 border-t">
            <div className="flex h-full w-full bg-gradient-to-b from-white to-[#567c5e]   justify-around items-center">
                 <div>a</div>
            <div className=" items-center justify-around">
                <FaFacebook size={30}/>
                <FaHouseChimney />

            </div>
            <div>c</div>
            </div>
           
        </div>
    )
}