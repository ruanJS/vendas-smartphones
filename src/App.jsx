import Rodape from "./components/Rodape";
import Lista from "./components/Lista";
import { Outlet } from "react-router-dom";


export default function App() {
  return (
    <>
      <div>
        <Lista />
        <Outlet />
        <Rodape />
      </div>
    </>
  );
}

