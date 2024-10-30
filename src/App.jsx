import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar programação2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar programação3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
