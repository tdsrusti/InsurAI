import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      {users.map(user => (
        <div key={user.id} className="border p-3 rounded mb-2 w-80 mx-auto">
          <h3 className="font-semibold">{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
