/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import "../App.css";
import { Button } from "../components/button/button";
import { Button_Increment } from "../components/button_increment/button_increment";
import { useNavigate } from "react-router-dom/dist";
import { useLocation } from "react-router-dom/dist";

function Resultado_Tabela_produtividade() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const simulador = state.simulador;
  

  }

export default Resultado_Tabela_produtividade;
