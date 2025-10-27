import { useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      <h1 className="text-3xl mb-4">Theme Toggle</h1>
      <button
        onClick={() => setDark(!dark)}
        className="bg-gray-800 text-white px-4 py-2 rounded"
      >
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;
