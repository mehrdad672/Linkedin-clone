import React from "react";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import avatar from "../assets/avatar.jpg";
const PostFormModal = (props) => {
    console.log(props)
  const modalCloseHandler=() => {
    props.Close()
  }
  return (
    <Modal open={props.show} onClose={modalCloseHandler} disableAutoFocus>
      <div className="absolute w-[40vw] h-[25vw] bg-white rounded-2xl">
        <div className="flex justify-between items-center px-3 py-3 border-b border-gray-200 ">
          <h3 className="text-lg text-gray-600 font-semibold ">
            {" "}
            Create a post{" "}
          </h3>
          <button onClick={modalCloseHandler} className="hover:bg-gray-100 bg-white p-2 rounded-full">
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
            <img className="rounded-full w-12 " src={avatar} alt="avatar" />
            <h1 className=" text-gray-700 text-lg font-semibold">
              Mehrdad Roienyan
            </h1>
          </div>
          <form className="">
            <input
              className="w-full h-24 focus:outline-none px-3 py-3"
              type="text"
              placeholder="What do you want to talk about?"
            />
            <button
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
