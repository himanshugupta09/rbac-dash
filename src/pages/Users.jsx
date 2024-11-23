import React, { useEffect, useState } from "react";
import { fetchUsers } from "../api/api";
import UserForm from "../components/UserForm";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <UserForm onSubmit={(user) => console.log(user)} />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
