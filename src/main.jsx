import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './routes/Home.jsx';
import Erro404 from './routes/Erro404.jsx';
import Aparelhos from './routes/Aparelhos.jsx';
import VisualizarAparelho from './routes/VisualizarAparelho.jsx';
import { ListaAparelhos } from "./components/ListaAparelhos";

const router = createBrowserRouter([
  { path: '/' , element: <App/>,
    errorElement: <Erro404/>,
    children: [
      { path: '/' , element: <Home/>},
      { path: '/aparelhos' , element: <Aparelhos/>},
      { path: '/visualizar/aparelhos/:id' , element: <VisualizarAparelho/>},
      { path: '/lista/aparelhos/:id' , element: <ListaAparelhos/>}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
