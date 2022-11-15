import React, { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import logo from "../assets/logo.png";
import avatar from "../assets/alt-avatar.webp";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { Drawer } from '@mui/material';
import { signin } from "../app/store";

const Header = () => {
  const dispatch = useDispatch();
 
    const curUserj =  (localStorage.getItem('user'))
    const curUser=JSON.parse(curUserj)
    console.log(curUser)
   //dispatch(signin(curUser ? {email:curUser.email,displayName:curUser.displayName,profilePic:curUser.profilePic}:{email:null,displayName:null,profilePic:null}))

  const [dropdown, setdropdown] = useState(false);
  const dropdownClose= ()=>{
    setdropdown(false)
  }
  const user = useSelector((state) => state.auth.user);
 
  const isloggedin = useSelector((state) => state.auth.isloggedin);
  return (
    <header className="flex  items-center   md:space-x-10  py-3 justify-around sticky top-0 z-10 bg-white shadow-lg ">
      <div className="flex items-center">
        <img src={logo} className="w-[34px] h-[30px]" alt="linkedin" />
        <input
          placeholder="Search"
          type="text"
          className=" text-center h-[30px] w-[280px] bg-[#eef3f8] focus:outline-none rounded-lg hidden lg:flex "
        ></input>
        <button className=" text-gray-700 hover:text-black flex flex-col items-center justify-center lg:hidden ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5   "
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-[10px] hidden md:flex ">Search</h3>
        </button>
      </div>
      <div className="flex space-x-8 mr-10">
        <a
          href="#"
          className="group flex flex-col items-center justify-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6  text-gray-500 group-hover:text-black"
          >
            <path
              fillRule="evenodd"
              d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-[10px] text-gray-500 group-hover:text-black hidden md:flex">
            Home
          </h3>
        </a>
        <a
          href="#"
          className="hidden md:flex group md:flex-col items-center justify-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6   text-gray-500 group-hover:text-black"
          >
            <path d="M11 5a3 3 0 11-6 0 3 3 0 016 0zM2.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 018 18a9.953 9.953 0 01-5.385-1.572zM16.25 5.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z" />
          </svg>

          <h3 className="  text-[10px] text-gray-500 group-hover:text-black hidden md:flex">
            My Network
          </h3>
        </a>
        <a
          href="#"
          className="group hidden md:flex md:flex-col items-center justify-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6   text-gray-500 group-hover:text-black"
          >
            <path
              fillRule="evenodd"
              d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
              clipRule="evenodd"
            />
            <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
          </svg>

          <h3 className=" text-[10px] text-gray-500 group-hover:text-black hidden md:flex">
            Jobs
          </h3>
        </a>
        <a
          href="#"
          className="group flex flex-col items-center justify-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6   text-gray-500 group-hover:text-black"
          >
            <path
              fillRule="evenodd"
              d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>

          <h3 className="text-[10px] text-gray-500 group-hover:text-black hidden md:flex">
            Messaging
          </h3>
        </a>
        <a
          href="#"
          className="hidden md:flex group md:flex-col items-center justify-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6  text-gray-500 group-hover:text-black"
          >
            <path
              fillRule="evenodd"
              d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.903 32.903 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2 2 0 01-3.9 0z"
              clipRule="evenodd"
            />
          </svg>

          <h3 className=" text-[10px] text-gray-500 group-hover:text-black hidden md:flex">
            Notifications
          </h3>
        </a>
        {isloggedin && (
          <button onClick={()=>setdropdown(true)} className="group relative">
            {user.profilePic && (
              <img
                className=" w-6 rounded-full grayscale  group-hover:grayscale-0"
                src={user.profilePic}
                alt="avatar"
              />
            )}
            {!user.profilePic && (
              <img
                className=" w-6 rounded-full grayscale  group-hover:grayscale-0 "
                src={avatar}
                alt="avatar"
              />
            )}
            <div className=" md:flex text-gray-500 space-x-1 hidden group-hover:text-black ">
              <p className="text-[10px] ">Me</p>
              <ArrowDownIcon className="w-2 text-gray-800" />
              
              {dropdown && <div className="absolute z-50 right-0 top-12 w-[300px] p-2 bg-white rounded-2xl cursor-default">
                  <div className=" flex items-center justify-start space-x-2  ">
                  {user.profilePic && (
              <img
                className="rounded-full w-14"
                src={user.profilePic}
                alt="avatar"
              />
            )}
            {!user.profilePic && (
              <img
                className=" rounded-full w-14 "
                src={avatar}
                alt="avatar"
              />
            )}
                    <div>
                      <h2 className="capitalize text-sm  text-gray-700 font-semibold">
                        {user.displayName}
                      </h2>
                      <h3 className="text-gray-700 text-sm">{user.email}</h3>
                    </div>
                  </div>
                  <button className="py-2 px-4 shadow-md hover:border-gray-800 hover:shadow-lg border border-gray-500 rounded-full">
                    logout
                  </button>
                </div>}  
               
            </div>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
