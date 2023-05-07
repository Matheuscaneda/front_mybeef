/* eslint-disable react/jsx-pascal-case */
import '../App.css';
import { Button } from '../components/button/button'
import { Button_Increment } from '../components/button_increment/button_increment';



function limite_investimento() {
  return (
    <div className='parent'>
        <div className='div1'>
            <h1> Limite de investimento </h1>
            <div className="paragraphs">
              <p> Nesta opção, você pode calcular a diferença de faturamento entre dois cenários e descobrir o limite de investimento 
                para atingir o cenário futuro.</p>
            </div>
        </div>
        <div className='div2'>
            <div className="flex_line flex_jc_spacebetween">
                <p className='p_center'> Cenário Base</p>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Percentual de desmame </p>
                    <Button_Increment  min={0} max={100} step={0.5} defaultValue={3}  estado={false}/>
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Percentual de mortalidade </p>
                    <Button_Increment  min={0} max={100} step={0.5} defaultValue={3}  estado={false}/>
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Área de pastagem </p>
                    <Button_Increment  min={0} max={100} step={0.5} defaultValue={3}  estado={false}/>
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Idade de entoure </p>
                    <Button_Increment  min={0} max={100} step={0.5} defaultValue={3}  estado={false}/>
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Idade de venda </p>
                    <Button_Increment min={0} max={100} step={0.5} defaultValue={3}  estado={false}/>
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Lotação por hectare </p>
                    <Button_Increment  min={0} max={100} step={0.5} defaultValue={3}  estado={false}/>
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Preço de venda (R$)</p>
                    <Button_Increment  min={0} max={100} step={0.5} defaultValue={3}  estado={false}/>
                </div>
            </div>
        </div>

        <div className='div3'>
            <div className="flex_line flex_jc_spacebetween">
                <p className='p_center'> Cenário Futuro</p>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Percentual de desmame </p>
                    <Button_Increment  min={0} max={100} step={0.5} defaultValue={3}  estado={true}/>
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Percentual de mortalidade </p>
                    <Button_Increment  min={0} max={100} step={0.5} defaultValue={3}  estado={true}/>
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Área de pastagem </p>
                    <Button_Increment  min={0} max={100} step={0.5} defaultValue={3}  estado={true}/>
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Idade de entoure </p>
                    <Button_Increment  min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Idade de venda </p>
                    <Button_Increment min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Lotação por hectare </p>
                    <Button_Increment  min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Preço de venda (R$) </p>
                    <Button_Increment  min={0} max={100} step={0.5} defaultValue={3}  estado={true}/>
                </div>
            </div>
        </div>
        <div className='div4'>
            <div className="flex_line_var_1_ flex_jc_spacebetween">
                <Button texto='Voltar' props_style="secondary" link="/menu_principal"/>  
                <Button texto='Calcular' props_style="primary" link="/resultado_limite_investimento"/>
            </div>
        </div>
    </div>
    );
}

export default limite_investimento;
