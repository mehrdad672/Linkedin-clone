import React, { useState } from "react";
import { useSelector } from "react-redux";
import avatar from "../assets/alt-avatar.webp";
import { Skeleton } from '@mui/material';

const Post = ({ name, message, imageUrl, avatarUrl, time }) => {
const user = useSelector(state=>state.auth.user)
  const [liked, setLiked] = useState(false);
  
  const likedstyle =
    "w-6 h-6 cursor-pointer hover:shadow-md fill-blue-500  ";
  const unlikedstyle = "w-6 h-6 cursor-pointer hover:shadow-md";
  return (
    
    <div className="w-[95vw] md:w-[55vw] lg:w-[40vw]  mt-3 rounded-xl bg-white border border-gray-200 shadow-lg">
      <div className="px-3 py-3 flex items-center space-x-3">
        {avatarUrl && <img className="rounded-full w-8 " src={avatarUrl} alt="avatar" />}
        {!avatarUrl && <img className="rounded-full w-8 " src={avatar} alt="avatsdar" />}

        <div className="flex flex-col">
          <h1 className=" text-gray-700 text-sm capitalize ">{name}</h1>
          {time ?  <p className="text-sm text-gray-500"> {time.toDate().toDateString()} </p> : <Skeleton variant="rectangular" width={200} height={20} animation="wave" />}
        </div>
      </div>
      <p className="p-3 text-gray-700"> {message} </p>
      {imageUrl && <img className="w-full rounded-3xl p-3 shadow-sm" src={imageUrl}></img>}
      <div className="flex justify-around py-2 ">
        <svg
          onClick={() => setLiked((state) => !state)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={liked ? likedstyle : unlikedstyle}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer hover:shadow-md "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer hover:shadow-md "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer hover:shadow-md "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Post;
