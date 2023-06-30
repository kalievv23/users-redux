import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ACTION_TYPE, toastFunc } from "../../store/Index";

const DeleteUsers = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const { deleteUsers } = JSON.parse(localStorage.getItem("delete_items"));
  
  const [state, setState] = useState(deleteUsers) 

  const vosstanovitHandler = (id) => {
    toastFunc({type: "success", text: "Vosstanovleno!"})
    const items =  state.filter(el => el.id !== id)
    dispatch({type: ACTION_TYPE.VOSSTANOVIT, payload: id})
    localStorage.setItem("delete_items", JSON.stringify(items))
    setState(items)
  }

  return (
    <div className="users">
      {state.length !== 0 ? (
        <>
          <h2>Deleted Users:</h2>
          {state.map((el) => (
            <div className="userNameWithIconVosstanovleniya">
              <del key={el.id}>{el.name}</del>
              <img
                className="iconVosstanovleniya"
                onClick={() => vosstanovitHandler(el.id)}
                src="https://icons.veryicon.com/png/o/miscellaneous/utility/undelete.png"
                alt="Vosstanit User"
              />
            </div>
          ))}
        </>
      ) : (
        <>
          <h2>
            Удаленных <br /> пользователей нету!
          </h2>
          <button onClick={() => navigate(-1)}>BACK</button>
        </>
      )}
    </div>
  );
};

export default DeleteUsers;
