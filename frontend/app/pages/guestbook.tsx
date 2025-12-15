import HTMLFlipBook from "react-pageflip";
import type { Route } from "./+types/guestbook";
import "../styles/welcome.css"
import React, { useState } from "react";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function guestBook()
{
    const [editing, setEditing] = useState(false);
    const bookRef = React.useRef<any>(null);
    const today = new Date();
    const lockFlip = () => {
  bookRef.current?.pageFlip()?.disableFlip(true);
};

const unlockFlip = () => {
  bookRef.current?.pageFlip()?.disableFlip(false);
};


  const users = [
    {id: 1, fname: "Yannick", lname: "Winkler", date: "April 23 2021", comment: "Super duper truper!"},
    {id: 1, fname: "Yannick", lname: "Winkler", date: "April 23 2021", comment: "Super duper truper!"},
    {id: 1, fname: "Yannick", lname: "Winkler", date: "April 23 2021", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At natus, numquam iusto beatae quia, odit quod a eum maxime quos illum? Quibusdam assumenda dignissimos officiis, perspiciatis perferendis molestias delectus nihil."},
    {id: 1, fname: "Yannick", lname: "Winkler", date: "April 23 2021", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At natus, numquam iusto beatae quia"},
        {id: 1, fname: "stefan", lname: "Winkler", date: "April 23 2021", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At natus, numquam iusto beatae quia"},

    
  ];


  
    return(
      <div className="pt-40 pb-10 flex justify-center bg-gradient-to-b from-[#f8f5ef] to-white">
      <HTMLFlipBook
        ref={bookRef}
        width={420}
        height={540}
        showCover
        drawShadow={false}
        maxShadowOpacity={0.4}
        showPageCorners={false}   // ✅ key fix
>
  {/* Cover */}
  <div className="shadow-2xl">
    <img className="w-full h-full object-cover" src="book.png" alt="" />
  </div>

  {/* Existing entries */}
  {users.map((user) => (
    <div
      key={user.id}
      className="page-content shadow-xl"
    >
      <div className="h-full flex flex-col font-serif px-8 py-10 book-paper">
        <div className="text-center border-b border-[#6b4a3a]/40 pb-4 mb-6">
          <h2 className="text-3xl font-bold text-[#4f2626]">
            {user.fname} {user.lname}
          </h2>
          <p className="text-sm text-[#6b4a3a]">{user.date}</p>
        </div>

        <p className="text-lg leading-[2.2rem] text-[#4f2626] whitespace-pre-wrap">
          {user.comment}
        </p>
      </div>
    </div>
  ))}

  <div className="bg-red-500">

  </div>
</HTMLFlipBook>
    </div>
    )
}