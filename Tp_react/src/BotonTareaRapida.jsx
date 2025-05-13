import './Boton.css'
function BotonTareaRapida({ onClick, resultado }) {
  return (
    <div className="AgregarTareas">

  <button onClick={onClick}>Mostrar tarea más rápida</button>
  {resultado && <div className="resultado-rapido">{resultado}</div>}
  </div>
  );
}

export default BotonTareaRapida;