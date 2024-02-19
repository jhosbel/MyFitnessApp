import { useTasks } from "@/context/useTasks";
import React from "react";
import { IoCheckmarkDoneSharp, IoTrash } from "react-icons/io5";

export default function TaskItem({ tasks }) {
  const { deleteTask, updateTask } = useTasks();

  return (
    <div
      key={tasks._id}
      className="bg-gray-900 p-2 m-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer"
    >
      <div>
        <h1>{tasks.title}</h1>
        <p>{tasks.description}</p>
      </div>
      <div className="flex gap-x-2">
        {tasks.done ? (
          <IoCheckmarkDoneSharp
            className="text-green-500"
            onClick={() => {
              updateTask(tasks._id, { done: !tasks.done });
            }}
          />
        ) : (
          <IoCheckmarkDoneSharp
            className="text-gray-500"
            onClick={() => {
              updateTask(tasks._id, { done: !tasks.done });
            }}
          />
        )}
        <IoTrash
        className="text-red-500"
          onClick={async () => {
            if (!window.confirm("Are you sure wou want to delete this task"))
              return;
            await deleteTask(tasks._id);
          }}
        />
      </div>
    </div>
  );
}
