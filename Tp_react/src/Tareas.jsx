import React from 'react'

import Tarea from "./Tarea";
 import './Tareas.css'


function Tareas({ tareas, onToggle }) {
  if (!tareas) return null;
  return (
    <div className = "Tareas">
      <ul>
      {tareas.map((tarea, i) => (
        <Tarea key={i} tarea={tarea} onToggle={() => onToggle(i)} />
      ))}
    </ul>
    </div>
    
  );
}

export default Tareas;
