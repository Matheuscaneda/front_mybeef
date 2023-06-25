import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import * as Sentry from "@sentry/react";


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
import Sensibilidade from './routes/sensibilidade';
import Tabela_produtividade from './routes/gera_tabela_produtividade';
import Resultado_Tabela_produtividade from './routes/result_tabela_produtividade';
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react';


Sentry.init({
  dsn: "https://8344e354c1b84aeab25402bb75c8a20e@bug.embrapa.io/95",
  integrations: [
    new Sentry.BrowserTracing({
      // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    }),
    new Sentry.Replay()
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});



const instance = createInstance({
  urlBase: 'https://LINK.TO.DOMAIN',
  siteId: 113,
  userId: 'UID76903202', // optional, default value: `undefined`.
  trackerUrl: 'https://LINK.TO.DOMAIN/tracking.php', // optional, default value: `${urlBase}matomo.php`
  srcUrl: 'https://LINK.TO.DOMAIN/tracking.js', // optional, default value: `${urlBase}matomo.js`
  disabled: false, // optional, false by default. Makes all tracking calls no-ops if set to true.
  heartBeat: { // optional, enabled by default
    active: true, // optional, default value: true
    seconds: 10 // optional, default value: `15
  },
  linkTracking: false, // optional, default value: true
  configurations: { // optional, default value: {}
    // any valid matomo configuration, all below are optional
    disableCookies: true,
    setSecureCookie: true,
    setRequestMethod: 'POST'
  }
})

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
    },
    {
      path: "/sensibilidade",
      element: <Sensibilidade/>
    },
    {
      path: "/gera_tabela_produtividade",
      element: <Tabela_produtividade/>
    },
    {
      path: "/result_tabela_produtividade",
      element: <Resultado_Tabela_produtividade/>
    },
  ]
},


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MatomoProvider value={instance}>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </MatomoProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
