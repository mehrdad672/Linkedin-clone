import React from "react";
import Post from "./Post";
import PostForm from "./PostForm";
import Skeleton from "@mui/material/Skeleton";
import banner from "../assets/banner.png";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  onSnapshot,
  setDoc,
  query,
  orderBy,
} from "firebase/firestore";

import { useEffect, useState } from "react";
import WidgetItem from "./WidgetItem";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "posts"), orderBy("time", "desc")),
      (snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
    );
  }, []);
  console.log(posts);
  const postList = posts.map((p) => (
    <Post
      key={p.data.time}
      name={p.data.name}
      message={p.data.message}
      imageUrl={p.data.imageUrl}
      time={p.data.time}
      avatarUrl={p.data.avatarurl}
    />
  ));
  return (
    <div className="px-10  ">
      <PostForm />
      
      {postList ? postList : <h1>loading...</h1>}
      <div className="flex flex-col space-y-3 ">
        <div className="mt-8 block lg:hidden w-[95vw] md:w-[55vw] lg:w-[40vw] bg-white rounded-xl h-[300px] p-3 border border-gray-200 shadow-lg">
          <WidgetItem
            logoUrl="https://media-exp1.licdn.com/dms/image/C4D0BAQFjZceumi0aHQ/company-logo_100_100/0/1645887968473?e=1675900800&v=beta&t=XVxtvFzDrWdj7aSMwTUaFF27ufwig4gEki8uBdEisM8"
            title="Job vision"
            description="Staffing and Recruiting"
          />

          <WidgetItem
            logoUrl="https://media-exp1.licdn.com/dms/image/D4E35AQFNbxogLwIwBQ/profile-framedphoto-shrink_200_200/0/1667456116489?e=1670241600&v=beta&t=RFSjX9PoakjhF3vWeFlsX3uyT13C3etg5XW5dxs7Cuk"
            title="Mehrdad Roienyan"
            description="Frontend developer"
          />
        </div>
        <div className=" bg-white rounded-xl  sticky top-[70px] mt-8  p-2 border border-gray-200 shadow-lg block lg:hidden">
          <img className=" mx-auto " src={banner} alt="get hired" />
        </div>
      </div>
    </div>
  );
};

export default Feed;
