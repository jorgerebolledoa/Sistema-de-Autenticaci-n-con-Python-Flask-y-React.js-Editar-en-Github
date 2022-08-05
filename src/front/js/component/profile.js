import React from "react";
export const Profile = () => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Validacion Exitosa
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>Validacion Exitosa, Tu informacion esta segura </strong>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            ¿Qué es JWT y para qué sirve?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>
              JSON Web Token (JWT) es un estándar abierto (RFC-7519) basado en
              JSON para crear un token que sirva para enviar datos entre
              aplicaciones o servicios y garantizar que sean válidos y seguros.
              El caso más común de uso de los JWT es para manejar la
              autenticación en aplicaciones móviles o web.
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};
