import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './routes/Home.jsx';
import Erro404 from './routes/Erro404.jsx';
import VisualizarAparelho from './routes/VisualizarAparelho.jsx';
import Aparelhos from './routes/Aparelhos.jsx';

const router = createBrowserRouter([
  { path: '/' , element: <App/>,
    errorElement: <Erro404/>,
    children: [
      { path: '/' , element: <Home/>},
      { path: '/aparelhos' , element: <Aparelhos/>},
      { path: '/visualizar/aparelho/:id' , element: <VisualizarAparelho/>},

      { 
        path: "/antiga",
        element: <Navigate to="/"/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)