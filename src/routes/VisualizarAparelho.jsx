import { useParams } from 'react-router-dom';
import { ListaAparelhos } from '../components/ListaAparelhos';

export default function VisualizarAparelho() {
  const { id } = useParams();
  
  const aparelho = ListaAparelhos.find((aparelhos) => aparelhos.id === parseInt(id));
  return (
    <div className="page">
        <h1>{aparelho.nome}</h1>
        <h2>{aparelho.desc}</h2>
        <img src={`${aparelho.img}`} alt={`${aparelho.desc}`} />
        <p>{aparelho.preco}</p>
        <button>Comprar Agora</button>
    </div>
  );
}



