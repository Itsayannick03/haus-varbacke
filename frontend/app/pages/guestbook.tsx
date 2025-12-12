import HTMLFlipBook from "react-pageflip";
import type { Route } from "./+types/guestbook";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function guestBook()
{
  const users = [
    {id: 1, fname: "Yannick", lname: "Winkler", date: "April 23 2021", comment: "Super duper truper!"},
    {id: 1, fname: "Yannick", lname: "Winkler", date: "April 23 2021", comment: "Super duper truper!"},
    {id: 1, fname: "Yannick", lname: "Winkler", date: "April 23 2021", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At natus, numquam iusto beatae quia, odit quod a eum maxime quos illum? Quibusdam assumenda dignissimos officiis, perspiciatis perferendis molestias delectus nihil."},
    {id: 1, fname: "Yannick", lname: "Winkler", date: "April 23 2021", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At natus, numquam iusto beatae quia, odit quod a eum maxime quos illum? Quibusdam assumenda dignissimos officiis, perspiciatis perferendis molestias delectus nihil."},
    
  ];
    return(
      <div className="pt-40 pb-10 flex justify-center bg-gradient-to-b from-[#f8f5ef] to-white">
      <HTMLFlipBook  width={400} height={500} showCover={true} drawShadow={false} maxShadowOpacity={0.5} showPageCorners={false}>
          <div className="shadow-lg">
            <img className="w-full h-full " src="book.png" alt="" />
          </div>

          

          {users.map((user) => (
            <div className="page-content bg-[#fcf3f3]  color-[#4f2626] shadow-lg border-gray-200 gap-50px" key={user.id}>
              <div className="flex overflow-hidden font-serif  flex-col items-center justify-center">
                <h2 className="text-3xl font-bold ">{user.fname} {user.lname}</h2>
                <p> {user.date}</p>
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