import React, { useState } from 'react';
import Agregar from './Agregar';
import BotonTareaRapida from './BotonTareaRapida';
import Tareas from './Tareas';


export default function App()
{

  const [tareas, setTareas] = useState([]);
  const [masRapida, setMasRapida] = useState(null);

  const agregartarea = (text) =>
  {
    const nueva = {
      texto: text,
      creada: new Date(),
      completada: null,
      estaCompleta: false  
      };
    setTareas([...tareas,nueva])
  }

  const toggleTarea = (i) => {
    const nuevas = [...tareas];
    const tarea = nuevas[i];
    tarea.estaCompleta = !tarea.estaCompleta;
    tarea.completada = tarea.estaCompleta ? new Date() : null;
    setTareas(nuevas);
  };

  const TareaMasRapida = () =>
  {
    const completadas = tareas.filter(t=> t.estaCompleta && t.completada);
    if (completadas.length === 0)
    {
      return alert("No hay tareas");
    }
    else
    {
      const masRapida = completadas.reduce((a,b) =>
      {
        const Tiempoa = a.completada - a.creada;
        const Tiempob = b.completada - b.creada;
        return Tiempoa<Tiempob ? a:b;
      })
      const duracion = (masRapida.completada - masRapida.creada) / 1000;
    setMasRapida(`Tarea más rápida: "${masRapida.texto}" en ${duracion.toFixed(2)} segundos.`);
    }
    
  }

  return (
    <div className="App">
      <h1>TODO List</h1>
  
      <Agregar onAgregar={agregartarea} />
      <BotonTareaRapida onClick={TareaMasRapida} resultado={masRapida} />
      <Tareas tareas={tareas} onToggle={toggleTarea} />
  
    </div>
  );
}
