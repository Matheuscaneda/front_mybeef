/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import "../App.css";
import { Button } from "../components/button/button";
import { Button_Increment } from "../components/button_increment/button_increment";
import AlertDialog from "../components/alert/Alert";
import { Simulador } from "../utils/simulador";
import { useNavigate } from "react-router-dom/dist";

function simulacao_base() {
  const navigate = useNavigate();
  const simulador = new Simulador();

  const [percentualDesmame, setPercentualDesmame] = useState(simulador.desmame);
  const [percentualMortalidade, setPercentualMortalidade] = useState(
    simulador.mortalidade
  );
  const [percentualTouros, setPercentualTouros] = useState(simulador.touros);
  const [idadeEntoure, setIdadeEntoure] = useState(simulador.idade_entoure);
  const [idadeVenda, setIdadeVenda] = useState(simulador.idade_venda);
  const [lotacaoHectare, setLotacaoHectare] = useState(simulador.lotacao);

  const handleSubmit = () => {
    simulador.set_base_info({
      desmame: percentualDesmame,
      mortalidade: percentualMortalidade,
      touros: percentualTouros,
      idade_entoure: idadeEntoure,
      idade_venda: idadeVenda,
      lotacao: lotacaoHectare,
    });
    simulador.executa_simulador();
    navigate("/resultado_simulacao", { state: { simulador: simulador } });
  };

  return (
    <div class="parent">
      <div className="div1">
        <h1> Simulação Base </h1>

        <div className="paragraphs">
          <p>
            {" "}
            Nesta etapa, são inseridos os dados que servem de cenário base para
            as próximas simulações.{" "}
          </p>
        </div>
      </div>
      <div className="div2">
        <div className="flex_line bg-grey flex_jc_spacebetween">
          <div className="flex_block">
            <p> Percentual de desmame </p>
            <AlertDialog />
          </div>
          <Button_Increment
            min={0}
            max={100}
            step={5}
            value={percentualDesmame}
            setValue={setPercentualDesmame}
          />
        </div>
        <div className="flex_line bg-grey flex_jc_spacebetween">
          <div className="flex_block">
            <p> Percentual de mortalidade </p>
            <AlertDialog />
          </div>
          <Button_Increment
            min={0}
            max={100}
            step={5}
            value={percentualMortalidade}
            setValue={setPercentualMortalidade}
          />
        </div>
        <div className="flex_line bg-grey flex_jc_spacebetween">
          <div className="flex_block">
            <p> Percentual de touros </p>
            <AlertDialog />
          </div>
          <Button_Increment
            min={1}
            max={100}
            step={10}
            value={percentualTouros}
            setValue={setPercentualTouros}
          />
        </div>
      </div>
      <div className="div3">
        <div className="flex_line bg-grey flex_jc_spacebetween">
          <div className="flex_block">
            <p> Idade de entoure </p>
            <AlertDialog />
          </div>
          <Button_Increment
            min={1}
            max={3}
            step={1}
            value={idadeEntoure}
            setValue={setIdadeEntoure}
          />
        </div>
        <div className="flex_line bg-grey flex_jc_spacebetween">
          <div className="flex_block">
            <p> Idade de venda </p>
            <AlertDialog />
          </div>
          <Button_Increment
            min={1}
            max={3}
            step={1}
            value={idadeVenda}
            setValue={setIdadeVenda}
          />
        </div>
        <div className="flex_line bg-grey flex_jc_spacebetween">
          <div className="flex_block">
            <p> Lotação por hectare </p>
            <AlertDialog />
          </div>
          <Button_Increment
            min={0.1}
            max={20}
            step={0.1}
            value={lotacaoHectare}
            setValue={setLotacaoHectare}
          />
        </div>
      </div>

      <div className="div4 flex_line flex_jc_spacebetween">
        <Button
          texto="Calibrar"
          props_style="primary"
          link="/calibrar"
          params={{ simulador: simulador }}
        />
        <Button texto="Calcular" props_style="primary" onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default simulacao_base;
