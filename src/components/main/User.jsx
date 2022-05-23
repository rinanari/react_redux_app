//компонент карточки юзера, который выводится на главную

import React from "react";

import "../styles/User.less";
import { useDispatch } from "react-redux";
import { openModal } from "../actions/users";
import Modal from "../Modal";
import { NavLink } from "react-router-dom";

const User = (props) => {
  const user = props.user;
  const dispatch = useDispatch();
  const dispatchSetModal = () => {
    dispatch(openModal())
  }

  return (
    <div className="user-card">
     
      <button onClick={ dispatchSetModal}>CLICK ME</button>
      
        <div className="user-card_name">
          <h2>
            {user.first_name} {user.last_name}
          </h2>
        </div>
      
      
        <img src={user.avatar} className="user-card_avatar" />
      
    </div>
  );
};

export default User;
