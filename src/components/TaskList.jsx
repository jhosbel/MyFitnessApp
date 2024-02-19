import TaskItem from "./TaskItem";
import { useTasks } from "@/context/useTasks";

export default function TaskList() {
  const { tasks } = useTasks();
  

  return (
    <div>
      {tasks.map((tasks) => (
        <TaskItem tasks={tasks} key={tasks._id} />
      ))}
    </div>
  );
}
