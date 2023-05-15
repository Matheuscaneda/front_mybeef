/* eslint-disable react/jsx-pascal-case */
import "../App.css";
import { Button } from "../components/button/button";
import { Speedometer } from "../components/speedometer/speedometer";
import { useLocation } from "react-router-dom/dist";
import { useNavigate } from "react-router-dom/dist";

function resultado_simulacao() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const simulador = state.simulador;

  const handleSubmit = () => {
    navigate("/simulacao_base", { state: { simulador: simulador } });
  };
  const handleSubmit_2 = () => {
    navigate("/estoque_animal", { state: { simulador: simulador } });
  };
  const handleSubmit_3 = () => {
    navigate("/menu_principal", { state: { simulador: simulador } });
  };

  return (
    <div className="parent">
      <div className="div1">
        <h1> Resultado da simulação</h1>
      </div>

      <div className="div2 margin_top">
        <div className="dials">
          <Speedometer
            id="dial5"
            value={simulador.desfrute_percentual_kg}
            title="Desfrute"
            suffix="%"
            max={40}
            type = {true}
          />
        </div>
      </div>
      <div className="div3">
        <div className="dials margin_top">
          <Speedometer
            id="dial5"
            value={simulador.produtividade_por_area}
            title="Produtividade"
            suffix="Kg/Ha"
            max={180}
            type = {false}
          />
        </div>
      </div>

      <div className="div4 margin_top">
        <div className="flex_line_var_1_ flex_jc_spacebetween">
          <Button
            texto="Voltar"
            props_style="secondary"
            onClick={handleSubmit}
          />
          <Button
            texto="Estoque Animal"
            props_style="tertiary"
            onClick={handleSubmit_2}
          />
          <Button
            texto="Mais opções"
            props_style="primary"
            onClick={handleSubmit_3}
          />
        </div>
      </div>
    </div>
  );
}

export default resultado_simulacao;
