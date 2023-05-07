class Simulador {

  constructor(entradas) {

    //ÍNDICES ZOOTÉCNICOS -- [VALIDADO]
    this.desmame        =  entradas.desmame;
    this.mortalidade    =  entradas.mortalidade;
    this.touros         =  entradas.touros;
    this.idade_venda    =  entradas.idade_venda;
    this.idade_entoure  =  entradas.idade_entoure
    this.lotacao        =  entradas.lotacao;
    this.unidade_animal =  entradas.unidade_animal;

    //Paramêtros de calibração

    //Paramêtros optativos - em Percentual -- [VALIDADO]
    this.descarte_vacas_ano  = 20;
    this.descarte_touros_ano = 25;

    //Pesos médios das categorias em estoque - em KG
    this.peso_medio_vacas     = 450;
    this.peso_medio_novilha_3 = 350;
    this.peso_medio_novilha_2 = 300;
    this.peso_medio_novilha_1 = 250;
    this.peso_medio_novilho_3 = 500;
    this.peso_medio_novilho_2 = 400;
    this.peso_medio_novilho_1 = 300;
    this.peso_medio_terneiros = 180;
    this.peso_medio_touros    = 650;
    this.peso_medio_machos    = 0;
    this.peso_medio_femeas    = 0;
    this.peso_medio_total     = 0;

    //Pesos de venda das categorias em estoque - em KG
    this.peso_venda_vacas     = 500;
    this.peso_venda_novilha_3 = 470;
    this.peso_venda_novilha_2 = 420;
    this.peso_venda_novilha_1 = 320;
    this.peso_venda_novilho_3 = 550;
    this.peso_venda_novilho_2 = 480;
    this.peso_venda_novilho_1 = 360;
    this.peso_venda_terneiros = 180;
    this.peso_venda_touros    = 825;

    //ESTOQUE ANIMAL - percentual de cabeças / percentual de unidade animal por área // Unidades por área

    //Percentual de cabeças em Estoque
    this.estoque_percentual_cabecas_vacas     = 0;
    this.estoque_percentual_cabecas_novilha_3 = 0;
    this.estoque_percentual_cabecas_novilha_2 = 0;
    this.estoque_percentual_cabecas_novilha_1 = 0;
    this.estoque_percentual_cabecas_novilho_3 = 0;
    this.estoque_percentual_cabecas_novilho_2 = 0;
    this.estoque_percentual_cabecas_novilho_1 = 0;
    this.estoque_percentual_cabecas_terneiros = 0;
    this.estoque_percentual_cabecas_touros    = 0;
    this.estoque_percentual_cabecas_machos    = 0;
    this.estoque_percentual_cabecas_femeas    = 0;
    this.estoque_percentual_cabecas_total     = 100;

    //Percentual por unidade animal em Estoque
    this.estoque_percentual_ua_cabecas_vacas     = 0;
    this.estoque_percentual_ua_cabecas_novilha_3 = 0;
    this.estoque_percentual_ua_cabecas_novilha_2 = 0;
    this.estoque_percentual_ua_cabecas_novilha_1 = 0;
    this.estoque_percentual_ua_cabecas_novilho_3 = 0;
    this.estoque_percentual_ua_cabecas_novilho_2 = 0;
    this.estoque_percentual_ua_cabecas_novilho_1 = 0;
    this.estoque_percentual_ua_cabecas_terneiros = 0;
    this.estoque_percentual_ua_cabecas_touros    = 0;
    this.estoque_percentual_ua_cabecas_machos    = 0;
    this.estoque_percentual_ua_cabecas_femeas    = 0;
    this.estoque_percentual_ua_cabecas_total     = 100;

    //Unidade animal por unidade de área
    this.estoque_unidade_cabecas_vacas     = 0;
    this.estoque_unidade_cabecas_novilha_3 = 0;
    this.estoque_unidade_cabecas_novilha_2 = 0;
    this.estoque_unidade_cabecas_novilha_1 = 0;
    this.estoque_unidade_cabecas_novilho_3 = 0;
    this.estoque_unidade_cabecas_novilho_2 = 0;
    this.estoque_unidade_cabecas_novilho_1 = 0;
    this.estoque_unidade_cabecas_terneiros = 0;
    this.estoque_unidade_cabecas_touros    = 0;
    this.estoque_unidade_cabecas_machos    = 0;
    this.estoque_unidade_cabecas_femeas    = 0;
    this.estoque_unidade_cabecas_total     = 100;
    this.estoque_relacao_unidade_por_area  = 0;

    //Resultados em função das Metas

    //Função meta em relação a percentual de VACAS
    this.vacas_unidades_vacas      = 0;
    this.vacas_unidades_novilhos_1 = 0;
    this.vacas_unidades_novilhos_2 = 0;
    this.vacas_unidades_novilhos_3 = 0;
    this.vacas_unidades_novilhas_1 = 0;
    this.vacas_unidades_novilhas_2 = 0;
    this.vacas_unidades_novilhas_3 = 0;
    this.vacas_unidades_terneiros  = 0;
    this.vacas_unidades_touros     = 0;
    this.vacas_unidades_machos     = 0;
    this.vacas_unidades_femeas     = 0;
    this.vacas_unidades_total      = 0;
    this.vacas_unidades_total_UA   = 0;
    this.vacas_area_total          = 0;

    //Função meta em relação a unidades de área
    this.area_unidades_vacas      = 0;
    this.area_unidades_novilhos_1 = 0;
    this.area_unidades_novilhos_2 = 0;
    this.area_unidades_novilhos_3 = 0;
    this.area_unidades_novilhas_1 = 0;
    this.area_unidades_novilhas_2 = 0;
    this.area_unidades_novilhas_3 = 0;
    this.area_unidades_terneiros  = 0;
    this.area_unidades_touros     = 0;
    this.area_unidades_machos     = 0;
    this.area_unidades_femeas     = 0;
    this.area_unidades_total      = 0;
    this.area_unidades_total_UA   = 0;
    this.area_area_total          = 0;

    //Função meta em relação a unidades de terneiros
    this.tmf_unidades_vacas      = 0;
    this.tmf_unidades_novilhos_1 = 0;
    this.tmf_unidades_novilhos_2 = 0;
    this.tmf_unidades_novilhos_3 = 0;
    this.tmf_unidades_novilhas_1 = 0;
    this.tmf_unidades_novilhas_2 = 0;
    this.tmf_unidades_novilhas_3 = 0;
    this.tmf_unidades_terneiros  = 0;
    this.tmf_unidades_touros     = 0;
    this.tmf_unidades_machos     = 0;
    this.tmf_unidades_femeas     = 0;
    this.tmf_unidades_total      = 0;
    this.tmf_unidades_total_UA   = 0;
    this.tmf_area_total          = 0;

    //Função meta em relação a unidades de novilhos vendidos
    this.novilho_unidades_vacas      = 0;
    this.novilho_unidades_novilhos_1 = 0;
    this.novilho_unidades_novilhos_2 = 0;
    this.novilho_unidades_novilhos_3 = 0;
    this.novilho_unidades_novilhas_1 = 0;
    this.novilho_unidades_novilhas_2 = 0;
    this.novilho_unidades_novilhas_3 = 0;
    this.novilho_unidades_terneiros  = 0;
    this.novilho_unidades_touros     = 0;
    this.novilho_unidades_machos     = 0;
    this.novilho_unidades_femeas     = 0;
    this.novilho_unidades_total      = 0;
    this.novilho_unidades_total_UA   = 0;
    this.novilho_area_total          = 0;


    //Desfrutes
    this.cria_femeas_terneiro       = 0;
    this.desfrute_percentual_cabeça = 0;
    this.desfrute_percentual_kg     = 0;

    //Produção Animal - Rebanho estável - em relação a metas
    this.efic_cria_kgTerneiro_kgUnidProd = 0;
    this.produtividade_por_area          = 0;

    //Em relação a vacas
    this.prod_vacas_cabeca_novilhos        = 0;
    this.prod_vacas_cabeca_novilhas        = 0;
    this.prod_vacas_cabeca_vacas_descarte  = 0;
    this.prod_vacas_cabeca_touros_descarte = 0;
    this.prod_vacas_cabeca_total_vendas    = 0;

    //Em relação a area
    this.prod_area_cabeca_novilhos        = 0;
    this.prod_area_cabeca_novilhas        = 0;
    this.prod_area_cabeca_vacas_descarte  = 0;
    this.prod_area_cabeca_touros_descarte = 0;
    this.prod_area_cabeca_total_vendas    = 0;

    //Em relação a tmf
    this.prod_tmf_cabeca_novilhos         = 0;
    this.prod_tmf_cabeca_novilhas         = 0;
    this.prod_tmf_cabeca_vacas_descarte   = 0;
    this.prod_tmf_cabeca_touros_descarte  = 0;
    this.prod_tmf_cabeca_total_vendas     = 0;

    //Em relação a novilho
    this.prod_novilho_cabeca_novilhos        = 0;
    this.prod_novilho_cabeca_novilhas        = 0;
    this.prod_novilho_cabeca_vacas_descarte  = 0;
    this.prod_novilho_cabeca_touros_descarte = 0;
    this.prod_novilho_cabeca_total_vendas    = 0;

  } //Final do constructor

 set_calibrar(input_calibrar) {
  
  //Função SETa os valores da calibração quando ocorrerem mudanças
  //Pesos médios das categorias em estoque - em KG
  this.peso_medio_vacas     = input_calibrar.peso_medio_vacas;
  this.peso_medio_novilha_3 = input_calibrar.peso_medio_novilha_3;
  this.peso_medio_novilha_2 = input_calibrar.peso_medio_novilha_2;
  this.peso_medio_novilha_1 = input_calibrar.peso_medio_novilha_1;
  this.peso_medio_novilho_3 = input_calibrar.peso_medio_novilho_3;
  this.peso_medio_novilho_2 = input_calibrar.peso_medio_novilho_2;
  this.peso_medio_novilho_1 = input_calibrar.peso_medio_novilho_1;
  this.peso_medio_terneiros = input_calibrar.peso_medio_terneiros;
  this.peso_medio_touros    = input_calibrar.peso_medio_touros;

  //Pesos de venda das categorias em estoque - em KG
  this.peso_venda_vacas     = input_calibrar.peso_venda_vacas;
  this.peso_venda_novilha_3 = input_calibrar.peso_venda_novilha_3;
  this.peso_venda_novilha_2 = input_calibrar.peso_venda_novilha_2;
  this.peso_venda_novilha_1 = input_calibrar.peso_venda_novilha_1;
  this.peso_venda_novilho_3 = input_calibrar.peso_venda_novilho_3;
  this.peso_venda_novilho_2 = input_calibrar.peso_venda_novilho_2;
  this.peso_venda_novilho_1 = input_calibrar.peso_venda_novilho_1;
  this.peso_venda_terneiros = input_calibrar.peso_venda_terneiros;
  this.peso_venda_touros    = input_calibrar.peso_venda_touros;

  //Descartes
  this.descarte_touros_ano  = input_calibrar.descarte_touros_ano;
  this.descarte_vacas_ano   = input_calibrar.descarte_vacas_ano;
}

calcula_peso_medio_machos() {

  var aux = ((this.peso_medio_novilho_1 * this.vacas_unidades_novilhos_1)
    + (this.peso_medio_novilho_2        * this.vacas_unidades_novilhos_2)
    + (this.peso_medio_novilho_3        * this.vacas_unidades_novilhos_3)
    + ((this.peso_medio_terneiros       * this.vacas_unidades_terneiros) / 2)
    + (this.peso_medio_touros           * this.vacas_unidades_touros))
    / this.vacas_unidades_machos;

  this.peso_medio_machos = aux;
}   

calcula_peso_medio_femeas() {
  var aux = ((this.peso_medio_novilha_1 * this.vacas_unidades_novilhas_1)
   
    + (this.peso_medio_novilha_2 * this.vacas_unidades_novilhas_2)
    + (this.peso_medio_novilha_3 * this.vacas_unidades_novilhas_3)
    + ((this.peso_medio_terneiros * this.vacas_unidades_terneiros) / 2)
    + (this.peso_medio_vacas * this.vacas_unidades_vacas))
    / this.vacas_unidades_femeas;
  this.peso_medio_femeas = aux;
} 

calcula_peso_medio_total() {
  var aux = (((this.peso_medio_novilho_1 * this.vacas_unidades_novilhos_1)
    + (this.peso_medio_novilho_2         * this.vacas_unidades_novilhos_2)
    + (this.peso_medio_novilho_3         * this.vacas_unidades_novilhos_3)
    + (this.peso_medio_terneiros         * this.vacas_unidades_terneiros / 2)
    + (this.peso_medio_touros            * this.vacas_unidades_touros))
    + ((this.peso_medio_novilha_1  * this.vacas_unidades_novilhas_1)
      + (this.peso_medio_novilha_2 * this.vacas_unidades_novilhas_2)
      + (this.peso_medio_novilha_3 * this.vacas_unidades_novilhas_3)
      + (this.peso_medio_terneiros * this.vacas_unidades_terneiros / 2)
      + (this.peso_medio_vacas     * this.vacas_unidades_vacas)))
    / (this.vacas_unidades_machos  + this.vacas_unidades_femeas);

    this.peso_medio_total = aux;
}

estoque_animal_percentual_cabeca(){
  this.estoque_percentual_cabecas_vacas     =   this.vacas_unidades_vacas       / (this.vacas_unidades_total) * 100;
  this.estoque_percentual_cabecas_novilha_3 =   this.vacas_unidades_novilhas_3  / (this.vacas_unidades_total) * 100;
  this.estoque_percentual_cabecas_novilha_2 =   this.vacas_unidades_novilhas_2  / (this.vacas_unidades_total) * 100;
  this.estoque_percentual_cabecas_novilha_1 =   this.vacas_unidades_novilhas_1  / (this.vacas_unidades_total) * 100;
  this.estoque_percentual_cabecas_novilho_3 =   this.vacas_unidades_novilhos_3  / (this.vacas_unidades_total) * 100;
  this.estoque_percentual_cabecas_novilho_2 =   this.vacas_unidades_novilhos_2  / (this.vacas_unidades_total) * 100;
  this.estoque_percentual_cabecas_novilho_1 =   this.vacas_unidades_novilhos_1  / (this.vacas_unidades_total) * 100;
  this.estoque_percentual_cabecas_terneiros =   this.vacas_unidades_terneiros   / (this.vacas_unidades_total) * 100;
  this.estoque_percentual_cabecas_touros    =   this.vacas_unidades_touros      / (this.vacas_unidades_total) * 100;
  this.estoque_percentual_cabecas_machos    =   this.vacas_unidades_machos      / (this.vacas_unidades_total) * 100;
  this.estoque_percentual_cabecas_femeas    =   this.vacas_unidades_femeas      / (this.vacas_unidades_total) * 100;
  this.estoque_percentual_cabecas_total     =   this.vacas_unidades_total       / (this.vacas_unidades_total) * 100;
}

estoque_animal_unidade_area_potencia(){
  this.estoque_unidade_cabecas_vacas     =  (this.peso_medio_vacas      / this.unidade_animal)  ** 0.75;
  this.estoque_unidade_cabecas_novilha_3 =  (this.peso_medio_novilha_3  / this.unidade_animal)  ** 0.75;
  this.estoque_unidade_cabecas_novilha_2 =  (this.peso_medio_novilha_2  / this.unidade_animal)  ** 0.75;
  this.estoque_unidade_cabecas_novilha_1 =  (this.peso_medio_novilha_1  / this.unidade_animal)  ** 0.75;
  this.estoque_unidade_cabecas_novilho_3 =  (this.peso_medio_novilho_3  / this.unidade_animal)  ** 0.75;
  this.estoque_unidade_cabecas_novilho_2 =  (this.peso_medio_novilho_2  / this.unidade_animal)  ** 0.75;
  this.estoque_unidade_cabecas_novilho_1 =  (this.peso_medio_novilho_1  / this.unidade_animal)  ** 0.75;
  this.estoque_unidade_cabecas_terneiros =  (this.peso_medio_terneiros  / this.unidade_animal)  ** 0.75;
  this.estoque_unidade_cabecas_touros    =  (this.peso_medio_touros     / this.unidade_animal)  ** 0.75;

  this.estoque_unidade_cabecas_machos    =  ((this.estoque_unidade_cabecas_novilho_3  * this.vacas_unidades_novilhos_3)
  + (this.estoque_unidade_cabecas_novilho_2   * this.vacas_unidades_novilhos_2)
  + (this.estoque_unidade_cabecas_novilho_1   * this.vacas_unidades_novilhos_1)
  + ((this.estoque_unidade_cabecas_terneiros  * this.vacas_unidades_terneiros)  / 2)
  + (this.estoque_unidade_cabecas_touros      * this.vacas_unidades_touros))  / this.vacas_unidades_machos;

  this.estoque_unidade_cabecas_femeas    =  ((this.estoque_unidade_cabecas_novilha_3  * this.vacas_unidades_novilhas_3)
  + (this.estoque_unidade_cabecas_novilha_2   * this.vacas_unidades_novilhas_2)
  + (this.estoque_unidade_cabecas_novilha_1   * this.vacas_unidades_novilhas_1)
  + ((this.estoque_unidade_cabecas_terneiros  * this.vacas_unidades_terneiros)  / 2)
  + (this.estoque_unidade_cabecas_vacas       * this.vacas_unidades_vacas)) / this.vacas_unidades_femeas;

  this.estoque_relacao_unidade_por_area  =  (this.vacas_unidades_total_UA/this.vacas_unidades_total);
}

estoque_animal_unidade_area(){
  this.estoque_percentual_ua_cabecas_vacas     = (this.vacas_unidades_vacas       * this.estoque_unidade_cabecas_vacas);
  this.estoque_percentual_ua_cabecas_novilha_3 = (this.vacas_unidades_novilhas_3  * this.estoque_unidade_cabecas_novilha_3);
  this.estoque_percentual_ua_cabecas_novilha_2 = (this.vacas_unidades_novilhas_2  * this.estoque_unidade_cabecas_novilha_2);
  this.estoque_percentual_ua_cabecas_novilha_1 = (this.vacas_unidades_novilhas_1  * this.estoque_unidade_cabecas_novilha_1);
  this.estoque_percentual_ua_cabecas_novilho_3 = (this.vacas_unidades_novilhos_3  * this.estoque_unidade_cabecas_novilho_3);
  this.estoque_percentual_ua_cabecas_novilho_2 = (this.vacas_unidades_novilhos_2  * this.estoque_unidade_cabecas_novilho_2);
  this.estoque_percentual_ua_cabecas_novilho_1 = (this.vacas_unidades_novilhos_1  * this.estoque_unidade_cabecas_novilho_1);
  this.estoque_percentual_ua_cabecas_terneiros = (this.vacas_unidades_terneiros   * this.estoque_unidade_cabecas_terneiros);
  this.estoque_percentual_ua_cabecas_touros    = (this.vacas_unidades_touros      * this.estoque_unidade_cabecas_touros);

  this.estoque_percentual_ua_cabecas_machos    = ((this.estoque_unidade_cabecas_novilho_3*this.vacas_unidades_novilhos_3)
    + (this.estoque_unidade_cabecas_novilho_2  *  this.vacas_unidades_novilhos_2)
    + (this.estoque_unidade_cabecas_novilho_1  *  this.vacas_unidades_novilhos_1)
    + ((this.estoque_unidade_cabecas_terneiros *  this.vacas_unidades_terneiros) / 2)
    + (this.estoque_unidade_cabecas_touros     *  this.vacas_unidades_touros))   / (this.vacas_unidades_total_UA*100);

  this.estoque_percentual_ua_cabecas_femeas    =  ((this.estoque_unidade_cabecas_novilha_3 * this.vacas_unidades_novilhas_3)
    + (this.estoque_unidade_cabecas_novilha_2  *  this.vacas_unidades_novilhas_2)
    + (this.estoque_unidade_cabecas_novilha_1  *  this.vacas_unidades_novilhas_1)
    + ((this.estoque_unidade_cabecas_terneiros *  this.vacas_unidades_terneiros)  / 2)
    + (this.estoque_unidade_cabecas_vacas      *  this.vacas_unidades_vacas))     / (this.vacas_unidades_total_UA*100);

  this.estoque_percentual_ua_cabecas_total = 100;
}

meta_vacas(unidade_vaca) {

  this.vacas_unidades_vacas      = unidade_vaca;
  this.vacas_unidades_novilhas_1 = ((((this.desmame / 100) * unidade_vaca)) - ((this.mortalidade / 100) * (this.desmame / 2))) /2;
  this.vacas_unidades_novilhos_1 = ((((this.desmame / 100) * unidade_vaca)) - ((this.mortalidade / 100) * (this.desmame / 2))) /2;
  this.vacas_unidades_terneiros  = (this.desmame    / 100) * unidade_vaca;
  this.vacas_unidades_touros     = (this.touros     / 100) * unidade_vaca;

  if (this.idade_entoure == 1) {
    this.vacas_unidades_novilhas_2 = 0;
  } else {
    this.vacas_unidades_novilhas_2 = this.vacas_unidades_novilhas_1 - ((this.mortalidade / 100) * this.vacas_unidades_novilhas_1);
  }
  if (this.idade_entoure == 3) {
    this.vacas_unidades_novilhas_3 = this.vacas_unidades_novilhas_2 - ((this.mortalidade / 100) * this.vacas_unidades_novilhas_2);
  } else {
    this.vacas_unidades_novilhas_3 = 0;
  }
  
  if (this.idade_venda == 1) {
    this.vacas_unidades_novilhos_2 = 0;
  } else {
    this.vacas_unidades_novilhos_2 = this.vacas_unidades_novilhos_1 - ((this.mortalidade / 100) * this.vacas_unidades_novilhos_1);
  }
  if (this.idade_venda == 3) {
    this.vacas_unidades_novilhos_3 = this.vacas_unidades_novilhos_2 - ((this.mortalidade / 100) * this.vacas_unidades_novilhos_2);
  } else {
    this.vacas_unidades_novilhos_3 = 0;
  }
 
  this.vacas_unidades_machos = this.vacas_unidades_novilhos_1
    + this.vacas_unidades_novilhos_2
    + this.vacas_unidades_novilhos_3
    + (this.vacas_unidades_terneiros / 2)
    + this.vacas_unidades_touros;

  this.vacas_unidades_femeas = this.vacas_unidades_novilhas_1
    + this.vacas_unidades_novilhas_2
    + this.vacas_unidades_novilhas_3
    + (this.vacas_unidades_terneiros / 2)
    + unidade_vaca;

  this.vacas_unidades_total    = this.vacas_unidades_machos + this.vacas_unidades_femeas;
 
  this.vacas_unidades_total_UA = (this.vacas_unidades_vacas * this.estoque_unidade_cabecas_vacas)
    + (this.vacas_unidades_novilhas_3 * this.estoque_unidade_cabecas_novilha_3)
    + (this.vacas_unidades_novilhas_2 * this.estoque_unidade_cabecas_novilha_2)
    + (this.vacas_unidades_novilhas_1 * this.estoque_unidade_cabecas_novilha_1)
    + (this.vacas_unidades_novilhos_3 * this.estoque_unidade_cabecas_novilho_3)
    + (this.vacas_unidades_novilhos_2 * this.estoque_unidade_cabecas_novilho_2)
    + (this.vacas_unidades_novilhos_1 * this.estoque_unidade_cabecas_novilho_1)
    + (this.vacas_unidades_terneiros * this.estoque_unidade_cabecas_terneiros)
    + (this.vacas_unidades_touros * this.estoque_unidade_cabecas_touros);
  this.vacas_area_total = this.vacas_unidades_total_UA/this.lotacao;
}

meta_area(unidade_area) {
  this.area_area_total     = unidade_area;
  this.area_unidades_total = this.area_area_total           * (this.vacas_unidades_total / this.vacas_area_total);
  this.area_unidades_vacas = (this.area_unidades_total      * this.estoque_percentual_cabecas_vacas)/100;

  this.area_unidades_novilhas_3 = (this.area_unidades_total * this.estoque_percentual_cabecas_novilha_3)/100;
  this.area_unidades_novilhas_2 = (this.area_unidades_total * this.estoque_percentual_cabecas_novilha_2)/100;
  this.area_unidades_novilhas_1 = (this.area_unidades_total * this.estoque_percentual_cabecas_novilha_1)/100;
  this.area_unidades_novilhos_3 = (this.area_unidades_total * this.estoque_percentual_cabecas_novilho_3)/100;
  this.area_unidades_novilhos_2 = (this.area_unidades_total * this.estoque_percentual_cabecas_novilho_2)/100;
  this.area_unidades_novilhos_1 = (this.area_unidades_total * this.estoque_percentual_cabecas_novilho_1)/100;
  this.area_unidades_terneiros  = (this.area_unidades_total * this.estoque_percentual_cabecas_terneiros)/100;
  this.area_unidades_touros     = (this.touros / 100)       * this.area_unidades_vacas;
  this.area_unidades_machos     = (this.area_unidades_total * this.estoque_percentual_cabecas_machos)/100;
  this.area_unidades_femeas     = (this.area_unidades_total * this.estoque_percentual_cabecas_femeas)/100;
  this.area_unidades_total_UA   = (this.area_unidades_vacas * this.estoque_unidade_cabecas_vacas)
    + (this.area_unidades_novilhas_3 * this.estoque_unidade_cabecas_novilha_3)
    + (this.area_unidades_novilhas_2 * this.estoque_unidade_cabecas_novilha_2)
    + (this.area_unidades_novilhas_1 * this.estoque_unidade_cabecas_novilha_1)
    + (this.area_unidades_novilhos_3 * this.estoque_unidade_cabecas_novilho_3)
    + (this.area_unidades_novilhos_2 * this.estoque_unidade_cabecas_novilho_2)
    + (this.area_unidades_novilhos_1 * this.estoque_unidade_cabecas_novilho_1)
    + (this.area_unidades_terneiros  * this.estoque_unidade_cabecas_terneiros)
    + (this.area_unidades_touros     * this.estoque_unidade_cabecas_touros);
}

meta_tmf(unidade_tmf) {
  this.tmf_unidades_terneiros  = unidade_tmf;
  this.tmf_unidades_total      = this.tmf_unidades_terneiros  * 100                                        / this.estoque_percentual_cabecas_terneiros;
  this.tmf_area_total          = (this.vacas_area_total       * this.tmf_unidades_total)                   / this.vacas_unidades_total;
  this.tmf_unidades_vacas      = (this.tmf_unidades_total     * this.estoque_percentual_cabecas_vacas)     / 100;
  this.tmf_unidades_novilhas_3 = (this.tmf_unidades_total     * this.estoque_percentual_cabecas_novilha_3) / 100;
  this.tmf_unidades_novilhas_2 = (this.tmf_unidades_total     * this.estoque_percentual_cabecas_novilha_2) / 100;
  this.tmf_unidades_novilhas_1 = (this.tmf_unidades_total     * this.estoque_percentual_cabecas_novilha_1) / 100;
  this.tmf_unidades_novilhos_3 = (this.tmf_unidades_total     * this.estoque_percentual_cabecas_novilho_3) / 100;
  this.tmf_unidades_novilhos_2 = (this.tmf_unidades_total     * this.estoque_percentual_cabecas_novilho_2) / 100;
  this.tmf_unidades_novilhos_1 = (this.tmf_unidades_total     * this.estoque_percentual_cabecas_novilho_1) / 100;
  this.tmf_unidades_touros     = (this.touros / 100)          * this.tmf_unidades_vacas;
  this.tmf_unidades_machos     = (this.tmf_unidades_total     * this.estoque_percentual_cabecas_machos)/100;
  this.tmf_unidades_femeas     = (this.tmf_unidades_total     * this.estoque_percentual_cabecas_femeas)/100;
  this.tmf_unidades_total_UA   = (this.tmf_unidades_vacas     * this.estoque_unidade_cabecas_vacas)
    + (this.tmf_unidades_novilhas_3 * this.estoque_unidade_cabecas_novilha_3)
    + (this.tmf_unidades_novilhas_2 * this.estoque_unidade_cabecas_novilha_2)
    + (this.tmf_unidades_novilhas_1 * this.estoque_unidade_cabecas_novilha_1)
    + (this.tmf_unidades_novilhos_3 * this.estoque_unidade_cabecas_novilho_3)
    + (this.tmf_unidades_novilhos_2 * this.estoque_unidade_cabecas_novilho_2)
    + (this.tmf_unidades_novilhos_1 * this.estoque_unidade_cabecas_novilho_1)
    + (this.tmf_unidades_terneiros  * this.estoque_unidade_cabecas_terneiros)
    + (this.tmf_unidades_touros     * this.estoque_unidade_cabecas_touros);
}

meta_novilho_venda(unidade_novilho_venda) {
  if(this.idade_venda ==  3){
    this.novilho_unidades_total      = ((unidade_novilho_venda) *100)            /        this.estoque_percentual_cabecas_novilho_3;
    this.novilho_unidades_novilhos_3 = unidade_novilho_venda;
    this.novilho_unidades_novilhos_2 = (this.estoque_percentual_cabecas_novilho_2/100)  * this.novilho_unidades_total;
    this.novilho_unidades_novilhos_1 = (this.estoque_percentual_cabecas_novilho_1/100)  * this.novilho_unidades_total;
  }
  if(this.idade_venda ==  2){
    this.novilho_unidades_total      = ((unidade_novilho_venda)*100)             /        this.estoque_percentual_cabecas_novilho_2;
    this.novilho_unidades_novilhos_3 = 0;
    this.novilho_unidades_novilhos_2 = unidade_novilho_venda;
    this.novilho_unidades_novilhos_1 = (this.estoque_percentual_cabecas_novilho_1/100)  * this.novilho_unidades_total;
  }
  if(this.idade_venda ==  1){
    this.novilho_unidades_total      = ((unidade_novilho_venda)*100)  / this.estoque_percentual_cabecas_novilho_1;
    this.novilho_unidades_novilhos_3 = 0;
    this.novilho_unidades_novilhos_2 = 0;    
    this.novilho_unidades_novilhos_1 = unidade_novilho_venda;
  }

  this.novilho_area_total         = (this.novilho_unidades_total  * this.vacas_area_total)                     /  this.vacas_unidades_total;
  this.novilho_unidades_terneiros = (this.novilho_unidades_total  * this.estoque_percentual_cabecas_terneiros) /  100;
  
  this.novilho_unidades_vacas      = (this.novilho_unidades_total * this.estoque_percentual_cabecas_vacas)     /  100;
  this.novilho_unidades_novilhas_3 = (this.novilho_unidades_total * this.estoque_percentual_cabecas_novilha_3) /  100;
  this.novilho_unidades_novilhas_2 = (this.novilho_unidades_total * this.estoque_percentual_cabecas_novilha_2) /  100;
  this.novilho_unidades_novilhas_1 = (this.novilho_unidades_total * this.estoque_percentual_cabecas_novilha_1) /  100;

  this.novilho_unidades_touros   = (this.touros / 100)          * this.novilho_unidades_vacas;
  this.novilho_unidades_machos   = (this.novilho_unidades_total * this.estoque_percentual_cabecas_machos) / 100;
  this.novilho_unidades_femeas   = (this.novilho_unidades_total * this.estoque_percentual_cabecas_femeas) / 100;
  this.novilho_unidades_total_UA = (this.novilho_unidades_vacas * this.estoque_unidade_cabecas_vacas)
    + (this.novilho_unidades_novilhas_3 * this.estoque_unidade_cabecas_novilha_3)
    + (this.novilho_unidades_novilhas_2 * this.estoque_unidade_cabecas_novilha_2)
    + (this.novilho_unidades_novilhas_1 * this.estoque_unidade_cabecas_novilha_1)
    + (this.novilho_unidades_novilhos_3 * this.estoque_unidade_cabecas_novilho_3)
    + (this.novilho_unidades_novilhos_2 * this.estoque_unidade_cabecas_novilho_2)
    + (this.novilho_unidades_novilhos_1 * this.estoque_unidade_cabecas_novilho_1)
    + (this.novilho_unidades_terneiros  * this.estoque_unidade_cabecas_terneiros)
    + (this.novilho_unidades_touros     * this.estoque_unidade_cabecas_touros);
}
 
prod_animal_meta_vaca(){
  var auxiliar;
  
  if(this.vacas_unidades_novilhos_3 == 0 && this.vacas_unidades_novilhos_2 == 0){
     this.prod_vacas_cabeca_novilhos = this.vacas_unidades_novilhos_1;
  }
  
  if(this.vacas_unidades_novilhos_3 == 0 && this.idade_venda == 2){
     this.prod_vacas_cabeca_novilhos = this.vacas_unidades_novilhas_2;
  }
  
  if(this.idade_venda== 3){
     this.prod_vacas_cabeca_novilhos = this.vacas_unidades_novilhos_3;
  }

  this.prod_vacas_cabeca_vacas_descarte  = (this.vacas_unidades_vacas  * this.descarte_vacas_ano)  / 100;

  this.prod_vacas_cabeca_touros_descarte = (this.vacas_unidades_touros * this.descarte_touros_ano) / 100;
  
  if(this.mortalidade == 0 && this.touros == 0){
    auxiliar = this.vacas_unidades_novilhas_1 - this.prod_vacas_cabeca_vacas_descarte;
  }else{
    if(this.mortalidade == 0)
    {
      auxiliar = this.vacas_unidades_novilhas_2 - this.prod_vacas_cabeca_vacas_descarte;
    }else{
      auxiliar = this.vacas_unidades_novilhas_3 - this.prod_vacas_cabeca_vacas_descarte;
    }
  }
  
  this.prod_vacas_cabeca_novilhas = auxiliar;
  
  this.prod_vacas_cabeca_total_vendas = this.prod_vacas_cabeca_novilhos

  + this.prod_vacas_cabeca_novilhas
  + this.prod_vacas_cabeca_vacas_descarte
  + this.prod_vacas_cabeca_touros_descarte;
}

prod_animal_meta_area(){
  var auxiliar;
  if(this.area_unidades_novilhos_3 == 0 && this.area_unidades_novilhos_2 == 0){
     this.prod_area_cabeca_novilhos = this.area_unidades_novilhos_1;
  }
  if(this.area_unidades_novilhos_3 == 0 && this.idade_venda == 2){
     this.prod_area_cabeca_novilhos = this.area_unidades_novilhos_2;
  }
  if(this.area_unidades_novilhos_3 != 0){
     this.prod_area_cabeca_novilhos = this.area_unidades_novilhos_3;
  }

  this.prod_area_cabeca_vacas_descarte  = (this.area_unidades_vacas  * this.descarte_vacas_ano)  / 100;
  this.prod_area_cabeca_touros_descarte = (this.area_unidades_touros * this.descarte_touros_ano) / 100;
  

  if(this.mortalidade == 0 && this.touros == 0){
    auxiliar = this.area_unidades_novilhas_1 - this.prod_area_cabeca_vacas_descarte;
  }else{
    if(this.mortalidade == 0)
    {
      auxiliar = this.area_unidades_novilhas_2 - this.prod_area_cabeca_vacas_descarte;
    }else{
      auxiliar = this.area_unidades_novilhas_3 - this.prod_area_cabeca_vacas_descarte;
    }
  }

  this.prod_area_cabeca_novilhas = auxiliar;
  
  this.prod_area_cabeca_total_vendas = this.prod_area_cabeca_novilhos
    + this.prod_area_cabeca_novilhas
    + this.prod_area_cabeca_vacas_descarte
    + this.prod_area_cabeca_touros_descarte;
}

prod_animal_meta_tmf(){
  var auxiliar;

  if(this.tmf_unidades_novilhos_3 == 0 && this.tmf_unidades_novilhos_2 == 0){
    this.prod_tmf_cabeca_novilhos = this.tmf_unidades_novilhos_1;
  }
  if(this.tmf_unidades_novilhos_3 == 0 && this.idade_venda == 2){
    this.prod_tmf_cabeca_novilhos = this.tmf_unidades_novilhos_2;
  }
  if(this.tmf_unidades_novilhos_3 != 0){
    this.prod_tmf_cabeca_novilhos = this.tmf_unidades_novilhos_3;
  }

  this.prod_tmf_cabeca_vacas_descarte  = (this.tmf_unidades_vacas  * this.descarte_vacas_ano)  / 100;
  
  this.prod_tmf_cabeca_touros_descarte = (this.tmf_unidades_touros * this.descarte_touros_ano) / 100;
  
  if(this.mortalidade == 0 && this.touros == 0){
    auxiliar = this.tmf_unidades_novilhas_1 - this.prod_tmf_cabeca_vacas_descarte;
  }else{
    if(this.mortalidade == 0)
    {
      auxiliar = this.tmf_unidades_novilhas_2 - this.prod_tmf_cabeca_vacas_descarte;
    }else{
      auxiliar = this.tmf_unidades_novilhas_3 - this.prod_tmf_cabeca_vacas_descarte;
    }
  }

  this.prod_tmf_cabeca_novilhas = auxiliar;
  
  this.prod_tmf_cabeca_total_vendas = this.prod_tmf_cabeca_novilhos
  + this.prod_tmf_cabeca_novilhas
  + this.prod_tmf_cabeca_vacas_descarte
  + this.prod_tmf_cabeca_touros_descarte;
}

prod_animal_meta_novilho(){
  var auxiliar;

  if(this.novilho_unidades_novilhos_3 == 0 && this.novilho_unidades_novilhos_2 == 0){
    this.prod_novilho_cabeca_novilhos = this.novilho_unidades_novilhos_1;
  }
  if(this.novilho_unidades_novilhos_3 == 0 && this.idade_venda == 2){
    this.prod_novilho_cabeca_novilhos = this.novilho_unidades_novilhos_2;
  }
  if(this.novilho_unidades_novilhos_3 != 0){
    this.prod_novilho_cabeca_novilhos = this.novilho_unidades_novilhos_3;
  }

  this.prod_novilho_cabeca_vacas_descarte = (this.novilho_unidades_vacas * this.descarte_vacas_ano)/100;
  this.prod_novilho_cabeca_touros_descarte = (this.novilho_unidades_touros * this.descarte_touros_ano)/100;
  
  if(this.mortalidade == 0 && this.touros == 0){
    auxiliar = this.novilho_unidades_novilhas_1 - this.prod_novilho_cabeca_vacas_descarte;
  }else{
    if(this.mortalidade == 0)
    {
      auxiliar = this.novilho_unidades_novilhas_2 - this.prod_novilho_cabeca_vacas_descarte;
    }else{
      auxiliar = this.novilho_unidades_novilhas_3 - this.prod_novilho_cabeca_vacas_descarte;
    }
  }
  
  this.prod_novilho_cabeca_novilhas = auxiliar;
  
  this.prod_novilho_cabeca_total_vendas = this.prod_novilho_cabeca_novilhos
    + this.prod_novilho_cabeca_novilhas
    + this.prod_novilho_cabeca_vacas_descarte
    + this.prod_novilho_cabeca_touros_descarte;
}

efic_cria(){
  this.efic_cria_kgTerneiro_kgUnidProd = ((this.vacas_unidades_terneiros * this.peso_medio_terneiros)
    / ((this.vacas_unidades_vacas     * this.peso_medio_vacas)
    + (this.vacas_unidades_novilhas_3 * this.peso_medio_novilha_3)
    + (this.vacas_unidades_novilhas_2 * this.peso_medio_novilha_2)
    + (this.vacas_unidades_novilhas_1 * this.peso_medio_novilha_1)
    + (this.vacas_unidades_touros     * this.peso_medio_touros))  * 100
  );
  
  this.desfrute_percentual_cabeça = (this.prod_vacas_cabeca_total_vendas  / this.vacas_unidades_total)  * 100;
  
  this.cria_femeas_terneiro       = (this.vacas_unidades_vacas 
    + this.vacas_unidades_novilhas_3 
    + this.vacas_unidades_novilhas_2 
    + this.vacas_unidades_novilhos_1)
    /this.vacas_unidades_terneiros;  
 
/*-----------------------------------------------------------------------------------------------------*/ 
  if (this.vacas_unidades_novilhas_3 == 0 && this.vacas_unidades_novilhas_2 == 0){
    var parte_1 = (this.vacas_unidades_novilhas_1 - ((this.descarte_vacas_ano/100)  * this.vacas_unidades_vacas)) * this.peso_venda_novilha_1;
  }else
  if (this.vacas_unidades_novilhas_3 == 0){
    var parte_1 = (this.vacas_unidades_novilhas_2 - ((this.descarte_vacas_ano/100)  * this.vacas_unidades_vacas)) * this.peso_venda_novilha_2;
  }else{
    var parte_1 = (this.vacas_unidades_novilhas_3 - ((this.descarte_vacas_ano/100)  * this.vacas_unidades_vacas)) * this.peso_venda_novilha_3;
  }
  
  if(this.vacas_unidades_novilhos_3 == 0 && this.vacas_unidades_novilhos_2 == 0){
    var parte_2 = this.vacas_unidades_novilhos_1 * this.peso_venda_novilho_1;
  }else
  if(this.vacas_unidades_novilhos_3 == 0){
    var parte_2 = this.vacas_unidades_novilhos_2 * this.peso_venda_novilho_2;
  }else{
    var parte_2 = this.vacas_unidades_novilhos_3 * this.peso_venda_novilho_3;
  }
  
  var desc_touros = (this.vacas_unidades_touros*(this.descarte_touros_ano/100)) * this.peso_venda_touros;
  var desc_vacas = (this.descarte_vacas_ano/100)* this.vacas_unidades_vacas * this.peso_venda_vacas;
  
  this.produtividade_por_area = (parte_1 + desc_touros + parte_2 + desc_vacas) / this.vacas_area_total;
/*-----------------------------------------------------------------------------------------------------*/
 
  var parte_3 = ((this.vacas_unidades_vacas * this.peso_medio_vacas)
    + (this.vacas_unidades_novilhas_3 * this.peso_medio_novilha_3) 
    + (this.vacas_unidades_novilhas_2 * this.peso_medio_novilha_2)
    + (this.vacas_unidades_novilhas_1 * this.peso_medio_novilha_1)
    + (this.vacas_unidades_novilhos_3 * this.peso_medio_novilho_3)
    + (this.vacas_unidades_novilhos_2 * this.peso_medio_novilho_2)
    + (this.vacas_unidades_novilhos_1 * this.peso_medio_novilho_1)
    + (this.vacas_unidades_terneiros  * this.peso_medio_terneiros)
    + (this.vacas_unidades_touros     * this.peso_medio_touros));

  this.desfrute_percentual_kg = (((parte_1 + desc_touros + parte_2 + desc_vacas))/parte_3)  * 100;
  }
}

