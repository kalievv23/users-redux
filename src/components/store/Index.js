import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ACTION_TYPE = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  PENDING: "PENDING",
  SPINNER_FALSE: "SPINNER_FALSE",
  SPINNER_TRUE: "SPINNER_TRUE",
  DELETE: "DELETE",
  VOSSTANOVIT: "VOSSTANOVIT"
};



const initialState = {
  array: [],
  isLoading: false,
  spinner: false,
  delete_items: []

};

const reduserFunc = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPE.SUCCESS:
      toastFunc({ type: "success", text: "Success!" });
      return {
        ...state,
        isLoading: false,
        array: action.payload,
      };
    case ACTION_TYPE.ERROR:
      toastFunc({ type: "error", text: "Error!" });
      return {
        ...state,
        isLoading: false,
      };
    case ACTION_TYPE.ABOUT_USER:
      return {
        ...state,
        isLoading: false,
      };
    case ACTION_TYPE.SPINNER_TRUE:
      return {
        ...state,
        spinner: true,
      };
    case ACTION_TYPE.SPINNER_FALSE:
      return {
        ...state,
        spinner: false,
      };
    case ACTION_TYPE.DELETE:
      return {
        ...state,
        delete_items: [...state.delete_items, action.payload]
      };
    case ACTION_TYPE.VOSSTANOVIT:
      return {
        ...state,
        delete_items: state.delete_items.filter(el => el.id !== action.payload)
      };

    default:
      return state;
  }
};

const rootReduser = combineReducers({
  reduserFunc,
});

export const store = createStore(rootReduser, applyMiddleware(thunk));

export const toastFunc = ({ type, text }) => {
  switch (type) {
    case "success":
      toast.success(text);
      break;
    case "error":
      toast.error(text);
      break;
    case "info":
      toast.info(text);
      break;
    default:
      break;
  }
};
