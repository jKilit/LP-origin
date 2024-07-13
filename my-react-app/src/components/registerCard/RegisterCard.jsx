import React from 'react';
import RegisterForm from '../registerForm/RegisterForm';
import './registerCard.scss';

const RegisterCard = () => {
  return (
    <div className="register-card">
      <h2>Create Your Account</h2>
      <RegisterForm />
    </div>
  );
};

export default RegisterCard;
