import React from "react";
import axios from "axios";
import coverLogo from "./img/convert1.png";

const MoedaUSD = () => {
  const apiUsd = axios.create({
    baseURL: "https://economia.awesomeapi.com.br/last/",
  });
  const [moeda, setMoeda] = React.useState({});
  const [inputUsd, setInputUsd] = React.useState(0);

  async function pegarValor() {
    const moedaUsd = await apiUsd.get("USD");
    setMoeda(moedaUsd.data.USDBRL);
  }
  let soma = (inputUsd / moeda.high).toFixed(2);
  let soma2 = (moeda.high * inputUsd).toFixed(2);

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
      <div>
        <h2>Real para USD / USD para Real</h2>
        <input
          className="inpValor"
          type="number"
          value={inputUsd}
          onChange={(e) => setInputUsd(e.target.value)}
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
        <h3>Real para Dólar: {soma === "NaN" ? "" : `$ ${soma}`}</h3>
        <h3>Dólar para Real: {soma === "NaN" ? "" : `R$ ${soma2}`}</h3>
      </div>
      <img className="" id={rodar >= 1 ? 'logoRodar' : 'logo'} src={coverLogo} alt='logo'/>
    </>
  );
};

export default MoedaUSD;
