//компонент карточки юзера, который выводится на главную

import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/User.less'

const User = (props) => {
    const user = props.user

    return (
        
        <div className="user-card">
            <NavLink to ={`/card/${user.id}`} className='link'>
                <div className="user-card_name">
                    <h2>{user.first_name} {user.last_name}</h2>
                     
                    </div>
            </NavLink>
            <NavLink to ={`/card/${user.id}`} className='link'>
            <img src={user.avatar} className="user-card_avatar" />
            </NavLink>
        </div>
    );
};

export default User;