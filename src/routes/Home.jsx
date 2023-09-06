import React from 'react';
import { Link } from "react-router-dom";

//criando duas propagandas promocionais
export default function Home() {
  <Link to="/Lista/aparelho/">Ver aparelho</Link>
  return (
    <>
    <div className="page">
    <h2>Promoções:</h2>
    <div className="promotion">
      <h3>iPhone 12 - Super Desconto!</h3>
      <p>Aproveite nossa promoção exclusiva no iPhone 12. Compre agora e economize.</p>
      <img src="iphone-12.png" alt="iPhone 12" />
      <button>Comprar Agora</button>
    </div>
    <div className="promotion">
      <h3>iPhone SE - Oferta Especial!</h3>
      <p>Adquira o iPhone SE com um preço especial por tempo limitado. Não perca esta oportunidade.</p>
      <img src="iphone-se.png" alt="iPhone SE" />
      <button>Comprar Agora</button>
    </div>
  </div>
    </>
  );
}


