import { MdDelete } from "react-icons/md";

const Task = ({ taskName, completed, toggleCompletion, deleteTask }) => {
  return (
    <div className="flex justify-between border-b-2 border-b-[#302f2f] py-4">
      <div className="flex gap-4">
        <input
          type="checkbox"
          value={taskName}
          className="w-5 h-5 mt-1.5"
          checked={completed}
          onChange={(event) => {
            toggleCompletion(taskName, event.target.checked);
          }}
        />

        <p className="text-[20px]">{taskName}</p>
      </div>

      <button
        className="flex items-center justify-center"
        onClick={() => {
          deleteTask(taskName);
        }}
      >
        <MdDelete className="mr-8" size={24} />
      </button>
    </div>
  );
};
export default Task;
