/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import "../App.css";
import { Button } from "../components/button/button";
import { Button_Increment } from "../components/button_increment/button_increment";
import { useLocation } from "react-router-dom/dist";
import { useNavigate } from "react-router-dom/dist";

function calibrar() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const simulador = state.simulador;

  const [PercentualDescarteVacas, setPercentualDescarteVacas] = useState(
    simulador.descarte_vacas_ano
  );
  const [PercentualDescarteTouros, setPercentualDescarteTouros] = useState(
    simulador.descarte_touros_ano
  );
  const [pesoMedioTerneiro, setPesoMedioTerneiro] = useState(
    simulador.peso_medio_terneiros
  );
  const [pesoMedioNovilhas_3, setPesoMedioNovilhas_3] = useState(
    simulador.peso_medio_novilha_3
  );
  const [pesoMedioNovilhas_2, setPesoMedioNovilhas_2] = useState(
    simulador.peso_medio_novilha_2
  );
  const [pesoMedioNovilhas_1, setPesoMedioNovilhas_1] = useState(
    simulador.peso_medio_novilha_1
  );
  const [pesoMedioNovilhos_3, setPesoMedioNovilhos_3] = useState(
    simulador.peso_medio_novilho_3
  );
  const [pesoMedioNovilhos_2, setPesoMedioNovilhos_2] = useState(
    simulador.peso_medio_novilho_2
  );
  const [pesoMedioNovilhos_1, setPesoMedioNovilhos_1] = useState(
    simulador.peso_medio_novilho_1
  );
  const [pesoMedioTouros, setPesoMedioTouros] = useState(
    simulador.peso_medio_touros
  );
  const [pesoMedioVacas, setPesoMedioVacas] = useState(
    simulador.peso_medio_vacas
  );
  
  const [pesoVendaTerneiro, setPesoVendaTerneiro] = useState(
    simulador.peso_venda_terneiros
  );
  const [pesoVendaNovilhas_3, setPesoVendaNovilhas_3] = useState(
    simulador.peso_venda_novilha_3
  );
  const [pesoVendaNovilhas_2, setPesoVendaNovilhas_2] = useState(
    simulador.peso_venda_novilha_2
  );
  const [pesoVendaNovilhas_1, setPesoVendaNovilhas_1] = useState(
    simulador.peso_venda_novilha_1
  );
  const [pesoVendaNovilhos_3, setPesoVendaNovilhos_3] = useState(
    simulador.peso_venda_novilho_3
  );
  const [pesoVendaNovilhos_2, setPesoVendaNovilhos_2] = useState(
    simulador.peso_venda_novilho_2
  );
  const [pesoVendaNovilhos_1, setPesoVendaNovilhos_1] = useState(
    simulador.peso_venda_novilho_1
  );
  const [pesoVendaTouros, setPesoVendaTouros] = useState(
    simulador.peso_venda_touros
  );
  const [pesoVendaVacas, setPesoVendaVacas] = useState(
    simulador.peso_venda_vacas
  );

  

  const handleSubmit = () => {
    simulador.set_calibrar({
      peso_medio_terneiros: pesoMedioTerneiro,
      peso_medio_vacas : pesoMedioVacas,
      peso_medio_novilha_3 : pesoMedioNovilhas_3,
      peso_medio_novilha_2 : pesoMedioNovilhas_2,
      peso_medio_novilha_1 : pesoMedioNovilhas_1,
      peso_medio_novilho_3 : pesoMedioNovilhos_3,
      peso_medio_novilho_2 : pesoMedioNovilhos_2,
      peso_medio_novilho_1 : pesoMedioNovilhos_1,
      peso_medio_touros : pesoMedioTouros,

      peso_venda_terneiros : pesoVendaTerneiro,
      peso_venda_vacas : pesoVendaVacas,
      peso_venda_novilha_3 : pesoVendaNovilhas_3,
      peso_venda_novilha_2 : pesoVendaNovilhas_2,
      peso_venda_novilha_1 : pesoVendaNovilhas_1,
      peso_venda_novilho_3 : pesoVendaNovilhos_3,
      peso_venda_novilho_2 : pesoVendaNovilhos_2,
      peso_venda_novilho_1 : pesoVendaNovilhos_1,
      peso_venda_touros : pesoVendaTouros,

      descarte_touros_ano : PercentualDescarteTouros,
      descarte_vacas_ano : PercentualDescarteVacas,
    });
  };

  const handleSubmit_test = () => {
    navigate("/simulacao_base", { state: { simulador: simulador } });
  }

  return (
    <div class="parent_var_1">
      <div className="div1_var_1_">
        <h1> Calibrar </h1>

        <div className="paragraphs">
          <p> Calibrar a ferramenta para aproximar ao seu cenário real. </p>
        </div>
      </div>

      <div className="div2_var_1_">
        <div className="flex_line_var_1_ flex_jc_spacebetween">
          <div className="flex_block width_50 bg-grey margin_bot">
            <p> Percentual de descarte de vacas</p>
            <Button_Increment
                min={0}
                max={100}
                step={1}
                value={PercentualDescarteVacas}
                setValue={setPercentualDescarteVacas}
              />
          </div>
        </div>
        <div className="flex_line_var_1_ flex_jc_spacebetween">
          <div className="flex_block width_50 bg-grey margin_bot">
            <p> Percentual de descarte de touros </p>
            <Button_Increment
                min={0}
                max={100}
                step={1}
                value={PercentualDescarteTouros}
                setValue={setPercentualDescarteTouros}
              />
          </div>
        </div>
      </div>

      <div className="div3_var_1_">
        <div className="flex_line  flex_jc_center width_50">
          <div className="flex_block flex_wrap flex_jc_center bg-grey">
            <p className="p_center margin_bot"> Novilhas com 3 anos </p>

            <div className="flex_block">
              <p> Peso médio </p>
              <Button_Increment
                min={0}
                max={1000}
                step={1}
                value={pesoMedioNovilhas_3}
                setValue={setPesoMedioNovilhas_3}
              />
            </div>

            <div className="flex_block">
              <p> Peso venda </p>
              <Button_Increment
                min={0}
                max={1000}
                step={1}
                value={pesoVendaNovilhas_3}
                setValue={setPesoVendaNovilhas_3}
              />
            </div>
          </div>
        </div>

        <div className="flex_line  flex_jc_center width_50">
          <div className="flex_block flex_wrap flex_jc_center bg-grey">
            <p className="p_center margin_bot"> Novilhas com 2 anos </p>

            <div className="flex_block">
              <p> Peso médio </p>
              <Button_Increment
                min={0}
                max={1000}
                step={1}
                value={pesoMedioNovilhas_2}
                setValue={setPesoMedioNovilhas_2}
              />
            </div>

            <div className="flex_block">
              <p> Peso venda </p>
              <Button_Increment
                min={0}
                max={1000}
                step={1}
                value={pesoVendaNovilhas_2}
                setValue={setPesoVendaNovilhas_2}
              />
            </div>
          </div>
        </div>

        <div className="flex_line  flex_jc_center width_50">
          <div className="flex_block flex_wrap flex_jc_center bg-grey">
            <p className="p_center margin_bot"> Novilhas com 1 ano </p>
            <div className="flex_block">
              <p> Peso médio </p>
              <Button_Increment
                min={0}
                max={1000}
                step={1}
                value={pesoMedioNovilhas_1}
                setValue={setPesoMedioNovilhas_1}
              />
            </div>

            <div className="flex_block">
              <p> Peso venda </p>
              <Button_Increment
                min={0}
                max={1000}
                step={1}
                value={pesoVendaNovilhas_1}
                setValue={setPesoVendaNovilhas_1}
              />
            </div>
          </div>
        </div>

        <div className="flex_line  flex_jc_center width_50">
          <div className="flex_block flex_wrap flex_jc_center bg-grey">
            <p className="p_center margin_bot"> Novilhos com 3 anos </p>
            <div className="flex_block">
              <p> Peso médio </p>
              <Button_Increment
                min={0}
                max={1000}
                step={1}
                value={pesoMedioNovilhos_3}
                setValue={setPesoMedioNovilhos_3}
              />
            </div>
            <div className="flex_block">
              <p> Peso venda </p>
              <Button_Increment
                min={0}
                max={1000}
                step={1}
                value={pesoVendaNovilhos_3}
                setValue={setPesoVendaNovilhos_3}
              />
            </div>
          </div>
        </div>

        <div className="flex_line  flex_jc_center width_50">
          <div className="flex_block flex_wrap flex_jc_center bg-grey">
            <p className="p_center margin_bot"> Novilhos com 2 anos </p>
            <div className="flex_block">
              <p> Peso médio </p>
              <Button_Increment
                min={0}
                max={1000}
                step={1}
                value={pesoMedioNovilhos_2}
                setValue={setPesoMedioNovilhos_2}
              />
            </div>
            <div className="flex_block">
              <p> Peso venda </p>
              <Button_Increment
                min={0}
                max={1000}
                step={1}
                value={pesoVendaNovilhos_2}
                setValue={setPesoVendaNovilhos_2}
              />
            </div>
          </div>
        </div>

        <div className="flex_line  flex_jc_center width_50">
          <div className="flex_block flex_wrap flex_jc_center bg-grey">
            <p className="p_center margin_bot"> Novilho com 1 ano </p>
            <div className="flex_block">
              <p> Peso médio </p>
              <Button_Increment
                min={0}
                max={1000}
                step={1}
                value={pesoMedioNovilhos_1}
                setValue={setPesoMedioNovilhos_1}
              />
            </div>
            <div className="flex_block">
              <p> Peso venda </p>
              <Button_Increment
                min={0}
                max={1000}
                step={1}
                value={pesoVendaNovilhos_1}
                setValue={setPesoVendaNovilhos_1}
              />
            </div>
          </div>
        </div>

        <div className="flex_line  flex_jc_center width_50">
          <div className="flex_block flex_wrap flex_jc_center bg-grey">
            <p className="p_center margin_bot"> Terneiros(as) </p>
            <div className="flex_block">
              <p> Peso médio </p>
              <Button_Increment
                min={0}
                max={1000}
                step={1}
                value={pesoMedioTerneiro}
                setValue={setPesoMedioTerneiro}
              />
            </div>
            <div className="flex_block">
              <p> Peso venda </p>
              <Button_Increment
                min={0}
                max={1000}
                step={1}
                value={pesoVendaTerneiro}
                setValue={setPesoVendaTerneiro}
              />
            </div>
          </div>
        </div>        
        <div className="flex_line  flex_jc_center width_50">
          <div className="flex_block flex_wrap flex_jc_center bg-grey">
            <p className="p_center margin_bot"> Vacas </p>
            <div className="flex_block">
              <p> Peso médio </p>
              <Button_Increment
                min={0}
                max={1000}
                step={1}
                value={pesoMedioVacas}
                setValue={setPesoMedioVacas}
              />
            </div>
            <div className="flex_block">
              <p> Peso venda </p>
              <Button_Increment
                min={0}
                max={1000}
                step={1}
                value={pesoVendaVacas}
                setValue={setPesoVendaVacas}
              />
            </div>
          </div>
        </div>
        <div className="flex_line  flex_jc_center width_50">
          <div className="flex_block flex_wrap flex_jc_center bg-grey">
            <p className="p_center margin_bot"> Touros </p>
            <div className="flex_block">
              <p> Peso médio </p>
              <Button_Increment
                min={0}
                max={1000}
                step={1}
                value={pesoMedioTouros}
                setValue={setPesoMedioTouros}
              />
            </div>
            <div className="flex_block">
              <p> Peso venda </p>
              <Button_Increment
                min={0}
                max={1000}
                step={1}
                value={pesoVendaTouros}
                setValue={setPesoVendaTouros}
              />
            </div>
          </div>
        </div>


        <div className="div4">
          <div className="flex_line_var_1_ flex_jc_spacebetween">
            <Button
              texto="Voltar"
              props_style="secondary"
              onClick={ handleSubmit_test}
            />
            <Button
              texto="Salvar"
              props_style="primary"
              onClick={ handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default calibrar;
