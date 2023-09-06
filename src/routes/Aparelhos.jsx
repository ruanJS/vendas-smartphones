import React from 'react';
import { Link } from "react-router-dom";
import { ListaAparelhos } from "../components/ListaAparelhos"; 

export default function Aparelhos(){
  
  document.title = "Aparelhos";

  return (
    <>
    <div>
      <h2>Aparelhos</h2>
      <ul>
        {ListaAparelhos.map(ListaAparelhos => (
          <li key={ListaAparelhos.id}>
            <Link to={`/lista/aparelhos/${ListaAparelhos.id}`}>
              {ListaAparelhos.nome}          
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

