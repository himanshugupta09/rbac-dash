import React, { useState, useEffect } from "react";
import axios from "../api/api";

const Roles = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get("/roles").then((res) => setRoles(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Roles</h1>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>{role.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Roles;
