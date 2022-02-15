import React from "react";
import "./App.css";
import MoedaEUR from "./components/MoedaEUR";
import MoedaUSD from "./components/MoedaUSD";

function App() {


  return (
    <>
      <div id="ci">
        <h1 id="title">Conversor de Moedas </h1>
      </div>
      <div className="container-moedas">
        <MoedaUSD />

        <MoedaEUR/>
      </div>
    </>
  );
}

export default App;
