import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards.js';
import Productos from '../Data/Productos.js'; 
import './style.css';

const Notebooks = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const notebooks = Productos.notebooks;
        setProductos(notebooks);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al cargar datos', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-alert">Cargando...</div>
        </div>
      ) : (
        <div className="Contenedor">
          {productos.map((op) => (
            <Cards
              key={op.id}
              modelo={op.modelo}
              color={op.color}
              precio={op.precio}
              detalle={op.detalle}
              id={op.id}
              categoria="notebooks" 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Notebooks;
