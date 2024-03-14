import React from "react";

const Forms = () => {
  return (
    <div className="bg-white shadow-lg w-[50%] flex flex-col justify-center items-center gap-4 p-8 rounded-md">
      <img
        src="https://img.freepik.com/free-photo/portrait-optimistic-businessman-formalwear_1262-3600.jpg"
        alt=""
        className="h-[120px] w-[120px] rounded-full"
      />
      <p className="text-3xl font-semibold">Jane Pearson</p>
      <p className="text-xl">jane.pearson@gmail.com</p>
      <p>
        User ID: <span className="font-semibold">54220879</span>
      </p>
      <p>
        Admin ID: <span className="font-semibold">jpearson@tabler.com</span>
      </p>

      <div className="flex items-center gap-4">
        <p className="text-blue-600 cursor-pointer">Control Panel</p>
        <p className="text-gray-500 text-xl">•</p>
        <p className="text-blue-600 cursor-pointer">Subscription</p>
      </div>

      <div className="flex gap-4">
        <p className="border-2 border-solid rounded-3xl p-2">My Account</p>
        <p className="border-2 border-solid rounded-3xl p-2">Sign Out</p>
      </div>
    </div>
  );
};

export default Forms;
