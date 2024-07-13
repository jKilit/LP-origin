import React  from "react";
import { Form, Button } from "react-bootstrap";
import "./loginForm.scss";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import  {AuthContext}  from "../../context/AuthContext";
import { useContext, useState } from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);
  const [error, setError ] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
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
    <Form className="login-form" onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          placeholder="Enter username"
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit" className="login-button">
        Login
      </Button>
      {error && <p className="error-message">{error}</p>}
    </Form>
  );
};

export default LoginForm;
