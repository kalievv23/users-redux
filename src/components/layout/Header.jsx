import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getRequest } from "../store/FetchReduser";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

const Header = () => {
  const { isLoading, delete_items } = useSelector((prev) => prev.reduserFunc);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = () => {
    dispatch(getRequest());
    navigate("users");
  };

  const deleted_items = {
    deleteUsers: delete_items,
  };

  localStorage.setItem("delete_items", JSON.stringify(deleted_items));

  const showDeletedUsers = () => {
    navigate('delete_users')
  }

  return (
    <div>
      <header>
        <b>USERS</b>
        <div className="toRunWithDeleteImg">
          <span onClick={getData}>TO RUN</span>
          <img onClick={showDeletedUsers} className="deleteImg" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delete-1432400-1211078.png" alt="" />
        </div>
      </header>
      <Outlet />
      {isLoading && (
        <div className="spinner">
          <BeatLoader color="#aeaeae" />
        </div>
      )}
    </div>
  );
};

export default Header;
