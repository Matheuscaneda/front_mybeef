/* eslint-disable react/jsx-pascal-case */
import '../App.css';
import { Button } from '../components/button/button'
import { Button_Increment } from '../components/button_increment/button_increment';
import { useLocation } from "react-router-dom/dist";
import { useNavigate } from "react-router-dom/dist";
import { useState } from 'react';


function limite_investimento() {

    const { state } = useLocation();
    const navigate = useNavigate();
    const simulador = state.simulador;

    const [percentualDesmame, setPercentualDesmame] = useState(simulador.desmame);
    const [percentualMortalidade, setPercentualMortalidade] = useState(simulador.mortalidade);
    const [percentualTouros, setPercentualTouros] = useState(simulador.touros);
    const [idadeEntoure, setIdadeEntoure] = useState(simulador.idade_entoure);
    const [idadeVenda, setIdadeVenda] = useState(simulador.idade_venda);
    const [lotacaoHectare, setLotacaoHectare] = useState(simulador.lotacao);
    const [PrecoVenda, setPrecoVenda] = useState(4.20)

    const [percentualDesmameFuture, setPercentualDesmameFuture] = useState(simulador.desmame);
    const [percentualMortalidadeFuture, setPercentualMortalidadeFuture] = useState(simulador.mortalidade);
    const [percentualTourosFuture, setPercentualTourosFuture] = useState(simulador.touros);
    const [idadeEntoureFuture, setIdadeEntoureFuture] = useState(simulador.idade_entoure);
    const [idadeVendaFuture, setIdadeVendaFuture] = useState(simulador.idade_venda);
    const [lotacaoHectareFuture, setLotacaoHectareFuture] = useState(simulador.lotacao);
    const [PrecoVendaFuture, setPrecoVendaFuture] = useState(4.20)
  
    const handleSubmit = () => {
        navigate("/menu_principal", { state: { simulador: simulador } });
      }
    const handleSubmit_2 = () => {
        navigate("/resultado_limite_investimento", { state: { simulador: simulador } });
      }
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
                <p className='p_center strong'> Cenário Base</p>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Percentual de desmame </p>
                    <Button_Increment
                        min={0}
                        max={100}
                        step={1}
                        value={percentualDesmame}
                        setValue={setPercentualDesmame}
                        disabled={true}
                    />
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Percentual de mortalidade </p>
                    <Button_Increment
                        min={0}
                        max={100}
                        step={1}
                        value={percentualMortalidade}
                        setValue={setPercentualMortalidade}
                        disabled={true}
                    />
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Percentual de touros </p>
                    <Button_Increment
                        min={0}
                        max={100}
                        step={1}
                        value={percentualTouros}
                        setValue={setPercentualTouros}
                        disabled={true}
                    />
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Idade de entoure </p>
                    <Button_Increment
                        min={1}
                        max={3}
                        step={1}
                        value={idadeEntoure}
                        setValue={setIdadeEntoure}
                        disabled={true}
                    />
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Idade de venda </p>
                    <Button_Increment
                        min={1}
                        max={3}
                        step={1}
                        value={idadeVenda}
                        setValue={setIdadeVenda}
                        disabled={true}
                    />
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Lotação por hectare </p>
                    <Button_Increment
                        min={1}
                        max={10}
                        step={0.5}
                        value={lotacaoHectare}
                        setValue={setLotacaoHectare}
                        disabled={true}
                    />
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Preço de venda (R$)</p>
                    <Button_Increment
                        min={0.1}
                        max={100}
                        step={0.1}
                        value={PrecoVenda}
                        setValue={setPrecoVenda}
                    />
                </div>
            </div>
        </div>

        <div className='div3'>
            <div className="flex_line flex_jc_spacebetween">
                <p className='p_center strong'> Cenário Futuro</p>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Percentual de desmame </p>
                    <Button_Increment
                        min={0.1}
                        max={100}
                        step={0.1}
                        value={percentualDesmameFuture}
                        setValue={setPercentualDesmameFuture}
                    />
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Percentual de mortalidade </p>
                    <Button_Increment
                        min={0.1}
                        max={100}
                        step={0.1}
                        value={percentualMortalidadeFuture}
                        setValue={setPercentualMortalidadeFuture}
                    />
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Percentual de touros </p>
                    <Button_Increment
                        min={0.1}
                        max={100}
                        step={0.1}
                        value={percentualTourosFuture}
                        setValue={setPercentualTourosFuture}
                    />
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Idade de entoure </p>
                    <Button_Increment
                        min={0.1}
                        max={100}
                        step={0.1}
                        value={idadeEntoureFuture}
                        setValue={setIdadeEntoureFuture}
                    />
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Idade de venda </p>
                    <Button_Increment
                        min={0.1}
                        max={100}
                        step={0.1}
                        value={idadeVendaFuture}
                        setValue={setIdadeVendaFuture}
                    />
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Lotação por hectare </p>
                    <Button_Increment
                        min={0.1}
                        max={100}
                        step={0.1}
                        value={lotacaoHectareFuture}
                        setValue={setLotacaoHectareFuture}
                    />
                </div>
            </div>
            <div className="flex_line flex_jc_spacebetween bg-grey">
                <div className="flex_block width">
                    <p> Preço de venda (R$) </p>
                    <Button_Increment
                        min={0.1}
                        max={100}
                        step={0.1}
                        value={PrecoVendaFuture}
                        setValue={setPrecoVendaFuture}
                    />
                </div>
            </div>
        </div>
        <div className='div4'>
            <div className="flex_line_var_1_ flex_jc_spacebetween">
                <Button
                    texto="Voltar"
                    props_style="secondary"
                    onClick={handleSubmit}
                />
                <Button
                    texto="Calcular"
                    props_style="primary"
                    onClick={handleSubmit_2}
                />
            </div>
        </div>
    </div>
    );
}

export default limite_investimento;
