import { Link } from "react-router-dom";
import { ListaAparelhos } from "../components/ListaAparelhos";

export default function Aparelhos(){

    document.title = "Aparelhos";

    return(
      <>
      <div className="container-aparelhos">
        <h1>Aparelhos disponíveis</h1>
        <ul className="container-ul">
          {ListaAparelhos.map(aparelhos => (
            <li key={aparelhos.id}>
              <Link to={`/visualizar/aparelho/${aparelhos.id}`}>
                {aparelhos.nome}
              </Link>
            </li>
          ))}
        </ul>
    </div>
      </>
    )
}