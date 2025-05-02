function Tarea({ tarea, onToggle }) {
    return (
      <li onClick={onToggle} style={{ cursor: 'pointer' }}>
        {tarea.estaCompleta ? <s>{tarea.texto}</s> : tarea.texto}
      </li>
    );
  }
  
  export default Tarea;