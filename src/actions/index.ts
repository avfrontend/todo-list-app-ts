import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./type";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = "http://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch({
      type: ActionTypes.fetchTodos,
      playload: response.data,
    });
  };
};
