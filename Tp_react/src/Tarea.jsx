import Tarea from "./Tarea";

function Tareas({ tareas, onToggle }) {
  if (!tareas) return null;
  return (
    <ul>
      {tareas.map((tarea, i) => (
        <Tarea key={i} tarea={tarea} onToggle={() => onToggle(i)} />
      ))}
    </ul>
  );
}

export default Tareas;
