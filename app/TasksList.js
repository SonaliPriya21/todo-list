"use client";
import Task from "./Task";

const TasksList = ({ tasks, setTasks, active }) => {
  const toggleCompletion = (taskName, completed) => {
    const newTasks = tasks.map((t) => {
      if (t.taskName === taskName) {
        t.completed = completed;
        return t;
      } else {
        return t;
      }
    });
    setTasks(newTasks);
  };

  const deleteTask = (taskName) => {
    const newTask = tasks.filter((t) => {
      if (t.taskName === taskName) {
        return false;
      } else {
        return true;
      }
    });
    setTasks(newTask);
  };

  return (
    <div>
      {tasks
        .filter((t) => {
          if (active === "InProgress" && !t.completed) {
            return true;
          } else if (active === "Completed" && t.completed) {
            return true;
          } else {
            return false;
          }
        })
        .map((t, index) => {
          return (
            <Task
              key={index}
              taskName={t.taskName}
              completed={t.completed}
              toggleCompletion={toggleCompletion}
              deleteTask={deleteTask}
            />
          );
        })}
    </div>
  );
};

export default TasksList;
