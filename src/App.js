import React from "react";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Header from "./UI/Header";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Widgets from "./components/Widgets";
function App() {
  const isloggedin = useSelector((state) => state.auth.isloggedin);
  return (
    <>
     
      <Header />
      {!isloggedin ? (
        <Login />
      ) : (
        <main className="bg-[#f3f2ef] py-5 flex lg:justify-evenly justify-center md:items-start md:justify-center lg:items-start items-center flex-col md:flex-row space-x-4  px-4 max-w-full">
          <Sidebar />
          <Feed />
          <Widgets />
        </main>
      )}
     
    </>
  );
}

export default App;
