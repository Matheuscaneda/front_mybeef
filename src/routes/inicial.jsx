/* eslint-disable react/jsx-pascal-case */
import '../App.css';
import { Button } from '../components/button/button'
import Imagem from '../components/img/img';
import logo  from '../img/logo_mybeef.png';
import { Simulador } from "../utils/simulador";
import { useNavigate } from "react-router-dom/dist";


function Inicial() {

  const navigate = useNavigate();
  const simulador = new Simulador();

  const handleSubmit = () => {
    navigate("/simulacao_base", { state: { simulador: simulador } });
  }

  return (

        <div className = "content">
          <div className='flex_line'>
            <h1 className='paddint_top'> Bem-vindo ao Simulador Mybeef </h1>
            <Imagem src={logo} alt="Exemplo de imagem"/>
            
            </div>
        <div className="paragraphs">
          <p> O Simulador Mybeef é uma ferramenta para apoio a tomada de decisões de produtores rurais,
             que visa auxiliar na compreensão do efeito que indicadores zootécnicos exercem sobre o desempenho de sistemas
              de ciclo completo na pecuária de corte. </p>
          <p> Nesta ferramenta, por meio de simulações você pode: </p>
          <ul>
            <li className="p_mark">Calcular resultados produtivos do seu rebanho</li>
            <li className="p_mark">Simular resultados financeiros de diferentes cenários</li>
            <li className="p_mark">Simular metas específicas</li>
          </ul>
        </div>
        
        <div className="flex_line flex_jc_center">
          <Button 
            texto="Começar a simular!" 
            props_style="primary" 
            onClick={handleSubmit}
          />
        </div>
        </div>
    
    );
}

export default Inicial;
