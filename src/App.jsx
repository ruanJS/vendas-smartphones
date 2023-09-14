import Rodape from "./components/Rodape";
import Lista from "./components/Lista";
import { Outlet } from "react-router-dom";
import VisualizarAparelho from "./routes/VisualizarAparelho";



export default function App() {
  return (
    <>
      <div>
        <Lista />
        <Outlet />
        <VisualizarAparelho />
        <Rodape />
      </div>
    </>
  );
}

