function Tarea({ tarea, onToggle }) {
    return (
      <div id="tareaagregada">
        <input
          type="checkbox"
          checked={tarea.estaCompleta}
          onChange={onToggle}
        />
        <p>{tarea.estaCompleta ? <s>{tarea.texto}</s> : tarea.texto}</p>
        {tarea.completada && (
          <span className="fecha-completada">
            ({new Date(tarea.completada).toLocaleTimeString()})
          </span>
        )}
      </div>
    );
  }
  
  export default Tarea;