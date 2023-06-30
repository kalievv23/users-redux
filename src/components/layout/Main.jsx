import React from "react";
import Users from "../routes/pages/Users";
import { Outlet } from "react-router";

const Main = () => {
  return (
    <div>
      <Outlet />
      <Users />
    </div>
  );
};

export default Main;
