/* eslint-disable react/jsx-pascal-case */
import '../App.css';
import { Button } from '../components/button/button'
import { Chart } from "react-google-charts";


export const data = [
    ["Categoria", "Percentual"],
    ["Novilhas 3 anos", 11],
    ["Novilhas 2 anos", 2],
    ["Novilhas 1 anos", 2],
    ["Novilhos 3 anos", 2],
    ["Novilhos 2 anos", 7],
    ["Novilhos 1 ano", 7],
    ["Terneiros", 7],
    ["Touros", 7],
    ["Vacas", 7],
  ];

export const options = {
    title: "Composição do rebanho",
  };
  

function estoque_animal() {
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
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>Novilhas 2 anos</td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>Novilhas 1 ano</td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>Novilhos 3 anos</td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>Novilhos 2 anos</td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>Novilhos 1 ano</td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>Vacas</td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>Terneiros</td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>Touros</td>
          <td>...</td>
          <td>...</td>
        </tr>
      </tbody>
    </table>
   </div>
    <div className='div3_var_1_'>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
    </div>
    <div className='div4_var_1_'>

   
        <div className="flex_line flex_jc_center">

            <Button texto='Voltar' props_style="secondary" link="/resultado_simulacao"/>  
        </div> 
    </div>
        </div>
    
    );
}

export default estoque_animal;
