/* eslint-disable react/jsx-pascal-case */
import '../App.css';
import { Button } from '../components/button/button';
import { Button_Increment } from '../components/button_increment/button_increment';
import AlertDialog from '../components/alert/Alert';


function simulacao_base() {
    return (
        <div class="parent">
              <div className="div1"> 
                  <h1> Simulação Base </h1>
          
                  <div className="paragraphs">
                      <p> Nesta etapa, são inseridos os dados que servem de cenário base para as próximas simulações. </p>
                  </div>
              </div>
              <div className="div2">
                  <div className="flex_line bg-grey flex_jc_spacebetween">
                      <div className="flex_block">
                          <p> Percentual de desmame </p>
                          <AlertDialog/>
                      </div>
                      <Button_Increment min={0} max={100} step={0.5} defaultValue={80} estado={true}/>
                      </div>
                  <div className="flex_line bg-grey flex_jc_spacebetween">
                      <div className="flex_block">
                          <p> Percentual de mortalidade </p>
                          <AlertDialog/>
                      </div>
                      <Button_Increment min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                  </div>
                  <div className="flex_line bg-grey flex_jc_spacebetween">
                      <div className="flex_block">
                          <p> Área de pastagem </p>
                          <AlertDialog/>
                      </div>
                      <Button_Increment min={1} max={100000} step={1} defaultValue={1000} estado={true}/>
                  </div></div>
              <div className="div3">
                  <div className="flex_line bg-grey flex_jc_spacebetween">
                      <div className="flex_block">
                          <p> Idade de entoure </p>
                          <AlertDialog/>
                      </div>
                      <Button_Increment min={1} max={3} step={1} defaultValue={3} estado={true}/>
                  </div>
                  <div className="flex_line bg-grey flex_jc_spacebetween">
                      <div className="flex_block">
                          <p> Idade de venda </p>
                          <AlertDialog/>
                      </div>
                      <Button_Increment min={1} max={3} step={1} defaultValue={3} estado={true}/>
                  </div>
                  <div className="flex_line bg-grey flex_jc_spacebetween">
                      <div className="flex_block">
                          <p> Lotação por hectare </p>
                          <AlertDialog/>
                      </div>
                      <Button_Increment min={0.1} max={20} step={0.1} defaultValue={1}  estado={true}/>
                  </div>
              </div>
              
              
              <div className="div4 flex_line flex_jc_spacebetween">
                  <Button texto='Calibrar' props_style="primary" link="/calibrar"/> 
                  <Button texto='Calcular' props_style="primary" link="/resultado_simulacao"/>  
              </div>
                  
  
          </div>
      
      );
  }
  

export default simulacao_base;
