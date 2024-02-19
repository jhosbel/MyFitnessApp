"use client";
import { createContext, useState, useEffect } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getTaskRequest,
  updateTaskRequest,
} from "@/api/task";

export const TaskContext = createContext({
  tasks: [],
  createTask: async () => {},
  deleteTask: async () => {},
  updateTask: async () => {},
});

export const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTaskRequest()
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const createTask = async (task) => {
    const res = await createTaskRequest(task);
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  const deleteTask = async (id) => {
    const res = await deleteTaskRequest(id);
    if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
  };

  const updateTask = async (id, task) => {
    const res = await updateTaskRequest(id, task);
    const data = await res.json();
    setTasks(
      tasks.map((task) => (task._id === id ? { ...task, ...data } : task))
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
