"use client";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import TasksList from "./TasksList";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [active, setActive] = useState("InProgress");
  return (
    <div className="mx-auto w-xl my-10 bg-[#171617] flex flex-col px-6 py-6 rounded-xl font-bold">
      <Header />
      <Menu active={active} setActive={setActive} />
      <TasksList tasks={tasks} setTasks={setTasks} active={active} />
      <Footer tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
