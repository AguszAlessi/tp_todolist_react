function BotonTareaRapida({ onClick, resultado }) {
  return (
    <div className="AgregarTareas">
<div className="TareaMasRapida">
  <button onClick={onClick}>Mostrar tarea más rápida</button>
  {resultado && <div className="resultado-rapido">{resultado}</div>}
  </div>
  </div>
  );
}

export default BotonTareaRapida;