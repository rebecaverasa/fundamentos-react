import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

import Primeiro from "./components/Primeiro.jsx";
import ComParametro from "./components/ComParametro.jsx";

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <ComParametro
      Titulo="esse eh o titulo"
      Subtitulo="esse eh o subtitulo"
    ></ComParametro>

    <ComParametro
      Titulo="opa"
      Subtitulo="epa"
    ></ComParametro>
  </div>,

  document.getElementById("root")
);
