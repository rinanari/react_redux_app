//получаю информацию с апи

import axios from "axios";
import { setFetchError, setTotalPages, setUsers } from "../../reducers/usersReducer";
import { setUser } from "../../reducers/userReducer";

export const getUsers = (currentPage) => {
    return async (dispatch) => {
    try {
        const response = await axios.get(`https://reqres.in/api/users?page=${currentPage}`) 
        
        dispatch(setUsers(response.data))        
         
                    
    } catch (e) {
        dispatch(setFetchError(true))

    }
  }
}

export const getCurrentUser = (id) => {
        return async (dispatch) => {
            try {
                let response = await axios.get(`https://reqres.in/api/users/${id}`)
                dispatch(setUser(response.data))
            } catch (e) {
                dispatch(setFetchError(true))
            }
            

        }
    
    }

    