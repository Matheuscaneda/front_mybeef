/* eslint-disable react/jsx-pascal-case */
import '../App.css';
import { Button } from '../components/button/button';
import { Button_Increment } from '../components/button_increment/button_increment';


function resultado_limite_investimento() {
  return (
    <div className="parent">
        <div className='div1'>
            <h1> Resultado </h1>
            <div className="paragraphs ">
              <p className="p_center"> Diferença de faturamento entre os cenários </p>
            </div>
        </div>
        <div className='div2'>
            <div className="flex_line">
                <div className="flex_block ">
                    <p> Cenário Base</p>
                    <Button_Increment min={0} max={100} step={0.5} defaultValue={3}/>
                </div>
            </div>
        </div>
        <div className='div3'>
            <div className="flex_line">
                <div className="flex_block ">
                    <p> Cenário Futuro</p>
                    <Button_Increment min={0} max={100} step={0.5} defaultValue={3}/>
                </div>
            </div>
        </div>
    
        <div className='div4'>    
            <div className="flex_line">
                <div className="flex_block">
                    <p> Limite de investimento</p>
                    <Button_Increment min={0} max={100} step={0.5} defaultValue={3}/>
                </div>
            </div>
            <div className="flex_line width flex_jc_spacebetween">
                    <Button texto='Estoque animal' props_style="primary" link="/estoque_animal"/> 
                    <Button texto='Voltar' props_style="secondary" link="/limite_investimento"/>  
                    <Button texto='Estoque animal' props_style="primary" link="/estoque_animal"/>
            </div>
        </div>
        
        </div>
    
    );
}

export default resultado_limite_investimento;
