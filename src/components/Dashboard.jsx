import React, { useState } from "react";
import Home from "./Home";
import Interface from "./Interface";
import Components from "./Components";
import Pages from "./Pages";
import Forms from "./Forms";

const Dashboard = () => {
  const [toggle, setToggle] = useState(1);
  const [home, setHome] = useState("blue");
  const [interFace, setInterFace] = useState("black");
  const [components, setComponents] = useState("black");
  const [pages, setPages] = useState("black");
  const [forms, setForms] = useState("black");

  console.log(toggle);

  return (
    <div>
      <div>
        <ul className="flex gap-12 px-8 py-4">
          <li
            onClick={() => {
              setToggle(1);
              setHome("blue");
              setInterFace("black");
              setComponents("black");
              setPages("black");
              setForms("black");
            }}
            className={
              home === "blue"
                ? "text-[#008cff] font-semibold cursor-pointer text-xl underline"
                : "cursor-pointer"
            }
          >
            Home
          </li>
          <li
            onClick={() => {
              setToggle(2);
              setHome("black");
              setInterFace("blue");
              setComponents("black");
              setPages("black");
              setForms("black");
            }}
            className={
              interFace === "blue"
                ? "text-[#008cff] font-semibold cursor-pointer text-xl underline"
                : "cursor-pointer"
            }
          >
            Interface
          </li>
          <li
            onClick={() => {
              setToggle(3);
              setHome("black");
              setInterFace("black");
              setComponents("blue");
              setPages("black");
              setForms("black");
            }}
            className={
              components === "blue"
                ? "text-[#008cff] font-semibold cursor-pointer text-xl underline"
                : "cursor-pointer"
            }
          >
            Components
          </li>
          <li
            onClick={() => {
              setToggle(4);
              setHome("black");
              setInterFace("black");
              setComponents("black");
              setPages("blue");
              setForms("black");
            }}
            className={
              pages === "blue"
                ? "text-[#008cff] font-semibold cursor-pointer text-xl underline"
                : "cursor-pointer"
            }
          >
            Pages
          </li>
          <li
            onClick={() => {
              setToggle(5);
              setHome("black");
              setInterFace("black");
              setComponents("black");
              setPages("black");
              setForms("blue");
            }}
            className={
              forms === "blue"
                ? "text-[#008cff] font-semibold cursor-pointer text-xl underline"
                : "cursor-pointer"
            }
          >
            Forms
          </li>
        </ul>
        <hr />
      </div>

      <div className={toggle === 1 ? "" : "hidden"}>
        <Home />
      </div>

      <div className={toggle === 2 ? "flex justify-center" : "hidden"}>
        <Interface />
      </div>

      <div className={toggle === 3 ? "flex justify-center" : "hidden"}>
        <Components />
      </div>

      <div className={toggle === 4 ? "flex justify-center" : "hidden"}>
        <Pages />
      </div>

      <div
        className={
          toggle === 5
            ? "bg-gray-300 flex justify-center items-center min-h-screen"
            : "hidden"
        }
      >
        <Forms />
      </div>
    </div>
  );
};

export default Dashboard;
