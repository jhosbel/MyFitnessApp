"use client";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { ContextProvider } from "../context/Context";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-zinc-900 text-white items-center justify-center p-24">
      <div className="bg-gray-950 p-4 w-2/5">
        <h1 className="text-3xl font-bold text-center block my-2">Task App</h1>
        <ContextProvider>
          <TaskForm />
          <TaskList />
        </ContextProvider>
      </div>
    </main>
  );
}
