import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ACTION_TYPE, toastFunc } from "../../store/Index";
import { getRequest } from "../../store/FetchReduser";

const Users = () => {
  const { array, delete_items } = useSelector((prev) => prev.reduserFunc);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const spinnerHandler = (id) => {
    const find = delete_items.find((el) => el.id == id);
    if (find) {
      toastFunc({ type: "error", text: "User is deleted!" });
    }
    if (!find) {
      navigate(id.toString());
      dispatch({ type: ACTION_TYPE.SPINNER_TRUE });
      setTimeout(() => {
        dispatch({ type: ACTION_TYPE.SPINNER_FALSE });
      }, 500);
    }
  };

  const getData = () => {
    dispatch(getRequest());
  };

  return (
    <div className="users">
      {array.length !== 0 ? (
        <>
          <h1>Users:</h1>
          {array.map((el) => (
            <>
              <span key={el.id} className="userName" onClick={() => spinnerHandler(el.id)}>
                {el.name}
              </span>
            </>
          ))}
        </>
      ) : (
        <>
          <h1>Not Found!</h1>
          <button onClick={getData}>TO RUN</button>
        </>
      )}
    </div>
  );
};

export default Users;
