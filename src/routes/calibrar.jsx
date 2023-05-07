/* eslint-disable react/jsx-pascal-case */
import '../App.css';
import { Button } from '../components/button/button'
import { Button_Increment } from '../components/button_increment/button_increment';

function calibrar() {
  return (
    <div class="parent_var_1">
        
        <div className="div1_var_1_"> 
            <h1 > Calibrar </h1>

            <div className="paragraphs">
                <p> Calibrar a ferramenta para aproximar ao seu cenário real.  </p>
            </div>
        </div>

        <div className="div2_var_1_">  
            <div className="flex_line_var_1_ flex_jc_spacebetween ">
                <div className='flex_block width_50 bg-grey margin_bot'>
                    <p> Percentual de touros</p>
                    <Button_Increment min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                </div>
            </div>
            <div className="flex_line_var_1_ flex_jc_spacebetween">
                <div className='flex_block width_50 bg-grey margin_bot'>
                    <p> Percentual de descarte de vacas</p>
                    <Button_Increment  min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                </div>
            </div>
            <div className="flex_line_var_1_ flex_jc_spacebetween">
                <div className='flex_block width_50 bg-grey margin_bot'>
                    <p> Percentual de descarte de touros </p>
                    <Button_Increment  min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                </div>
            </div>
        </div>

        <div className="div3_var_1_">         
        
        <div className="flex_line  flex_jc_center width_50">
            <div className='flex_block flex_wrap flex_jc_center bg-grey'>
                    <p className='p_center margin_bot'> Novilhas com 3 anos </p>
                    
                    <div className='flex_block'> 
                        <p> Peso médio </p>
                        <Button_Increment  min={0} max={100} step={0.5} defaultValue={3} estado={true} />
                    </div>
                    
                    <div className='flex_block'>
                        <p> Peso venda </p>
                        <Button_Increment  min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                    </div>
            </div>
        </div>

        <div className="flex_line  flex_jc_center width_50">
            <div className='flex_block flex_wrap flex_jc_center bg-grey'>
                    <p  className='p_center margin_bot'> Novilhas com 2 anos </p>

                    <div className='flex_block'> 
                        <p> Peso médio </p>
                        <Button_Increment  min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                    </div>

                    <div className='flex_block'>
                        <p> Peso venda </p>
                        <Button_Increment  min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                    </div>
            </div>
        </div>

        <div className="flex_line  flex_jc_center width_50">
            <div className='flex_block flex_wrap flex_jc_center bg-grey'>
                <p  className='p_center margin_bot'> Novilhas com 1 ano </p>
                        <div className='flex_block'> 
                            <p> Peso médio </p>
                            <Button_Increment  min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                        </div>
                
                        <div className='flex_block'>
                            <p> Peso venda </p>
                            <Button_Increment  min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                        </div>
                </div>
        </div>

        <div className="flex_line  flex_jc_center width_50">
            <div className='flex_block flex_wrap flex_jc_center bg-grey'>
                <p  className='p_center margin_bot'> Novilhos com 3 anos </p>
                        <div className='flex_block'> 
                            <p> Peso médio </p>
                            <Button_Increment  min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                        </div>
                        <div className='flex_block'>
                            <p> Peso venda </p>
                            <Button_Increment  min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                        </div>
                </div>
            </div>


        <div className="flex_line  flex_jc_center width_50">
            <div className='flex_block flex_wrap flex_jc_center bg-grey'>
                <p  className='p_center margin_bot'> Novilhos com 2 anos </p>
                    <div className='flex_block'> 
                        <p> Peso médio </p>
                        <Button_Increment  min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                    </div>
                    <div className='flex_block'>
                        <p> Peso venda </p>
                        <Button_Increment  min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                    </div>
            </div>
        </div>

        <div className="flex_line  flex_jc_center width_50">
            <div className='flex_block flex_wrap flex_jc_center bg-grey'>
                <p  className='p_center margin_bot'> Novilho com 1 ano </p>
                    <div className='flex_block'> 
                        <p> Peso médio </p>
                        <Button_Increment  min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                    </div>
                    <div className='flex_block'>
                        <p> Peso venda </p>
                        <Button_Increment  min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                    </div>
            </div>
        </div>

        <div className="flex_line  flex_jc_center width_50">
            <div className='flex_block flex_wrap flex_jc_center bg-grey'>
                <p  className='p_center margin_bot'> Terneiros(as) </p>
                    <div className='flex_block'> 
                        <p> Peso médio </p>
                        <Button_Increment  min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                    </div>
                    <div className='flex_block'>
                        <p> Peso venda </p>
                        <Button_Increment  min={0} max={100} step={0.5} defaultValue={3} estado={true}/>
                    </div>
            </div>
        </div>

        <div className='div4'>
            <div className="flex_line_var_1_ flex_jc_spacebetween">
                <Button texto='Voltar' props_style="secondary" link="/simulacao_base"/> 
                <Button texto='Salvar' props_style="primary"/>  
            </div>
        </div>
    </div>
</div>
    
    );
}

export default calibrar;
