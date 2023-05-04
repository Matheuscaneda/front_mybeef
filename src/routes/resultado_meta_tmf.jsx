/* eslint-disable react/jsx-pascal-case */
import '../App.css';
import { Button } from '../components/button/button';


function resultado_meta_tmf() {
  return (
    <div className="content">
        <h1> Resultado das Metas </h1>
        <div className="flex_line">
            <p> Para desmamar ___ </p>
            <p> terneiros, é necessário </p>
            <p> hectares </p>
        </div>
        <div className="flex_line">
            <Button texto='Ver Estoque Animal' props_style="primary" link="/estoque_animal"/>  
            <Button texto='Voltar' props_style="secondary" link="/atingir_metas"/> </div> 
    </div>
    
    );
}

export default resultado_meta_tmf;
