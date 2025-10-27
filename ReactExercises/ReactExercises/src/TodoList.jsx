import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-3">To-Do List</h2>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="border p-2 rounded w-64"
      />
      <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Add</button>

      <ul className="mt-4">
        {tasks.map((t, index) => (
          <li key={index} className="flex justify-center items-center mt-2">
            <span className="mr-4">{t}</span>
            <button onClick={() => removeTask(index)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
