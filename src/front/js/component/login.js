import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Swal from "sweetalert2";

export const Login = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await actions.getLogin(data);
    console.log(response);
    if (response.access_token) {
      Swal.fire({
        title: "Bienvenido",
        text: "Inicio de Sesion Exitosa!",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/profile");
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email/Password incorrecto!",
        footer: "Por favor intente nuevamente!",
      });
    }
  };

  return (
    <div className="p-5 m-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={data.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChange}
            value={data.password}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
