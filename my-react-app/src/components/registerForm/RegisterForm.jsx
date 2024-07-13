import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./registerForm.scss";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const email = formData.get("email");
    const confirmPassword = formData.get("confirmPassword");

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        password,
        email,
        confirmPassword,
      });
      console.log(res.data.message);
      updateUser(res.data.user);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
    }
  };

  return (
    <Form className="register-form" onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          placeholder="Enter username"
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Form.Group controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
      </Form.Group>
      {error && <p className="error">{error}</p>}

      <Button variant="primary" type="submit" className="register-button">
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
