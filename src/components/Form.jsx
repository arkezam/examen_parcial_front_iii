import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    color: "",
  });

  const [mostrarCard, setMostrarCard] = useState(false);
  const [mostrarError, setMostrarError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (datos.nombre.trim().length >= 3 && datos.color.length >= 6) {
      setMostrarCard(true);
    } else {
      setMostrarError(true);
    }
  };

  return (
    <div>
      {mostrarCard ? (
        <Card nombre={datos.nombre} color={datos.color} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            placeholder="Ingresa tu Nombre"
            onChange={(event) =>
              setDatos({ ...datos, nombre: event.target.value })
            }
          /> <br />
          <label htmlFor="">Color</label>
          <input
            type="text"
            placeholder="tu color favorito en formato HEX"
            onChange={(event) =>
              setDatos({ ...datos, color: event.target.value })
            }
          /> <br /> Ejemplo: #eb4034 <br />
          <button>ENVIAR</button>
          {mostrarError && (
            <h4 style={{ color: "red" }}>
              Coloque la información correctamente
            </h4>
          )}
        </form>
      )}
    </div>
  );
};

export default Form;
