import React from "react";
import Post from "./Post";
import PostForm from "./PostForm";
import Skeleton from "react-loading-skeleton";
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
const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(query(collection(db ,"posts"),orderBy('time','desc')), (snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  console.log(posts)
  const postList = posts.map(p =><Post name={p.data.name} message={p.data.message} imageUrl={p.data.imageUrl} time={p.data.time} /> )
  return (
    <div className="px-10 ">
      <PostForm />
      
      {postList}
    </div>
  );
};

export default Feed;