function executa_simulador (teste){
  var simulador = new Simulador(teste);
  
    simulador.meta_vacas(teste.meta_vacas);
    simulador.estoque_animal_unidade_area_potencia()
    simulador.meta_vacas(teste.meta_vacas);
    simulador.estoque_animal_unidade_area_potencia();
    simulador.calcula_peso_medio_machos();
    simulador.calcula_peso_medio_femeas();
    simulador.calcula_peso_medio_total();
    simulador.estoque_animal_unidade_area();
    simulador.estoque_animal_percentual_cabeca();
    simulador.meta_area(teste.meta_area);
    simulador.meta_tmf(teste.meta_tmf);
    simulador.meta_novilho_venda(teste.meta_novilho_venda);
    simulador.prod_animal_meta_vaca();
    simulador.prod_animal_meta_area();
    simulador.prod_animal_meta_tmf();
    simulador.prod_animal_meta_novilho();
    simulador.efic_cria();

  return simulador;
}

function valor_produtividade (simulador, valor_por_kg){
  var resultado_por_kg;

    resultado_por_kg = simulador.produtividade_por_area * valor_por_kg;
  
  return resultado_por_kg;
}

function diferenca_cenarios (cenario_1, cenario_2, valor_por_kg_cenario_1, valor_por_kg_cenario_2){
  var diferenca_cenarios;

    diferenca_cenarios = valor_produtividade(cenario_1, valor_por_kg_cenario_1) - valor_produtividade (cenario_2, valor_por_kg_cenario_2);

  return diferenca_cenarios;
}

