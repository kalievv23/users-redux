import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../layout/Header";
import Main from "../layout/Main";
import UserDetails from "./pages/UserDetails";
import { ToastContainer } from "react-toastify";
import DeleteUsers from "./pages/DeleteUsers";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="users" element={<Main />} />
          <Route path="users/:userID" element={<UserDetails />} />
          <Route path="delete_users" element={<DeleteUsers />} />
        </Route>
        <Route path="*" element={<h1>Noo</h1>} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={100}
        hideProgressBar={true}
        newestOnTop={false}
        // closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default MainRoutes;
