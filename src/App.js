import React from "react";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Header from "./UI/Header";

function App() {
  return <>
  
  {/* Header */}
<Header />

{/* Main */}
<main className="bg-[#f3f2ef] py-5 flex">
  <Sidebar />
  <Feed />
</main>
  </>;
}

export default App;