function tabela_27_9(simulacao){
  var entrada_simulada = simulacao;
  var saidas_produtividade_tabela= [];
  var saidas_desfrute_tabela= [];
  
  for (l = 1.25; l == 0.75; l-0,25){
    entrada_simulada.desmame = entrada_simulada.desmame * l;
    for(k = 3; k == 1; k--){ //idade de entoure
      entrada_simulada.idade_entoure = k;
      for(j = 3; j == 1; j--){ //Idade de venda
        entrada_simulada.idade_venda = j;
        for(i = 0.5; i == 1.5; i + 0.5){
          entrada_simulada.unidade_animal = entrada_simulada.unidade_animal * i;
          executa_simulador(entrada_simulada);
          saidas_produtividade_tabela.push(entrada_simulada.produtividade_por_area);
          saidas_desfrute_tabela.push(entrada_simulada.desfrute_percentual_kg);
        }
      }
    }
  }
  return { saidas_produtividade_tabela, saidas_desfrute_tabela };
}

const teste_1 ={
  desmame: 80,
  mortalidade: 3,
  touros: 4,
  idade_venda: 3,
  idade_entoure: 3,
  lotacao: 1,
  unidade_animal: 450,
  meta_vacas: 1000,
  meta_area: 5000,
  meta_tmf: 1000,
  meta_novilho_venda: 150
}

