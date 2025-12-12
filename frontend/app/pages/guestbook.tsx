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
    {id: 1, name: "Yannick", age: 23},
    {id: 2, name: "Alfred", age: 67},
    {id: 3, name: "Alfred", age: 67},
    {id: 3, name: "Alfred", age: 67},
    {id: 3, name: "Alfred", age: 67},
    {id: 3, name: "Alfred", age: 67},
    {id: 3, name: "Alfred", age: 67},
  ];
    return(
      <div className="pt-40 pb-10 flex justify-center bg-gradient-to-b from-[#f8f5ef] to-white">
      <HTMLFlipBook  width={400} height={500} showCover={true} drawShadow={false} maxShadowOpacity={0.5} showPageCorners={false}>
          <div className="shadow-lg">
            <img className="w-full h-full " src="book.png" alt="" />
          </div>

          

          {users.map((user) => (
            <div className="page-content bg-[#fcf3f3]  color-[#4f2626] shadow-lg border-gray-200 gap-50px" key={user.id}>
              <div className="flex overflow-hidden  flex-col items-center justify-center">
                <h2>{user.name}</h2>
                <p>Age: {user.age}</p>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. At natus, numquam iusto beatae quia, odit quod a eum maxime quos illum? Quibusdam assumenda dignissimos officiis, perspiciatis perferendis molestias delectus nihil.</p>
              </div>
              
            </div>
            
          ))}
        
        <div className="bg-red-500 shadow-lg">

        </div>
    </HTMLFlipBook>
    </div>
    )
}