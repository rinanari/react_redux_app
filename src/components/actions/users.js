//получаю информацию с апи

import axios from "axios";
import { setFetchError, setUsers } from "../../reducers/usersReducer";
import {  setUser } from "../../reducers/userReducer";
import { setModal } from "../../reducers/modalReducer";
import { setActiveList } from "../../reducers/listReducer";

export const getUsers = (currentPage) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${currentPage}`
      );
      dispatch(setUsers(response.data));
    } catch (e) {
      dispatch(setFetchError(true));
    }
  };
};

export  const openModal = ()  => {
  return setModal(true)
  
}
export  const closeModal = ()  => {
  return setModal(false)
  
}
export  const activateList = ()  => {
  return setActiveList(true)  
}


export const getCurrentUser = (id) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`https://reqres.in/api/users/${id}`);
      dispatch(setUser(response.data));
    } catch (e) {
      dispatch(setFetchError(true));
    }
  };
};

