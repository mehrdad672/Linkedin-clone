import React from "react";
import WidgetItem from "./WidgetItem";
import banner from "../assets/banner.png";
const Widgets = () => {
  return (
    <div className=" space-y-3 hidden lg:block ">
      <div className="w-[25vw] hidden lg:block bg-white rounded-xl h-[300px] p-3 border border-gray-200 shadow-lg">
        <WidgetItem
          logoUrl="https://media-exp1.licdn.com/dms/image/C4D0BAQFjZceumi0aHQ/company-logo_100_100/0/1645887968473?e=1675900800&v=beta&t=XVxtvFzDrWdj7aSMwTUaFF27ufwig4gEki8uBdEisM8"
          title="Job vision"
          description="Staffing and Recruiting"
        />

        <WidgetItem
          logoUrl="https://media-exp1.licdn.com/dms/image/D4E35AQFNbxogLwIwBQ/profile-framedphoto-shrink_200_200/0/1667456116489?e=1671350400&v=beta&t=ebZ-oagXe8NikGbsX65hadxuqtiGYNixKGJ4F8FgCrQ"
          title="Mehrdad Roienyan"
          description="Frontend developer"
        />
        
      </div>
      <div className=" bg-white rounded-xl  sticky top-[70px]  p-2 border border-gray-200 shadow-lg hidden lg:block">
        <img className=" mx-auto" src={banner} alt="get hired" />
      </div>
    </div>
  );
};

export default Widgets;
