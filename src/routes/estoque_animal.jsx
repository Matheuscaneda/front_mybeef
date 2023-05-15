/* eslint-disable react/jsx-pascal-case */
import '../App.css';
import { Button } from '../components/button/button'
import { Chart } from "react-google-charts";
import { useLocation } from "react-router-dom/dist";
import { useNavigate } from "react-router-dom/dist";


export const options = {
    title: "Composição do rebanho",
  };
  

function estoque_animal() {

  const { state } = useLocation();
  const navigate = useNavigate();
  const simulador = state.simulador;
  

  const handleSubmit = () => {
    navigate("/resultado_simulacao", { state: { simulador: simulador } });
  };
 /* const data = [
    ["Categoria", "Percentual"],
    ["Novilhas 3 anos", 5],
    ["Novilhas 2 anos", 2],
    ["Novilhas 1 anos", 2],
    ["Novilhos 3 anos", 2],
    ["Novilhos 2 anos", 7],
    ["Novilhos 1 ano", 7],
    ["Terneiros", 7],
    ["Touros", 7],
    ["Vacas", 7],
  ];*/

  return (
    <div className="parent_var_1_">
      <div className='div1'>
          <h1> Estoque Animal </h1>
          <div className="paragraphs">
            <p> Visualização númerica e gráfica da composição do rebanho </p>
          </div>
      </div>

      <div className='div2_var_1_ flex_jc_center'>
      <table className="table">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Percentual</th>
            <th>Unidades</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >Novilhas 3 anos</td>
            <td>{simulador.estoque_percentual_cabecas_novilha_3.toFixed(1)}%</td>
            <td>{simulador.estoque_percentual_ua_cabecas_novilha_3.toFixed(0)}</td>
          </tr>
          <tr>
            <td>Novilhas 2 anos</td>
            <td>{simulador.estoque_percentual_cabecas_novilha_2.toFixed(1)}%</td>
            <td>{simulador.estoque_percentual_ua_cabecas_novilha_2.toFixed(0)}</td>
          </tr>
          <tr>
            <td>Novilhas 1 ano</td>
            <td>{simulador.estoque_percentual_cabecas_novilha_1.toFixed(1)}%</td>
            <td>{simulador.estoque_percentual_ua_cabecas_novilha_1.toFixed(0)}</td>
          </tr>
          <tr>
            <td>Novilhos 3 anos</td>
            <td>{simulador.estoque_percentual_cabecas_novilho_3.toFixed(1)}%</td>
            <td>{simulador.estoque_percentual_ua_cabecas_novilha_3.toFixed(0)}</td>
          </tr>
          <tr>
            <td>Novilhos 2 anos</td>
            <td>{simulador.estoque_percentual_cabecas_novilho_2.toFixed(1)}%</td>
            <td>{simulador.estoque_percentual_ua_cabecas_novilha_2.toFixed(0)}</td>
          </tr>
          <tr>
            <td>Novilhos 1 ano</td>
            <td>{simulador.estoque_percentual_cabecas_novilho_1.toFixed(1)}%</td>
            <td>{simulador.estoque_percentual_ua_cabecas_novilha_1.toFixed(0)}</td>
          </tr>
          <tr>
            <td>Vacas</td>
            <td>{simulador.estoque_percentual_cabecas_vacas.toFixed(1)}%</td>
            <td>{simulador.estoque_percentual_ua_cabecas_vacas.toFixed(0)}</td>
          </tr>
          <tr>
            <td>Terneiros</td>
            <td>{simulador.estoque_percentual_cabecas_terneiros.toFixed(1)}%</td>
            <td>{simulador.estoque_percentual_ua_cabecas_terneiros.toFixed(0)}</td>
          </tr>
          <tr>
            <td>Touros</td>
            <td>{simulador.estoque_percentual_cabecas_touros.toFixed(1)}%</td>
            <td>{simulador.estoque_percentual_ua_cabecas_touros.toFixed(0)}</td>
        </tr>
      </tbody>
    </table>
    </div>
      <div className='div3_var_1_'>
        <Chart
          chartType="PieChart"
          data={[
            ["Categoria", "Percentual"],
            ["Novilhas 3 anos", simulador.estoque_percentual_cabecas_novilha_3],
            ["Novilhas 2 anos", simulador.estoque_percentual_cabecas_novilha_2],
            ["Novilhas 1 anos", simulador.estoque_percentual_cabecas_novilha_1],
            ["Novilhos 3 anos", simulador.estoque_percentual_cabecas_novilho_3],
            ["Novilhos 2 anos", simulador.estoque_percentual_cabecas_novilho_2],
            ["Novilhos 1 ano", simulador.estoque_percentual_cabecas_novilho_1],
            ["Terneiros", simulador.estoque_percentual_cabecas_terneiros],
            ["Touros", simulador.estoque_percentual_cabecas_touros],
            ["Vacas", simulador.estoque_percentual_cabecas_vacas],
          ]}
          options={options}
          width={"100%"}
          height={"400px"}
        />
        </div>
      <div className='div4_var_1_'>

   
        <div className="flex_line flex_jc_center">

        <Button
          texto="Voltar"
          props_style="primary"
          onClick={handleSubmit}
        />  


        </div> 
      </div>
        </div>
    
    );
}

export default estoque_animal;
