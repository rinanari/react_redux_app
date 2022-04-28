//Компонент главной страницы приложения

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../actions/users";
import User from "./User";
import '../styles/main.less'
import { setCurrentPage} from "../../reducers/usersReducer";

const Main = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.data)
    const currentPage = useSelector(state => state.users.currentPage)
    const isFetchError = useSelector(state => state.users.isFetchError)
    

    useEffect(()=>{
        dispatch(getUsers(currentPage))
    }, [currentPage])

    const pages = [1,2]



    return (
        <div className='users-app-container'>
            { isFetchError &&
            <div className="alert" role="alert">
                Произошла ошибка! Кажется, URL неверный!
            </div>
            }
            <div className="users-container">
                
                {users.map((user, id) =>
                    <User user={user} key={id}/>
                )}
            </div>
            <div className="pages">
                {pages.map((page, index) => 
                    <span key={index} 
                    className='page'
                    onClick={() => {
                        
                        dispatch(setCurrentPage(page))
                        
                        dispatch(getUsers(page))
                    }
                    }>{page}</span>)}
            </div>
        </div>      
    );
};

export default Main;