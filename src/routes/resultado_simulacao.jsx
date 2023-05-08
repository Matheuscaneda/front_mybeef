/* eslint-disable react/jsx-pascal-case */
import "../App.css";
import { Button } from "../components/button/button";
import { Speedometer } from "../components/speedometer/speedometer";
import { useLocation } from "react-router-dom/dist";

function resultado_simulacao() {
  const { state } = useLocation();
  const simulador = state.simulador;
  debugger;
  return (
    <div className="parent">
      <div className="div1">
        <h1> Resultado da simulação</h1>
      </div>

      <div className="div2">
        <div className="dials">
          <Speedometer
            id="dial5"
            value={simulador.desfrute_percentual_kg}
            title="Desfrute"
            suffix="%"
          />
        </div>
      </div>
      <div className="div3">
        <div className="dials">
          <Speedometer
            id="dial5"
            value={simulador.produtividade_por_area}
            title="Produtividade"
            suffix="Kg/Ha"
            max={180}
          />
        </div>
      </div>

      <div className="div4">
        <div className="flex_line_var_1_ flex_jc_spacebetween">
          <Button
            texto="Voltar"
            props_style="secondary"
            link="/simulacao_base"
          />
          <Button
            texto="Estoque Animal"
            props_style="tertiary"
            link="/estoque_animal"
          />
          <Button
            texto="Mais opções"
            props_style="primary"
            link="/menu_principal"
          />
        </div>
      </div>
    </div>
  );
}

export default resultado_simulacao;
