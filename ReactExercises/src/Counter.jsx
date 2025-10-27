import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-3">Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="bg-green-500 text-white px-4 py-2 rounded m-1">+</button>
      <button onClick={() => setCount(count - 1)} className="bg-red-500 text-white px-4 py-2 rounded m-1">-</button>
      <button onClick={() => setCount(0)} className="bg-gray-500 text-white px-4 py-2 rounded m-1">Reset</button>
    </div>
  );
}

export default Counter;
