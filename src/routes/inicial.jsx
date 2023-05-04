/* eslint-disable react/jsx-pascal-case */
import '../App.css';
import AlertDialog from '../components/alert/Alert';
import { Button } from '../components/button/button'
import Imagem from '../components/img/img';
import logo  from '../img/logo_mybeef.png';

function Inicial() {
  return (

        <div className = "content">
        <Imagem src={logo} alt="Exemplo de imagem"/>
        <h1> Bem-vindo ao Simulador Mybeef </h1>
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
          <Button texto='Começar a simular!' props_style="primary" link="/simulacao_base"/>
        </div>
        </div>
    
    );
}

export default Inicial;
