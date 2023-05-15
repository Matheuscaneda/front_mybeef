/* eslint-disable react/jsx-pascal-case */
import '../App.css';
import { Button } from '../components/button/button';
import { Button_Increment } from '../components/button_increment/button_increment';
import { useState } from 'react';
import { Chart } from "react-google-charts";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const data = [
    ["x", ""],
    [0, 0],
    [1, 10],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
  ];
  
  export const options = {
    hAxis: {
      title: "Desmame",
    },
    vAxis: {
      title: "Produtividade",
    },
    series: {
      1: { curveType: "function" },
    },
  };

function Sensibilidade() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const simulador = state.simulador;


    const [opcao, setOpcao] = useState('taxa-desmame');

    const handleOpcaoChange = (event) => {
      setOpcao(event.target.value);
    };

    const [ValorMinimo, setValorMinimo] = useState(1);
    const [ValorMaximo, setValorMaximo] = useState(1);

    const handleSubmit_3 = () => {
      navigate("/menu_principal", { state: { simulador: simulador } });
    };

    return (
        <div class="parent_var_1_">
              <div className="div1_var_1_"> 
                  <h1> Sensibilidade </h1>
          
                  <div className="paragraphs">
                      <p> Nesta etapa, simuladas mudanças individuais nos indicadores zootécnicos </p>
                  </div>
              </div>
            <div className="div2_var_1_">
                <div className='flex_line flex_jc_spacebetween flex_wrap  width'>
                <div className='flex_block_column'>
                <h2>Selecione uma opção:</h2>
                    <label>
                        <input
                            type="radio"
                            value="taxa-desmame"
                            checked={opcao === 'taxa-desmame'}
                            onChange={handleOpcaoChange}
                            className='input '
                        />
                        Taxa de desmame
                    </label>
                    
                    <label>
                        <input
                          type="radio"
                          value="idade-abate"
                          checked={opcao === 'idade-abate'}
                          onChange={handleOpcaoChange}
                          className='input'
                        />
                        Idade de abate
                    </label>

                    <label>
                        <input
                          type="radio"
                          value="idade-acasalamento"
                          checked={opcao === 'idade-acasalamento'}
                          onChange={handleOpcaoChange}
                          className='input'
                        />
                        Idade de entoure
                    </label>
                    
                    <label>
                        <input
                          type="radio"
                          value="taxa-mortalidade"
                          checked={opcao === 'taxa-mortalidade'}
                          onChange={handleOpcaoChange}
                          className='input'
                        />
                        Taxa de mortalidade
                    </label>
                </div>

                {opcao === "taxa-desmame" && <div className='flex_block_column flex_jc_evenly'>

                
                    <div className='flex_block bg-grey'>
                        <p> Desmame mínimo </p>
                        <Button_Increment min={0} max={100} step={1} value={ValorMinimo} setValue={setValorMinimo}/>

                    </div>

                    <div className='flex_block bg-grey'>
                        <p> Desmame máximo </p>
                        <Button_Increment min={0} max={100} step={1} value={ValorMaximo} setValue={setValorMaximo}/>
                    </div>
                </div>
                }

                {opcao === 'taxa-mortalidade' && 
                  <div className='flex_block_column flex_jc_evenly'>
                      <div className='flex_block bg-grey'>
                          <p> Mortalidade mínima </p>
                          <Button_Increment min={0} max={100} step={1} value={ValorMinimo} setValue={setValorMinimo}/>
                      </div>

                      <div className='flex_block bg-grey'>
                          <p> Mortalidade máxima </p>
                          <Button_Increment min={0} max={100} step={1} value={ValorMaximo} setValue={setValorMaximo}/>
                      </div>

                      </div>
                }
                {opcao === 'idade-abate' && 
                  <div className='flex_block_column flex_jc_evenly'>
                      <div className='flex_block bg-grey'>
                          <p> Idade abate mínima </p>
                          <Button_Increment min={0} max={100} step={1} value={ValorMinimo} setValue={setValorMinimo}/>
                      </div>

                      <div className='flex_block bg-grey'>
                          <p> Idade bate máxima </p>
                          <Button_Increment min={0} max={100} step={1} value={ValorMaximo} setValue={setValorMaximo}/>
                      </div>

                      </div>
                }
                {opcao === 'idade-acasalamento' && 
                  <div className='flex_block_column flex_jc_evenly'>
                      <div className='flex_block bg-grey'>
                          <p> Idade de entoure mínima </p>
                          <Button_Increment min={0} max={100} step={1} value={ValorMinimo} setValue={setValorMinimo}/>
                      </div>

                      <div className='flex_block bg-grey'>
                          <p> Idade de entoure máxima </p>
                          <Button_Increment min={0} max={100} step={1} value={ValorMaximo} setValue={setValorMaximo}/>
                      </div>

                      </div>
                }
                      </div>
                  </div>
              
            <div className="div3_var_1_">
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                />
            </div>
              
              
              <div className="div4_var_1_ flex_line flex_jc_center">

              <Button
                texto="Voltar"
                props_style="secondary"
                onClick={handleSubmit_3}
              /> 
              </div>
                  
  
          </div>
      
      );
  }
  

export default Sensibilidade;
