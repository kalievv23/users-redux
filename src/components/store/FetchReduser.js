import { ACTION_TYPE } from "./Index";

export const getRequest = () => {
    return async (dispatch) => {
        dispatch({ type: ACTION_TYPE.PENDING });
    try {
      const rest = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await rest.json();
      if (rest.status !== 200) {
        throw new Error();
      }
      dispatch({ type: ACTION_TYPE.SUCCESS, payload: result });
    } catch (error) {
      dispatch({ type: ACTION_TYPE.ERROR });
      console.log("error");
    }
  };
};
