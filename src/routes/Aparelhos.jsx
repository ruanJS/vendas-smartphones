import React from 'react';
import { Link } from 'react-router-dom';

function Aparelhos() {
  return (
    <div>
      <h2>Aparelhos Disponiveís</h2>
      <ul>
        <li>
          <Link to="aparelhos/1">iPhone 13</Link>
        </li>
        <li>
          <Link to="aparelhos/2">iPhone 14</Link>
        </li>
        <li>
          <Link to="aparelhos/1">iPhone 14 Pro Max</Link>
        </li>
        <li>
          <Link to="aparelhos/2">iPad</Link>
        </li>
        <li>
          <Link to="aparelhos/1">iPad Pro</Link>
        </li>
        {/* Adicione mais links para outros aparelhos */}
      </ul>
    </div>
  );
}

export default Aparelhos;
