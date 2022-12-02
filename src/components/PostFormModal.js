import React from "react";
import Modal from "@mui/material/Modal";
import { db } from "../firebase";
import { useState } from "react";
import avatar from "../assets/avatar.jpg";
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
const PostFormModal = ({Show,Close}) => {
  const user = useSelector((state) => state.auth.user);
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
    Close();
  };
  const modalCloseHandler=() => {
    Close()
  }
  return (
    <Modal open={Show} onClose={Close} disableAutoFocus>
      <div className="h-screen flex justify-center items-center">
      <div className="flex justify-between items-center px-3 py-3 border-b border-gray-200 ">
            <h3 className="text-lg text-gray-600 font-semibold ">
              Create a post
            </h3>
            <button
              onClick={Close}
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
              
              <h1 className=" text-gray-700 text-lg font-semibold capitalize">
              {user.displayName}  
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

export default PostFormModal;
