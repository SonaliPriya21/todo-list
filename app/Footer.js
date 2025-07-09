"use client";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const Footer = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  return (
    <div className="mt-4 flex">
      <input
        type="text"
        placeholder="Add a task..."
        className="border-[#302f2f] border-2 rounded-2xl h-10 pl-4 w-[85%]"
        onChange={(event) => {
          setTask(event.target.value);
        }}
        value={task}
      />
      <button
        className="flex items-center justify-center h-10 w-10 px-2 bg-[#2b2b2b] rounded-2xl ml-4"
        onClick={() => {
          setTasks([
            ...tasks,
            {
              taskName: task,
              completed: false,
            },
          ]);
          setTask("");
        }}
      >
        <IoMdAdd size={24} />
      </button>
    </div>
  );
};
export default Footer;
