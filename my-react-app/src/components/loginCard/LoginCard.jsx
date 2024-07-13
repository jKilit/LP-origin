import React from 'react';
import LoginForm from '../loginForm/LoginForm';
import './loginCard.scss';

const LoginCard = () => {
  return (
    <div className="login-card">
      <h2>Login to Your Account</h2>
      <LoginForm />
    </div>
  );
};

export default LoginCard;
