import React, { useEffect } from "react";
import avatar from "../assets/alt-avatar.webp";
import Modal from "@mui/material/Modal";
import { useState, useRef } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  onSnapshot,
  setDoc,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useSelector } from "react-redux";

function PostForm() {
  const user = useSelector((state) => state.auth.user);
  const [modalShow, SetModalShow] = useState(false);
  const modalOpen = () => {
    SetModalShow(true);
  };
  const modalClose = () => {
    SetModalShow(false);
  };
  const PostFormModal = () => {
    const [enteredMessage, setEnteredMessage] = useState(null);
    const [enteredUrl, setEnteredUrl] = useState(null);
    const sendPost = (e) => {
      e.preventDefault();
if (enteredMessage){
  addDoc(collection(db, "posts"), {
        name: user.displayName,
        message: enteredMessage,
        time: serverTimestamp(),
        imageUrl: enteredUrl,
      });
}else {
  alert('message shouldnt be empty')
}
      
      
      SetModalShow(false);
    };
    return (
      <Modal open={modalShow} onClose={modalClose} disableAutoFocus>
        <div className="absolute top-[20%] left-[30%] w-[40vw] h-[25vw] bg-white rounded-2xl">
          <div className="flex justify-between items-center px-3 py-3 border-b border-gray-200 ">
            <h3 className="text-lg text-gray-600 font-semibold ">
              Create a post
            </h3>
            <button
              onClick={modalClose}
              className="hover:bg-gray-100 bg-white p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="gray"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div>
            <div className="px-3 py-3 flex items-center space-x-3">
             
              {user.profilePic && (
                <img
                  className="rounded-full w-12 "
                  src={user.profilePic}
                  alt="avatar"
                />
              )}
              {!user.profilePic && (
                <img
                  className="rounded-full w-12 "
                  src={avatar}
                  alt="avatsdar"
                />
              )}
              
              <h1 className=" text-gray-700 text-lg font-semibold">
                Mehrdad Roienyan
              </h1>
            </div>
            <form className="">
              <div className="px-3 flex flex-col space-y-2 ">
                <input
                  className="w-full h-24 focus:outline-none px-3 py-3 border border-gray-300 rounded-xl"
                  type="text"
                  placeholder="What do you want to talk about?"
                  value={enteredMessage}
                  onChange={(e) => setEnteredMessage(e.target.value)}
                />
                <input
                  className="w-full h-8 focus:outline-none px-3 py-3 border border-gray-300 rounded-xl"
                  type="text"
                  placeholder="Add an image Url ( optional )"
                  value={enteredUrl}
                  onChange={(e) => setEnteredUrl(e.target.value)}
                />
              </div>

              <button
                onClick={sendPost}
                className="absolute right-3  bottom-4 bg-blue-700 hover:bg-blue-900 text-white rounded-2xl px-3 py-2"
                type="submit"
              >
                Post
              </button>
            </form>
          </div>
        </div>
      </Modal>
    );
  };

  return (
    <>
      <PostFormModal Show={modalShow} Close={modalClose} />
      <div className="  bg-white w-[40vw] h-28 rounded-lg px-3 py-3 ">
        <div className="flex space-x-2">
        
           {user.profilePic && (
                <img
                  className="border-2 border-white w-12 rounded-full "
                  src={user.profilePic}
                  alt="avatar"
                />
              )}
              {!user.profilePic && (
                <img
                  className="border-2 border-white w-12 rounded-full "
                  src={avatar}
                  alt="avatsdar"
                />
              )}
          <button
            onClick={modalOpen}
            className=" w-[30vw] flex hover:bg-gray-200 items-center text-gray-500 h-12 border border-gray-300 rounded-3xl text-start px-3 py-5 focus:outline-none"
          >
            Start a post
          </button>
        </div>
        <div className="flex mt-1 justify-center space-x-3 ">
          <div className="flex space-x-3  hover:bg-gray-100 px-3 py-2 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="blue"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clip-rule="evenodd"
              />
            </svg>
            <h3> Photo </h3>
          </div>
          <div className="flex space-x-3  hover:bg-gray-100 px-3 py-2 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="green"
              class="w-6 h-6 text-green-500"
            >
              <path
                stroke-linecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>

            <h3> Video </h3>
          </div>
          <div className="flex space-x-3 hover:bg-gray-100 px-3 py-2 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="orange"
              class="w-6 h-6"
            >
              <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
              <path
                fill-rule="evenodd"
                d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                clip-rule="evenodd"
              />
            </svg>

            <h3> Event </h3>
          </div>
          <div className="flex space-x-3 hover:bg-gray-100 px-3 py-2 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              class="w-6 h-6"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
            </svg>

            <h3> Article </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostForm;
