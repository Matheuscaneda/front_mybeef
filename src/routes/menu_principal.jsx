/* eslint-disable react/jsx-pascal-case */
import '../App.css';
import { Button } from '../components/button/button'
import { Button_Increment } from '../components/button_increment/button_increment';
import Imagem from '../components/img/img';
import  logo  from '../img/logo_mybeef.png';


function Menu_principal() {
  return (
    <div className="parent_var_1_">
        <div className='div1_var_1_'>
            <h1> Menu de opções </h1>
        </div>
    <div className='div2_var_1_'>
        <div className="flex_line_var_1_ flex_jc_evenly">
            <div className='flex_block_var_1_ bg-grey'>
                <p> Para simular a variação individual dos indicadores </p>
                <Button texto='Simular!' props_style="primary" link="/sensibilidade"/>
            </div>
        </div>
        <div className="flex_line_var_1_ flex_jc_evenly">
            <div className='flex_block_var_1_ bg-grey'>
                <p> Para descobrir o limite de investimento entre dois cenários</p>
                <Button texto='Calcular!' props_style="primary" link="/limite_investimento"/>
            </div>
        </div>
        <div className="flex_line_var_1_ flex_jc_evenly">
            <div className='flex_block_var_1_ bg-grey'>
                <p> Para simular metas a serem atingidas </p>
                <Button texto='Simular!' props_style="primary" link="/atingir_metas"/>
            </div>
        </div>
        <div className="flex_line_var_1_ flex_jc_evenly">
            <div className='flex_block_var_1_ bg-grey'>
                <p> Para gerar tabela de simulações </p>
                <Button texto='Gerar!' props_style="primary" link="/gera_tabela_produtividade"/>
            </div>
        </div>
    </div>
    <div className='div4_var_1_'></div>
        <div className="flex_line_var_1_ flex_jc_center">
            <Button texto='Voltar' props_style="secondary" link="/resultado_simulacao"/>
        </div>

        </div>
    
    );
}

export default Menu_principal;
