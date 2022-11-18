import App from "./App.css";
import React from "react";

import Primeiro from "./components/Primeiro.jsx";
import ComParametro from "./components/ComParametro.jsx";
import ComFilhos from "./components/ComFilhos.jsx";
import Card from "./components/layout/Card.jsx";

export default (props) => (
  <div className="App"> 
    <Card titulo="Componente com filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo="Componente com parametro">
      <ComParametro titulo="Esse eh o titulo" subtitulo="Esse eh o subtitulo"/>
    </Card>
    
      <Card titulo="Primeiro Componente">
        <Primeiro />
    </Card>
  </div>
);
