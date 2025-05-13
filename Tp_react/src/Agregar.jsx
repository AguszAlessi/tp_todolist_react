import { useState } from "react";
import './Agregar.css'

function Agregar({ onAgregar }) {
  const [texto, setTexto] = useState("");

  const handleClick = () => {
    if (texto.trim()) {
      onAgregar(texto.trim());
      setTexto("");
    }
  };

  return (
    <div className="AgregarTareas">
      <input
        type="text"
        placeholder="Escribí tu tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={handleClick}>Subir Tarea</button>
    </div>
  );
}

export default Agregar;