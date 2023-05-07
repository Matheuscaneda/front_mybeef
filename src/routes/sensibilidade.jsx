/* eslint-disable react/jsx-pascal-case */
import '../App.css';
import { Button } from '../components/button/button';
import { Button_Increment } from '../components/button_increment/button_increment';
import { useState } from 'react';
import { Chart } from "react-google-charts";

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

    const [opcao, setOpcao] = useState('taxa-desmame');

    const handleOpcaoChange = (event) => {
      setOpcao(event.target.value);
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
                <div className='flex_line flex_jc_spacebetween flex_wrap min_width'>
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
                        Idade de acasalamento
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

                <div className='flex_block_column flex_jc_evenly'>

                
                    <div className='flex_block bg-grey'>
                        <p> Desmame mínimo </p>
                        <Button_Increment min={0.1} max={20} step={0.1} defaultValue={1}  estado={true}/>
                    </div>

                    <div className='flex_block bg-grey'>
                        <p> Desmame máximo </p>
                        <Button_Increment min={0.1} max={20} step={0.1} defaultValue={1}  estado={true}/>
                    </div>

                </div>
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

                    <Button texto='Voltar' props_style="secondary" link="/menu_principal"/> 
              </div>
                  
  
          </div>
      
      );
  }
  

export default Sensibilidade;
