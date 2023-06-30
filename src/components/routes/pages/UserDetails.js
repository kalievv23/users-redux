import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { BeatLoader } from "react-spinners";
import { ACTION_TYPE, toastFunc } from "../../store/Index";
import Modal from "./Modal";
import { useSearchParams } from "react-router-dom";

const UserDetails = () => {
  const { userID } = useParams();

  const { array, spinner, delete_items } = useSelector(
    (prev) => prev.reduserFunc
  );

  const dispath = useDispatch();

  const navigate = useNavigate();

  const user = array.find((el) => {
    return el.id == userID;
  });

  const [searchParam, setSearchParam] = useSearchParams();
  // console.log([...searchParam.values()]);
  // console.log(searchParam.get("modal"));

  const find = delete_items.find((el) => el.id == user.id);

  const showModalHandler = () => {
    if (!find) {
      searchParam.set("modal", "deleteUser");
      setSearchParam(searchParam);
    }
    if (find) {
      toastFunc({ type: "error", text: "User давно было удалено!" });
    }
  };
  const closeModalHandler = () => {
    searchParam.delete("modal", "deleteUser");
    setSearchParam(searchParam);
  };

  const deleteUser = () => {
    if (!find) {
      toastFunc({ type: "success", text: "User удалено!" });
      dispath({ type: ACTION_TYPE.DELETE, payload: user });
    }
    searchParam.delete("modal", "deleteUser");
    setSearchParam(searchParam);
    setTimeout(() => {
      navigate("/users");
    }, 700);
  };

  return (
    <>
      {searchParam.get("modal") && (
        <Modal>
          <div>
            <h3>
              Вы точно хотите удалить <br /> этот Пользователь?
            </h3>
            <hr />
            <div className="buttons">
              <button onClick={closeModalHandler}>Нет</button>
              <button onClick={deleteUser}>Да</button>
            </div>
          </div>
        </Modal>
      )}
      {!spinner && (
        <div>
          {user ? (
            <div className="aboutUser">
              <h1>About User:</h1>
              <label htmlFor="">Name:</label>
              <b>{user.name}</b>
              <label htmlFor="">Email:</label>
              <b>{user.email}</b>
              <label htmlFor="">Phone:</label>
              <b>📞{user.phone}</b>
              <hr />
              <button onClick={showModalHandler}>DELETE</button>
            </div>
          ) : (
            <h1>No information!</h1>
          )}
          <button onClick={() => navigate("/users")}>BACK</button>
        </div>
      )}
      {spinner && (
        <div style={{ marginTop: "250px" }}>
          <BeatLoader color="#aeaeae" />
        </div>
      )}
    </>
  );
};

export default UserDetails;
