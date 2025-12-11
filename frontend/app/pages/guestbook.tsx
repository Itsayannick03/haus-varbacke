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
      <HTMLFlipBook  width={400} height={500} showCover={true} drawShadow={true} maxShadowOpacity={0.5} showPageCorners={false}>
          <div className="shadow-lg">
            <img className="w-full h-full " src="book.png" alt="" />
          </div>

          

          {users.map((user) => (
            <div className="bg-white flex flex-col  shadow-lg border-gray-200" key={user.id}>
              <h2>{user.name}</h2>
              <p>Age: {user.age}</p>
            </div>
            
          ))}
        
        <div className="bg-red-500 shadow-lg">

        </div>
    </HTMLFlipBook>
    </div>
    )
}