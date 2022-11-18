import React from "react";
import WidgetItem from "./WidgetItem";
import banner from "../assets/banner.png";
const Widgets = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="w-[25vw] bg-white rounded-xl h-[300px] p-3 border border-gray-200 shadow-lg">
        <WidgetItem
          logoUrl="https://media-exp1.licdn.com/dms/image/C4D0BAQFjZceumi0aHQ/company-logo_100_100/0/1645887968473?e=1675900800&v=beta&t=XVxtvFzDrWdj7aSMwTUaFF27ufwig4gEki8uBdEisM8"
          title="Job vision"
          description="Staffing and Recruiting"
        />

        <WidgetItem
          logoUrl="https://media-exp1.licdn.com/dms/image/D4E35AQFNbxogLwIwBQ/profile-framedphoto-shrink_100_100/0/1667456116489?e=1668967200&v=beta&t=3pBPkIoTS7Dz-3m-z4ULwv9xs_H0hAajsj-ahhsBRVk"
          title="Mehrdad Roienyan"
          description="Frontend developer"
        />
        
      </div>
      <div className=" bg-white rounded-xl  sticky top-[70px]  p-2 border border-gray-200 shadow-lg">
        <img className=" mx-auto" src={banner} alt="get hired" />
      </div>
    </div>
  );
};

export default Widgets;
