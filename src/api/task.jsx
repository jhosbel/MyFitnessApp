const API = "http://localhost:4000/api";

export const createTaskRequest = (task) =>
  fetch(`${API}/tasks`, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getTaskRequest = () => fetch(`${API}/tasks`);

export const deleteTaskRequest = (id) =>
  fetch(`${API}/tasks/${id}`, { method: "DELETE" });

export const updateTaskRequest = (id, task) =>
  fetch(`${API}/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
