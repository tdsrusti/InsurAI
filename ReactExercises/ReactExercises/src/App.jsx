import { Routes, Route, useNavigate } from "react-router-dom";
import Counter from "./Counter";
import TodoList from "./TodoList";
import Users from "./Users";
import SignupForm from "./SignupForm";
import ThemeToggle from "./ThemeToggle";

function App() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">React Exercises Hub</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          onClick={() => navigate("/counter")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl shadow"
        >
          Counter App
        </button>
        <button
          onClick={() => navigate("/todo")}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl shadow"
        >
          To-Do List
        </button>
        <button
          onClick={() => navigate("/users")}
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-2xl shadow"
        >
          Users List (API)
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-2xl shadow"
        >
          Signup Form
        </button>
        <button
          onClick={() => navigate("/theme")}
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-2xl shadow"
        >
          Theme Toggle
        </button>
      </div>

      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/theme" element={<ThemeToggle />} />
      </Routes>
    </div>
  );
}

export default App;