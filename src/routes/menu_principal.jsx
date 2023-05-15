/* eslint-disable react/jsx-pascal-case */
import '../App.css';
import { Button } from '../components/button/button'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Menu_principal() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const simulador = state.simulador;
    
    const option_1 = () => {
        navigate("/sensibilidade", { state: { simulador: simulador } });
      };
    const option_2 = () => {
        navigate("/limite_investimento", { state: { simulador: simulador } });
      };
    const option_3 = () => {
        navigate("/atingir_metas", { state: { simulador: simulador } });
      };
    const option_4 = () => {
        navigate("/gera_tabela_produtividade", { state: { simulador: simulador } });
      };
    const back = () => {
        navigate("/resultado_simulacao", { state: { simulador: simulador } });
      };
  return (
    <div className="parent_var_1_">
        <div className='div1_var_1_'>
            <h1> Menu de opções </h1>
        </div>
    <div className='div2_var_1_ flex_wrap'>
        <div className="flex_line_var_1_ flex_jc_evenly">
            <div className='flex_block_var_1_ bg-grey'>
                <p> Para simular a variação individual dos indicadores </p>
                <Button
                    texto="Simular!"
                    props_style="primary"
                    onClick={option_1}
                />
            </div>
        </div>
        <div className="flex_line_var_1_ flex_jc_evenly">
            <div className='flex_block_var_1_ bg-grey'>
                <p> Para calcular o limite de investimento entre dois cenários</p>
                <Button
                    texto="Calcular!"
                    props_style="primary"
                    onClick={option_2}
                />
            </div>
        </div>
        <div className="flex_line_var_1_ flex_jc_evenly">
            <div className='flex_block_var_1_ bg-grey'>
                <p> Para simular metas a serem atingidas </p>
                <Button
                    texto="Simular!"
                    props_style="primary"
                    onClick={option_3}
                />
            </div>
        </div>
        <div className="flex_line_var_1_ flex_jc_evenly">
            <div className='flex_block_var_1_ bg-grey'>
                <p> Para gerar tabela de simulações </p>
                <Button
                    texto="Gerar!"
                    props_style="primary"
                    onClick={option_4}
                />
            </div>
        </div>
    </div>
    <div className='div4_var_1_'>
        <div className="flex_line_var_1_ flex_jc_center">
            <Button
            texto="Voltar"
            props_style="secondary"
            onClick={back}
          />
        </div>
    </div>
        </div>
    
    );
}

export default Menu_principal;
