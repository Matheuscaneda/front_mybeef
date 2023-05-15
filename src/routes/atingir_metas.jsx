/* eslint-disable react/jsx-pascal-case */
import '../App.css';
import AlertDialog_var from '../components/alert_var/Alert';
import { Button } from '../components/button/button'
import { Button_Increment } from '../components/button_increment/button_increment';
import { Button_small } from '../components/button_small/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function atingir_metas() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const simulador = state.simulador;

    const [MetaVacas, setMetaVacas] = useState(1000);
    const [MetaArea, setMetaArea] = useState(5000);
    const [MetaTmf, setMetaTmf] = useState(300);
    const [MetaNovilho, setMetaNovilho] = useState(500);

    const handleSubmit = () => {
        navigate("/menu_principal", { state: { simulador: simulador } });
      }
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
            <Button_Increment
                min={0}
                max={100}
                step={5}
                value={MetaVacas}
                setValue={setMetaVacas}
            />
                <AlertDialog_var/>
            </div>
            <div className="flex_block">
                <p> Para qual área você deseja estimar o tamanho do rebanho? Para estimar o tamanho do rebanho, clique em calcular. </p>
            </div> 
            <div className="flex_block  width_50 flex_jc_evenly">
            <Button_Increment
                min={0}
                max={100}
                step={5}
                value={MetaArea}
                setValue={setMetaArea}
            />
                <AlertDialog_var/>
            </div>
            <div className="flex_block">
                <p> Quantos terneiros você quer desmamar por ano? Para estimar o tamanho da área para desmamar esta quantidade de terneiros, clique em calcular. </p>
            </div>
                <div className="flex_block width_50 flex_jc_evenly">
                <Button_Increment
                    min={0}
                    max={100}
                    step={5}
                    value={MetaTmf}
                    setValue={setMetaTmf}
                />
                <AlertDialog_var/> 
                </div>
            <div className="flex_block">
                <p> Quantos novilhos você deseja vender um ano mais cedo? Para estimar a quantidade, clique em calcular. </p>

            </div>
            <div className='flex_block  width_50 flex_jc_evenly'>
            <Button_Increment
                min={0}
                max={100}
                step={5}
                value={MetaNovilho}
                setValue={setMetaNovilho}
            />
                <AlertDialog_var/> 
            </div>
        </div> 
        <div className='div4_var_1_'>
            <div className="flex_line flex_jc_center">
            <Button 
                texto="Voltar" 
                props_style="secondary" 
                onClick={handleSubmit} 
            />
            </div> 
        </div>   
        </div>
    
    );
}

export default atingir_metas;
