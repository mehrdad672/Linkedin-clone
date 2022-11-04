import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,updateProfile
} from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { firebaseapp } from "../firebase";
import { signin, signout,signup } from "../app/store";

const Login = () => {

  const auth = getAuth(firebaseapp);
  const dispatch = useDispatch();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [url, setUrl] = useState(null);
 
  const signupHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const signedupuser = userCredential.user;
        
        updateProfile(signedupuser , {
          displayName:name ,
          photoURL:url
        }).then(()=>{
          dispatch(signup({
            email: signedupuser.email ,
            displayName : signedupuser.displayName ,
            profilePic: signedupuser.photoURL
          }))
        })
        

       
        setEmail("");
        setPassword("");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        setEmail('');
        setPassword('');
        // ..
      });}
  const signinHandler = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const signedinuser = userCredential.user;
        // ...
        
        dispatch(signin({
          email: signedinuser.email ,
          displayName : signedinuser.displayName ,
          profilePic: signedinuser.photoURL
        }));
        setEmail(null);
        setPassword(null);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        setEmail(null);
        setPassword(null);
      });
  };

  return (
    <div>
      <div className=" mt-10 bg-cyan-500 w-[30vw] mx-auto border border-gray-300 p-3 rounded-xl">
        <form onSubmit={signinHandler} className="flex flex-col space-y-3">
          <input
            className="focus:outline-none  p-2 rounded-xl "
            placeholder="Enter your Fullname (only for register)"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="focus:outline-none  p-2 rounded-xl "
            placeholder="Enter your profile url (only for register)"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <input
            className="focus:outline-none  p-2 rounded-xl "
            placeHolder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="focus:outline-none  p-2 rounded-xl"
            placeHolder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-purple-600 p-2 rounded-xl  hover:bg-green-600 text-white"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      <div className="flex justify-center space-x-2">
        <p> Not a member?</p>
        <button onClick={signupHandler} className="text-blue-900 hover:underline" type="button ">
          register now
        </button>
      </div>
    </div>
  );
};

export default Login;
