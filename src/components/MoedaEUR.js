import React from "react";
import axios from "axios";
import coverLogo from "./img/convert1.png";


const MoedaEUR = () => {
  const apiUsd = axios.create({
    baseURL: "https://economia.awesomeapi.com.br/last/",
  });
  const [moeda, setMoeda] = React.useState({});
  const [inputEur, setinputEur] = React.useState(0);

  async function pegarValor() {
    const moedaUsd = await apiUsd.get("EUR");
    setMoeda(moedaUsd.data.EURBRL);
  }
  let soma = (inputEur / moeda.high).toFixed(2);
  let soma2 = (moeda.high * inputEur).toFixed(2);

  const [rodar,setRodar] = React.useState(0)

  function handleClick(){
      setRodar(rodar + 1)

      if(rodar >= 1){
          setRodar(0)
      } else {
          return null;
      }
  }


  return (
    <>
        <img id={rodar >= 1 ? 'logoRodar' : 'logo'} src={coverLogo} alt='logo'/>
      <div>
        <h2>Real para EUR / EUR para Real</h2>
        <input
          className="inpValor"
          type="number"
          value={inputEur}
          onChange={(e) => setinputEur(e.target.value)}
        />
        <button
          className="btnValor"
          onClick={() => {
            handleClick()
            pegarValor();
            return soma;
          }}
        >
          Pegar Valor
        </button>
        <h3>Real para Euro: {soma === "NaN" ? "" : ` € ${soma}`}</h3>
        <h3>Euro para Real: {soma2 === "NaN" ? "" : ` R$ ${soma2}`}</h3>
      </div>
    </>
  );
};

export default MoedaEUR;
