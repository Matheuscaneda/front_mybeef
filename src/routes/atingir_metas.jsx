/* eslint-disable react/jsx-pascal-case */
import '../App.css';
import AlertDialog_var from '../components/alert_var/Alert';
import { Button } from '../components/button/button'
import { Button_Increment } from '../components/button_increment/button_increment';
import { Button_small } from '../components/button_small/button';

function atingir_metas() {
  return (
      <div className="parent_var_1_">
        <div className='div1_var_1_'>
            <h1> Atingir Metas </h1>
            <div className="paragraphs">
              <p>Nesta opção você pode simular metas pré-definidas e descobrir os requisitos para atende-lâs.</p>
                </div>
            </div>

        <div className='div2_var_1_'>
            <div className="flex_block">
                <p> Quantas vacas você deseja entourar? Para estimar a área necessária, clique em calcular. </p>
            </div>
            <div className='flex_block width_50 flex_jc_evenly'>
                <Button_Increment  min={0.1} max={20} step={0.1} defaultValue={1}  estado={true}/>
                <AlertDialog_var/>
            </div>
            <div className="flex_block">
                <p> Para qual área você deseja estimar o tamanho do rebanho? Para estimar o tamanho do rebanho, clique em calcular. </p>
            </div> 
            <div className="flex_block  width_50 flex_jc_evenly">
                <Button_Increment  min={0.1} max={20} step={0.1} defaultValue={1}  estado={true}/>
                <AlertDialog_var/>
            </div>
            <div className="flex_block">
                <p> Quantos terneiros você quer desmamar por ano? Para estimar o tamanho da área para desmamar esta quantidade de terneiros, clique em calcular. </p>
            </div>
                <div className="flex_block width_50 flex_jc_evenly">
                <Button_Increment  min={0.1} max={20} step={0.1} defaultValue={1}  estado={true}/>
                <AlertDialog_var/> 
                </div>
            <div className="flex_block">
                <p> Quantos novilhos você deseja vender um ano mais cedo? Para estimar a quantidade, clique em calcular. </p>

            </div>
            <div className='flex_block  width_50 flex_jc_evenly'>
                <Button_Increment  min={0.1} max={20} step={0.1} defaultValue={1}  estado={true}/>
                <AlertDialog_var/> 
            </div>
        </div> 
        <div className='div4_var_1_'>
            <div className="flex_line flex_jc_center">
                <Button texto='Voltar' props_style="secondary" link="/menu_principal"/> 
            </div> 
        </div>   
        </div>
    
    );
}

export default atingir_metas;
