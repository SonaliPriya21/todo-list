"use client";
import { useState } from "react";

const Menu = ({ active, setActive }) => {
  const activeClass = "text-2xl cursor-pointer border-b-white border-b-4";
  const inactiveClass = "text-2xl cursor-pointer text-[#9f9f9f]";

  return (
    <div className="border-b-2 border-b-[#302f2f] mx-[-24px] mt-6">
      <div className="mx-6 grid grid-cols-2 gap-4">
        <button
          className={active === "InProgress" ? activeClass : inactiveClass}
          onClick={() => {
            setActive("InProgress");
          }}
        >
          In-progress
        </button>
        <button
          className={active === "Completed" ? activeClass : inactiveClass}
          onClick={() => {
            setActive("Completed");
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default Menu;
