import React from "react";

const CerrarSesion = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h3>¿Deseas cerrar sesión?</h3>
      <button
        style={{
          backgroundColor: "#e74c3c",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "10px 20px",
          marginTop: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          console.log("Cerrar sesión presionado");
        }}
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default CerrarSesion;
