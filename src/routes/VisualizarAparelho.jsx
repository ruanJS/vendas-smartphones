import React from 'react';
import { useParams } from 'react-router-dom';

export default function VisualizarAparelho() {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalhes do Aparelho {id}</h2>
      {/* Conteúdo dos detalhes do aparelho */}
    </div>
  );
}


