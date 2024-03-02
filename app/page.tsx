import Image from "next/image";
import {BsBell, BsBookmark, BsEnvelope, BsTwitter} from 'react-icons/bs'
import React from "react";
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import FeedCard from "@/components/FeedCard/page";
import { SlOptions } from "react-icons/sl";


interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems : TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle /> 
  },
  {
    title: "Explore",
    icon: <BiHash /> 
  },
  {
    title: "Notifications",
    icon: <BsBell /> 
  },
  {
    title: "Messages",
    icon: <BsEnvelope /> 
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark /> 
  },
  {
    title: "Profile",
    icon: <BiUser /> 
  },
  {
    title: "More",
    icon: <SlOptions /> 
  },
  
  
  
  
]   

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-56">
       <div className="col-span-3  pt-8 px-4">
        <div className="text-4xl h-fit rounded-full p-2 cursor-pointer">
         <BsTwitter />
         </div>

         <div className="mt-4  font-semibold pr-4">
          <ul>
            {SidebarMenuItems.map((item) => (
              <li key={item.title} className="flex  justify-start items-center  gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer ">
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
             ))}
          </ul>
          <button className="bg-[#1d9bf0] text-sm p-3 rounded-full w-full mt-5">Tweet</button>
       </div> 
       </div>
  
  
       <div className="col-span-6 border-r-2 border-l-2 border-slate-500 ">
        <FeedCard  />
        
       </div>
       <div className="col-span-3"></div>
    </div>
  );
}
