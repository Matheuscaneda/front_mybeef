import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import Atingir_metas from './routes/atingir_metas';
import Calibrar from './routes/calibrar';
import Estoque_animal from './routes/estoque_animal';
import Limite_investimento from './routes/limite_investimento';
import Menu_principal from './routes/menu_principal';
import Resultado_limite_investimento from './routes/resultado_limite_investimento';
import Resultado_meta_area from './routes/resultado_meta_area';
import Resultado_meta_vaca from './routes/resultado_meta_tmf';
import Resultado_meta_tmf from './routes/resultado_meta_tmf';
import Resultado_meta_novilho from './routes/resultado_meta_novilho';
import Resultado_simulacao from './routes/resultado_simulacao';
import Simulacao_base from './routes/simulacao_base';
import Inicial from './routes/inicial';


const router = createBrowserRouter([
{
  path: "/",
  element: <App/>,
  children: [
    {
        path: "/",
        element: <Inicial/>
    },
    {
        path: "/menu_principal",
        element: <Menu_principal/>
    },
    {
      path: "/atingir_metas",
      element: <Atingir_metas/>
    },
    {
      path: "/calibrar",
      element: <Calibrar/>
    },
    {
      path: "/estoque_animal",
      element: <Estoque_animal/>
    },
    {
      path: "/limite_investimento",
      element: <Limite_investimento/>
    },
    {
      path: "/resultado_limite_investimento",
      element: <Resultado_limite_investimento/>
    },
    {
      path: "/resultado_meta_area",
      element: <Resultado_meta_area/>
    },
    {
      path: "/resultado_meta_vaca",
      element: <Resultado_meta_vaca/>
    },
    {
      path: "/resultado_meta_novilho",
      element: <Resultado_meta_novilho/>
    },
    {
      path: "/resultado_meta_tmf",
      element: <Resultado_meta_tmf/>
    },
    {
      path: "/resultado_simulacao",
      element: <Resultado_simulacao/>
    },
    {
      path: "/simulacao_base",
      element: <Simulacao_base/>
    }
  ]
},


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
