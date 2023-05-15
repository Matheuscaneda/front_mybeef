/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import "../App.css";
import { Button } from "../components/button/button";
import { Button_Increment } from "../components/button_increment/button_increment";
import { useNavigate } from "react-router-dom/dist";
import { useLocation } from "react-router-dom/dist";

function Tabela_produtividade() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const simulador = state.simulador;
  
    const [PercentualDescarteVacas, setPercentualDescarteVacas] = useState(
      simulador.descarte_vacas_ano
    ); 
    const [percentualMortalidade, setPercentualMortalidade] = useState(
        simulador.mortalidade
      );
  
    const handleSubmit = () => {
      navigate("/menu_principal", { state: { simulador: simulador } });
    }
    const handleSubmit_2 = () => {
        navigate("/result_tabela_produtividade", { state: { simulador: simulador } });
      }
  
    return (
      <div class="parent_var_1">
        <div className="div1_var_1_">
          <h1> Tabela de Produtividade </h1>
  
          <div className="paragraphs">
            <p> Gerar uma tabela de relações dos indíces zootécnicos com a produtividade </p>
          </div>
        </div>
  
        <div className="div2_var_1_">
        <div className="flex_line  flex_jc_center width_50">
            <div className="flex_block flex_wrap flex_jc_center bg-grey">
              <p className="p_center margin_bot"> Taxa de mortalidade </p>
  
              <div className="flex_block">
                <Button_Increment
                  min={0}
                  max={100}
                  step={1}
                  value={percentualMortalidade}
                  setValue={setPercentualMortalidade}
                  disabled={true}
                />
              </div>
            </div>
          </div>

          <div className="flex_line  flex_jc_center width_50">
            <div className="flex_block flex_wrap flex_jc_center bg-grey">
              <p className="p_center margin_bot"> Taxa de natalidade </p>
  
              <div className="flex_block">
                <p> Mínima </p>
                <Button_Increment
                  min={0}
                  max={100}
                  step={1}
                  value={30}
                  setValue={0}
                />
              </div>
  
              <div className="flex_block">
                <p> Máxima </p>
                <Button_Increment
                  min={0}
                  max={100}
                  step={1}
                  value={60}
                  setValue={0}
                />
              </div>
            </div>
          </div>
        
  
          <div className="flex_line  flex_jc_center width_50">
            <div className="flex_block flex_wrap flex_jc_center bg-grey">
              <p className="p_center margin_bot"> Idade de Abate </p>
  
              <div className="flex_block">
                <p> Mínima </p>
                <Button_Increment
                  min={1}
                  max={1}
                  step={1}
                  value={1}
                  setValue={0}
                  disabled={true}
                />
              </div>
  
              <div className="flex_block">
                <p> Máxima </p>
                <Button_Increment
                  min={1}
                  max={3}
                  step={1}
                  value={3}
                  setValue={0}
                  disabled={true}
                />
              </div>
            </div>
          </div>
        
          <div className="flex_line  flex_jc_center width_50">
            <div className="flex_block flex_wrap flex_jc_center bg-grey">
              <p className="p_center margin_bot"> Idade de acasalamento </p>
              <div className="flex_block">
                <p> Mínima </p>
                <Button_Increment
                  min={1}
                  max={1}
                  step={1}
                  value={1}
                  setValue={0}
                  disabled={true}
                />
              </div>
  
              <div className="flex_block">
                <p> Máxima </p>
                <Button_Increment
                  min={3}
                  max={3}
                  step={1}
                  value={3}
                  setValue={0}
                  disabled={true}
                />
              </div>
            </div>
          </div>
          <div className="flex_line  flex_jc_center width_50">
            <div className="flex_block flex_wrap flex_jc_center bg-grey">
              <p className="p_center margin_bot"> Peso animal </p>
              <div className="flex_block">
                <p> Mínimo </p>
                <Button_Increment
                  min={200}
                  max={500}
                  step={10}
                  value={250}
                  setValue={0}
                />
              </div>
  
              <div className="flex_block">
                <p> Máximo </p>
                <Button_Increment
                  min={500}
                  max={1000}
                  step={10}
                  value={675}
                  setValue={0}
                />
              </div>
            </div>
          </div>
        
        </div>
          <div className="flex_line  flex_jc_center width_50">
            <div className="flex_block flex_wrap flex_jc_center">
  
            <div className="div4">
                <div className="flex_line_var_1_ flex_jc_spacebetween">
                    <Button
                      texto="Voltar"
                      props_style="secondary"
                      onClick={ handleSubmit}
                    />
                    <Button
                      texto="Gerar!"
                      props_style="primary"
                      onClick={ handleSubmit_2}
                    />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }

export default Tabela_produtividade;
