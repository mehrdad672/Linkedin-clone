import React from "react";

const WidgetItem = ({logoUrl , title , description}) => {
  return (
    <div className="mt-6 px-2">
      <div className="flex space-x-3 items-center   ">
        <img className="w-12 rounded-full "
          src={logoUrl}
          alt={title}
        />
        <div>
          <h2 className=" text-gray-700 font-semibold ">{title}</h2>
          <h3 className="text-gray-500 text-sm"> {description}</h3>
        </div>
      </div>
      <button className="flex space-x-1 items-center justify-center ml-14 px-4 py-1 rounded-3xl border border-gray-500 hover:bg-slate-200 mt-2 ">
        <p className="text-lg font-bold text-gray-700">+</p>
        <h1 className=" text-gray-500">Follow</h1>
        </button>
    </div>
  );
};

export default WidgetItem;
