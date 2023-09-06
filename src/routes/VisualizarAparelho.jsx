import { useParams } from 'react-router-dom';

//criando uma página para visualizar os detalhes de um aparelho
export default function VisualizarAparelho({ aparelhos }) {
  const { id } = useParams();
  const aparelho = aparelho.find((item) => item.id === parseInt(id));

  if (!aparelho) {
    return <div className="page">Aparelho não encontrado</div>;
  }

  return (
    <div className="page">
      <h2>Detalhes do Aparelho</h2>
      <div className="device-details">
        <img src={"./public/iphone-14.png"} alt={iphone.png} />
        <h3>{aparelho.nome}</h3>
        <p>{aparelho.descricao}</p>
        <p>Marca: {aparelho.marca}</p>
        <p>Preço: R$ {aparelho.preco.toFixed(2)}</p>
        <button>Comprar Agora</button>
      </div>
    </div>
  );
}

