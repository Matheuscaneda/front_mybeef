/* eslint-disable react/jsx-pascal-case */
import '../App.css';
import { Button } from '../components/button/button'
import { Button_Increment } from '../components/button_increment/button_increment';
import Imagem from '../components/img/img';
import  logo  from '../img/logo_mybeef.png';


function atingir_metas() {
  return (
      <div className="content">
        <Imagem src={logo} alt="Exemplo de imagem"/>
        <h1> Atingir Metas </h1>
        <div className="paragraphs">
          <p>Nesta opção você pode simular metas pré-definidas e descobrir os requisitos para atende-lâs.</p>
        </div>
        <div className="flex_line">
            <p> Quantas vacas você deseja entourar? Para estimar a área necessária, clique em calcular. </p>
            
        </div>
        <div className="flex_line">
        <Button_Increment/>
        <Button texto='Calcular' props_style="primary" link="/resultado_meta_vaca"/> 
        </div>
        <div className="flex_line">
            <p> Para qual área você deseja estimar o tamanho do rebanho? Para estimar o tamanho do rebanho, clique em calcular. </p>
           
        </div> 
        <div className="flex_line">
        <Button_Increment/>
        <Button texto='Calcular' props_style="primary" link="/resultado_meta_area"/> 
        </div>
        <div className="flex_line">
            <p> Quantos terneiros você quer desmamar por ano? Para estimar o tamanho da área para desmamar esta quantidade de terneiros, clique em calcular. </p>

        </div>
        <div className="flex_line">
        <Button_Increment/>
        <Button texto='Calcular' props_style="primary" link="/resultado_meta_tmf"/> 
        </div>
        <div className="flex_line">
            <p> Quantos novilhos você deseja vender um ano mais cedo? Para estimar a quantidade, clique em calcular. </p>
            
        </div>
        <div className='flex_line'>
            <Button_Increment/>
            <Button texto='Calcular' props_style="primary" link="/resultado_meta_novilho"/> 
        </div>    
        <div className="flex_line">
        <Button texto='Voltar' props_style="secondary" link="/menu_principal"/> 
        </div> 
        </div>
    
    );
}

export default atingir_metas;
