import React from "react";
import { useAuth } from "../auth/AuthProvider";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      <a href="/dashboard">Dashboard</a>
      {user?.role === "admin" && <a href="/users">Users</a>}
      {user?.role === "admin" && <a href="/roles">Roles</a>}
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;
