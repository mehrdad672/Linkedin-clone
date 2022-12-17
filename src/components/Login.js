import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { firebaseapp } from "../firebase";
import { signin, signout, signup } from "../app/store";
import Loginfield from "../UI/Loginfield";

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

        updateProfile(signedupuser, {
          displayName: name,
          photoURL: url,
        }).then(() => {
          dispatch(signup(signedupuser));
        });

        setEmail("");
        setPassword("");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        setEmail("");
        setPassword("");
        // ..
      });
  };
  const signinHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const signedinuser = userCredential.user;
        // ...
        localStorage.setItem("user", JSON.stringify(signedinuser));
        console.log(localStorage.getItem("user"));
        dispatch(signin(signedinuser));

        console.log(localStorage.getItem("user"));
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
  const guestHandler= (e)=>{
    e.preventDefault();
    dispatch(signup({email:'guest@gmail.com',displayName:'guest',photoURL:''}));
  }

  return (
    <>
      <div className="bg-[#D0BDF4] w-full py-10 h-screen">
        <div className=" shadow-xl border-[#a0d2eb] bg-white w-[30%] mx-auto  border py-4 p-3 rounded-xl">
          <form onSubmit={signinHandler} className="flex flex-col space-y-6  ">
            <div className="relative  w-full mx-auto ">
              <input
                className="peer w-full rounded-xl focus:placeholder-transparent  focus:border-blue-500 border focus:border-2  border-[#8458B3] p-2 focus:outline-none"
                placeholder="Fullname (only for register )"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label
                className="uppercase transition-all duration-200 ease-in-out  absolute bg-white z-10 text-blue-500 -top-3  px-1 left-2 hidden peer-focus:inline-flex text-sm "
                for="name"
              >
                Fullname
              </label>
            </div>

            <div className="relative mt-10 w-full mx-auto ">
              <input
                className="peer w-full rounded-xl focus:placeholder-transparent  focus:border-blue-500 border border-gray-600 p-2 focus:outline-none"
                placeholder="Profile url (optional for register )"
                type="text"
                id="avatar"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <label
                className="uppercase transition-all duration-200 ease-in-out  absolute z-10 text-blue-500 -top-3 bg-white px-1 left-2 hidden peer-focus:inline-flex text-sm "
                for="avatar"
              >
                Avatar
              </label>
            </div>
            <div className="relative mt-10 w-full mx-auto ">
              <input
                className="peer w-full rounded-xl focus:placeholder-transparent  focus:border-blue-500 border border-gray-600 p-2 focus:outline-none"
                placeholder="Email Address"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                className="uppercase transition-all duration-200 ease-in-out  absolute z-10 text-blue-500 -top-3 bg-white px-1 left-2 hidden peer-focus:inline-flex text-sm "
                for="email"
              >
                Email Address
              </label>
            </div>
            <div className="relative mt-10 w-full mx-auto ">
              <input
                className="peer w-full rounded-xl focus:placeholder-transparent  focus:border-blue-500 border border-gray-600 p-2 focus:outline-none"
                placeholder="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                className="uppercase transition-all duration-200 ease-in-out  absolute z-10 text-blue-500 -top-3 bg-white px-1 left-2 hidden peer-focus:inline-flex text-sm "
                for="Password"
              >
                Password
              </label>
            </div>

            <button
              className="bg-purple-600 p-2 rounded-xl  hover:bg-green-600 text-white"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
        <div className="flex justify-center space-x-2 mt-2">
          <p> Not a member?</p>
          <button
            onClick={signupHandler}
            className="text-blue-900 hover:underline"
            type="button "
          >
            register now
          </button>
          <p>or</p>
          <button onClick={guestHandler} className=" flex text-blue-900 hover:underline" type="button">Login as a <p className="text-green-700 font-semibold px-1">guest</p></button>
        </div>
        
      </div>
    </>
  );
};

export default Login;
