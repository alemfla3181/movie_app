/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { Link, withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <div className="rightMenu" mode={props.mode}>
        <li>
          <Link to="/login">Signin</Link>
        </li>
        <li>
          <Link to="/register" >Signup</Link>
        </li>
      </div>
    )
  } else {
    return (
      <div className="rightMenu" mode={props.mode}>
        <li>
          <a onClick={logoutHandler}>Logout</a>
        </li>
      </div>
    )
  }
}

export default withRouter(RightMenu);

