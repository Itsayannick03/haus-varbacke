import HTMLFlipBook from "react-pageflip";
import type { Route } from "./+types/guestbook";
import "../styles/welcome.css"



export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function guestBook()
{
  const today = new Date()

  const users = [
    {id: 1, fname: "Yannick", lname: "Winkler", date: "April 23 2021", comment: "Super duper truper!"},
    {id: 1, fname: "Yannick", lname: "Winkler", date: "April 23 2021", comment: "Super duper truper!"},
    {id: 1, fname: "Yannick", lname: "Winkler", date: "April 23 2021", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At natus, numquam iusto beatae quia, odit quod a eum maxime quos illum? Quibusdam assumenda dignissimos officiis, perspiciatis perferendis molestias delectus nihil."},
    {id: 1, fname: "Yannick", lname: "Winkler", date: "April 23 2021", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At natus, numquam iusto beatae quia"},
        {id: 1, fname: "stefan", lname: "Winkler", date: "April 23 2021", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At natus, numquam iusto beatae quia"},

    
  ];
    return(
      <div className="pt-40 pb-10 flex justify-center bg-gradient-to-b from-[#f8f5ef] to-white">
      <HTMLFlipBook  width={400} height={500} showCover={true} drawShadow={false} maxShadowOpacity={0.5} showPageCorners={false}>
          <div className="shadow-lg">
            <img className="w-full h-full " src="book.png" alt="" />
          </div>

         <div className="page-content bg-[#fcf3f3]  color-[#4f2626] shadow-lg border-gray-200 gap-50px" >
              <div className="flex h-full  500 overflow-hidden font-serif  flex-col items-center  ">
                <div className="flex flex-col items-center justify-center border-b border-[#4f2626] w-90">
                  <input className="  pl-2  border-b w-50 text-3xl flex items-center leading-none text-center" type="text" placeholder="Name" />
                  <p> {today.toDateString()}</p>
                </div>

                <div className="pt-5 pb-5  w-90 h-100 flex items-center justify-center ">
                  <input className="bg-white h-90 w-85 rounded-2xl flex p-4 align-top resize-none"  type="text" placeholder="Schreiben Sie hier Ihren Eintrag…"/>
                </div>
                <div className="w-full h-full flex justify-end pr-2  items-center">
                  <button className="border-[#0000014] bg-white h-8 w-30 text-sm rounded-xl shadow-lg hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.25)] transition-all duration-[800ms] ease-in-out">Absenden</button>
                </div>
              </div>
              
            </div>

          

          {users.map((user) => (
            <div className="page-content bg-[#fcf3f3]  color-[#4f2626] shadow-lg border-gray-200 gap-50px" key={user.id}>
              <div className="flex overflow-hidden font-serif  flex-col items-center justify-center ">
                <div className="flex flex-col items-center justify-center border-b border-[#4f2626] w-90">
                  <h2 className="text-3xl font-bold ">{user.fname} {user.lname}</h2>
                  <p> {user.date}</p>
                </div>
                
                <p className="">{user.comment}</p>
              </div>
              
            </div>
            
          ))}
        
        <div className="bg-red-500 shadow-lg">

        </div>
    </HTMLFlipBook>
    </div>
    )
}