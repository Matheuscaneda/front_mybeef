/* eslint-disable react/jsx-pascal-case */
import '../App.css';
import { Button } from '../components/button/button'
import { Button_Increment } from '../components/button_increment/button_increment';


function simulacao_base() {
  return (
<div className="content">
        <h1> Estoque Animal </h1>
        <div className="paragraphs">
          <p> Visualização númerica e gráfica da composição do rebanho </p>
        </div>
        <div className="flex_line">
            <p> Categoria</p>
            <p> Percentual </p>
            <p> Unidades </p>
        </div>
        <div className="flex_line">
            <p> Novilhas 3 anos </p>
            <p> 5% </p>
            <p> 1000 </p>
        </div>
        <div className="flex_line">
            <p> Novilhas 2 anos </p>
            <p> 5% </p>
            <p> 1000 </p>
        </div>
        <div className="flex_line">
            <p> Novilha 1 ano </p>
            <p> 5% </p>
            <p> 1000 </p>
        </div>
        <div className="flex_line">
            <p> Novilhos 3 anos </p>
            <p> 5% </p>
            <p> 1000 </p>
        </div>
        <div className="flex_line">
            <p> Novilhos 2 anos </p>
            <p> 5% </p>
            <p> 1000 </p>
        </div>
        <div className="flex_line">
            <p> Novilho 1 ano </p>
            <p> 5% </p>
            <p> 1000 </p>
        </div>
        <div className="flex_line">
            <p> Vacas </p>
            <p> 5% </p>
            <p> 1000 </p>
        </div>
        <div className="flex_line">
            <p> Touros </p>
            <p> 5% </p>
            <p> 1000 </p>
        </div>
        <div className="flex_line">
            <p> Terneiros(as) </p>
            <p> 5% </p>
            <p> 1000 </p>
        </div>

        <div className="flex_line">

            <Button texto='Voltar' props_style="secondary" link="/resultado_simulacao"/>  
        </div>
        </div>
    
    );
}

export default simulacao_base;
