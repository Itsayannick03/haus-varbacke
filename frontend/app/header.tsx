import './styles/header.css'
import { IoMenu } from "react-icons/io5";

export function Header()
{
    return(
        <div className='mainHeader' >
            <img className='img' src="moose.png" alt=""  />
            <div className='centerGroup'>
                <div>
                     <a className='bookingBtn' href="/">Language</a>
                </div>

                <div className='textBox'>
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <div>
                        <a href="/">Prices</a>
                    </div>

                    
                    
                    <div>
                        <a href="/">About us</a>
                    </div>
                    <div>
                        <a href="/">Contact</a>
                    </div>
                </div>
                
                <div>
                    <a className='bookingBtn' href="/">Booking</a>
                </div>
            </div>
            

            <div className='rightSide'>

                <div className='menuDiv'>
                    
                    <IoMenu size={40}/>
                </div>
            </div>
            
                
          
            
           
        </div>
    )
}