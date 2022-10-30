import React from "react";
import avatar from '../assets/avatar.jpg'
const Sidear = () => {
  return (
    <div className="ml-10 sticky top-0  ">
      <div className="w-[20vw] h-14 bg-cyan-500 rounded-t-xl "></div>
      <div className=" relative w-[20vw] bg-white flex flex-col items-center justify-center border  border-b-gray-300 ">
        <img className=" border-2 border-white w-20 rounded-full absolute -top-10 " src={avatar} ></img>
        <a className=" mt-10 text-lg font-semibold" href="#">Mehrdad Roienyan</a>
        <h3 className="text-sm text-gray-600 mb-4 ">Frontend Developer</h3>
      </div>
      <div className="w-[20vw] space-y-2 py-6 border border-b-gray-300 bg-white rounded-b-lg px-2 ">
        <a href="#" className="flex justify-between px-1 hover:bg-[#f3f2ef]"> <h3 className="text-gray-500 ">Connections</h3> <h3 className="text-blue-600">38</h3> </a>
        <a href="#" className="flex justify-between px-1 hover:bg-[#f3f2ef]"> <h3 className="text-gray-500 ">who's viewed your profile</h3> <h3 className="text-blue-600">4</h3> </a>
        
      </div>
      <div className="text-blue-700 bg-white w-[20vw] rounded-lg py-3 flex flex-col space-y-3 px-2 text-sm mt-3">
        <a href="#" className="hover:underline" >Groups</a>
        <a href="#" className="hover:underline" >Events</a>
        <a href="#" className="hover:underline" >Followed Hashtags</a>
      </div>
    </div>
  );
};

export default Sidear;
