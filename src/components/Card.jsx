//компонент страницы юзера

import React, { useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getCurrentUser } from './actions/users';
import { useDispatch, useSelector } from "react-redux";
import './styles/card.less'

const Card = () => {
    const dispatch = useDispatch()
    const history = useNavigate()
    const {id} = useParams()
    const user = useSelector(state => state.user.data)
    

    useEffect(() => {
        dispatch(getCurrentUser(id))
    }, [])

    return (
        
        <div className='card-container'>
            
            
            <div className="info">
                <div className="avatar-container">
                    <img src={user.avatar} className='avatar' alt="Аватар пользователя" />
                </div>
                <div className="info-name-email">
                <h1>{user.first_name} {user.last_name}</h1>
               <div>Email:<a href={`mailto:${user.email}`}> {user.email}</a></div>
                </div>
            </div>
            
        </div>
    );
};

export default Card;