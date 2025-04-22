function BotonTareaRapida({ onClick, resultado }) {
  return (
    <div className="ResultadoRapido">
      <button onClick={onClick}>Mostrar tarea más rápida</button>
      {resultado && <p>{resultado}</p>}
    </div>
  );
}

export default BotonTareaRapida;