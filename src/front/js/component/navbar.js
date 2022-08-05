import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        {store.currentUser === null ? (
          <Link to="/register">
            <button type="button" className="btn btn-primary">
              register
            </button>
          </Link>
        ) : (
          <Link to="/profile">
            <button type="button" className="btn btn-primary">
              profile
            </button>
          </Link>
        )}
        {store.currentUser === null ? (
          <Link to="/login">
            <button type="button" className="btn btn-primary">
              login
            </button>
          </Link>
        ) : (
          <Link to="/">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => actions.getLogout()}
            >
              logout
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};
