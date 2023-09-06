import React from 'react';
import { Link } from "react-router-dom";
import { ListaAparelhos } from "../components/ListaAparelhos"; 

export default function Aparelhos(){
  // const { id } = useParams();
  // const aparelhos = aparelhos.find((item) => item.id === parseInt(id));

  // const aparelhos = [
  //   {
  //     id: 1,
  //     nome: 'iPhone 12',
  //     marca: 'Apple',
  //     preco: 3299.99,
  //     descricao: 'O iPhone 12 oferece desempenho incrível e uma incrível tela Super Retina XDR.',
  //     imagem: 'iphone12.jpg',
  //   },
  //   {
  //     id: 2,
  //     nome: 'iPhone SE',
  //     marca: 'Apple',
  //     preco: 1999.99,
  //     descricao: 'O iPhone SE é poderoso e acessível, perfeito para quem busca o essencial.',
  //     imagem: 'iphonese.jpg',
  //   },
  // ];


  return (
    <>
    <div>
      <h2>Aparelhos:</h2>
      <ul>
        {ListaAparelhos.map(ListaAparelhos => (
          <li key={ListaAparelho.id}>
            <Link to={`/lista/aparelhos/${ListaAparelhos.id}`}>
              {ListaAparelhos.nome}          
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
    </>
  );
}

