import "./layout.scss";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Header />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);
  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
    <div className="layout">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function RequireRole({ role }) {
  const { currentUser } = useContext(AuthContext);
  console.log("currentUser:", currentUser?.role);

  if (currentUser?.role !== role) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="layout">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export { Layout, RequireAuth, RequireRole };
