import React, { Element, Component } from 'react';
import { Navigate } from 'react-router-dom';

const LoginView = props =>
  (
    <div id= 'login'> 
      <input id='username'></input>
      <input id='password'></input>
      <button id='submit' onClick={() => props.validateUser(document.getElementById('username').value, document.getElementById('password').value)}>Login</button>
      <button id='gitButton' onClick={()=> props.goToGit()}>SIGN UP WITH GITHUB</button>
      <button id='signup' onClick={()=> props.showView('signup')}>signup</button>
      { props.isValidUser && (<Navigate id='gameNavigation' state={{username: props.username}} to='/startpage'/>)}
    </div>
  );

export default LoginView;