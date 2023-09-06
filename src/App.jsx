import Rodape from "./components/Rodape";
import Lista from "./components/Lista";
import { Outlet } from "react-router-dom";


export default function App() {
  return (
    <>
      <div className="App">
        <Lista />
        <Outlet />
          {/* <Route path="/" exact component={Home} />
          <Route path="/aparelhos" exact component={Aparelhos} />
          <Route path="/aparelhos/:id" component={VisualizarAparelho} />
          <Route component={Erro404} /> */}
        <Rodape />
      </div>
    </>
  );
}

