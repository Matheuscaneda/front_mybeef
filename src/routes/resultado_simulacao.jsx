/* eslint-disable react/jsx-pascal-case */
import '../App.css';
import { Button } from '../components/button/button';
import {Speedometer} from '../components/speedometer/speedometer';


function resultado_simulacao() {
  return (
      <div className="parent">
          <div className='div1'>
            <h1> Resultado da simulação</h1>
          </div>
          
        <div className='div2'>
          <div className="dials">
            <Speedometer
              id="dial5"
              value={50}
              title="Desfrute"
            />
          </div>
        </div>
        <div className='div3'>
          <div className="dials">
            <Speedometer
              id="dial5"
              value={50}
              title="Produtividade"
            />
          </div>
        </div>
        
        <div className='div4'>
          <div className="flex_line_var_1_ flex_jc_spacebetween">
              <Button texto='Voltar' props_style="secondary" link="/simulacao_base"/>  
              <Button texto='Estoque Animal' props_style="tertiary" link="/estoque_animal"/>  
              <Button texto='Mais opções' props_style="primary" link="/menu_principal"/>  
          </div>
        </div>
    </div>
    
    );
}

export default resultado_simulacao;
