import React from "react";
import { useAuth } from "../auth/AuthProvider";

const Dashboard = () => {
  const { user } = useAuth();

  return <h1>Welcome, {user?.name}</h1>;
};

export default Dashboard;