const teste_2 ={
  desmame: 80,
  mortalidade: 3,
  touros: 4,
  idade_venda: 2,
  idade_entoure: 2,
  lotacao: 1,
  unidade_animal: 450,
  meta_vacas: 1000,
  meta_area: 5000,
  meta_tmf: 1000,
  meta_novilho_venda: 150
}

var simulador = executa_simulador(teste_1);
var resultado_1 = valor_produtividade(simulador, 3);

/*console.log("🚀 ~ file: simulador.js:770 ~ resultado_1:", resultado_1)

console.log("Meta_vaca_unidades_vacas: " + simulador.vacas_unidades_vacas);  
console.log("Meta_vaca_unidades_novilhas_1: " + simulador.vacas_unidades_novilhas_1);
console.log("Meta_vaca_unidades_novilhas_2: " + simulador.vacas_unidades_novilhas_2);
console.log("Meta_vaca_unidades_novilhas_3: " + simulador.vacas_unidades_novilhas_3);
console.log("Meta_vaca_unidades_novilhos_1: " + simulador.vacas_unidades_novilhos_1);
console.log("Meta_vaca_unidades_novilhos_2: " + simulador.vacas_unidades_novilhos_2);
console.log("Meta_vaca_unidades_novilhos_3: " + simulador.vacas_unidades_novilhos_3);
console.log("Meta_vaca_unidades_terneiros: " + simulador.vacas_unidades_terneiros);
console.log("Meta_vaca_unidades_touros: " + simulador.vacas_unidades_touros);
console.log("Meta_vaca_unidades_machos: " + simulador.vacas_unidades_machos);
console.log("Meta_vaca_unidades_femeas: " + simulador.vacas_unidades_femeas);
console.log("Meta_vaca_unidades_total: " + simulador.vacas_unidades_total);
console.log("Meta_vaca_unidades_total_UA: " + simulador.vacas_unidades_total_UA);
console.log("Meta_vaca_unidades_area_total: " + simulador.vacas_area_total);
console.log("Estoque_percentual_cabecas: " + simulador.estoque_percentual_cabecas_vacas);
console.log("Estoque_percentual_cabecas: " + simulador.estoque_percentual_cabecas_novilha_3);
console.log("Estoque_percentual_cabecas: " + simulador.estoque_percentual_cabecas_novilha_2);
console.log("Estoque_percentual_cabecas: " + simulador.estoque_percentual_cabecas_novilha_1);
console.log("Estoque_percentual_cabecas: " + simulador.estoque_percentual_cabecas_novilho_3);
console.log("Estoque_percentual_cabecas: " + simulador.estoque_percentual_cabecas_novilho_2);
console.log("Estoque_percentual_cabecas: " + simulador.estoque_percentual_cabecas_novilho_1);
console.log("Estoque_percentual_cabecas: " + simulador.estoque_percentual_cabecas_terneiros);
console.log("Estoque_percentual_cabecas: " + simulador.estoque_percentual_cabecas_touros);
console.log("Estoque_percentual_cabecas: " + simulador.estoque_percentual_cabecas_machos);
console.log("Estoque_percentual_cabecas: " + simulador.estoque_percentual_cabecas_femeas);
console.log("Meta_area_unidades_vacas: "      + simulador.area_unidades_vacas);  
console.log("Meta_area_unidades_novilhas_1: " + simulador.area_unidades_novilhas_1);
console.log("Meta_area_unidades_novilhas_2: " + simulador.area_unidades_novilhas_2);
console.log("Meta_area_unidades_novilhas_3: " + simulador.area_unidades_novilhas_3);
console.log("Meta_area_unidades_novilhos_1: " + simulador.area_unidades_novilhos_1);
console.log("Meta_area_unidades_novilhos_2: " + simulador.area_unidades_novilhos_2);
console.log("Meta_area_unidades_novilhos_3: " + simulador.area_unidades_novilhos_3);
console.log("Meta_area_unidades_terneiros: "  + simulador.area_unidades_terneiros);
console.log("Meta_area_unidades_touros: "     + simulador.area_unidades_touros);
console.log("Meta_area_unidades_machos: "     + simulador.area_unidades_machos);
console.log("Meta_area_unidades_femeas: "     + simulador.area_unidades_femeas);
console.log("Meta_area_unidades_total: "      + simulador.area_unidades_total);
console.log("Meta_area_unidades_total_UA: "   + simulador.area_unidades_total_UA);
console.log("Meta_area_unidades_area_total: " + simulador.area_area_total);
console.log("Meta_tmf_unidades_vacas: "      + simulador.tmf_unidades_vacas);  
console.log("Meta_tmf_unidades_novilhas_1: " + simulador.tmf_unidades_novilhas_1);
console.log("Meta_tmf_unidades_novilhas_2: " + simulador.tmf_unidades_novilhas_2);
console.log("Meta_tmf_unidades_novilhas_3: " + simulador.tmf_unidades_novilhas_3);
console.log("Meta_tmf_unidades_novilhos_1: " + simulador.tmf_unidades_novilhos_1);
console.log("Meta_tmf_unidades_novilhos_2: " + simulador.tmf_unidades_novilhos_2);
console.log("Meta_tmf_unidades_novilhos_3: " + simulador.tmf_unidades_novilhos_3);
console.log("Meta_tmf_unidades_terneiros: "  + simulador.tmf_unidades_terneiros);
console.log("Meta_tmf_unidades_touros: "     + simulador.tmf_unidades_touros);
console.log("Meta_tmf_unidades_machos: "     + simulador.tmf_unidades_machos);
console.log("Meta_tmf_unidades_femeas: "     + simulador.tmf_unidades_femeas);
console.log("Meta_tmf_unidades_total: "      + simulador.tmf_unidades_total);
console.log("Meta_tmf_unidades_total_UA: "   + simulador.tmf_unidades_total_UA);
console.log("Meta_tmf_unidades_area_total: " + simulador.tmf_area_total);
console.log("Meta_novilho_unidades_vacas: "      + simulador.novilho_unidades_vacas);  
console.log("Meta_novilho_unidades_novilhas_1: " + simulador.novilho_unidades_novilhas_1);
console.log("Meta_novilho_unidades_novilhas_2: " + simulador.novilho_unidades_novilhas_2);
console.log("Meta_novilho_unidades_novilhas_3: " + simulador.novilho_unidades_novilhas_3);
console.log("Meta_novilho_unidades_novilhos_1: " + simulador.novilho_unidades_novilhos_1);
console.log("Meta_novilho_unidades_novilhos_2: " + simulador.novilho_unidades_novilhos_2);
console.log("Meta_novilho_unidades_novilhos_3: " + simulador.novilho_unidades_novilhos_3);
console.log("Meta_novilho_unidades_terneiros: "  + simulador.novilho_unidades_terneiros);
console.log("Meta_novilho_unidades_touros: "     + simulador.novilho_unidades_touros);
console.log("Meta_novilho_unidades_machos: "     + simulador.novilho_unidades_machos);
console.log("Meta_novilho_unidades_femeas: "     + simulador.novilho_unidades_femeas);
console.log("Meta_novilho_unidades_total: "      + simulador.novilho_unidades_total);
console.log("Meta_novilho_unidades_total_UA: "   + simulador.novilho_unidades_total_UA);
console.log("Meta_novilho_unidades_area_total: " + simulador.novilho_area_total);*/
