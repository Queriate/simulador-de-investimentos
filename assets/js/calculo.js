function calcularRendimento() {
  // Capturando os valores de entrada
  let valorInvestido = parseFloat(document.getElementById('valorInvestido').value);
  let aporteMensal = parseFloat(document.getElementById('aporteMensal').value);
  let taxaJuros = parseFloat(document.getElementById('taxaJuros').value);
  let periodo = parseInt(document.getElementById('periodo').value); // período em meses

  // Validação dos campos
  if (isNaN(valorInvestido) || isNaN(taxaJuros) || isNaN(periodo) || isNaN(aporteMensal)) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
  }

  // Conversão da taxa anual para taxa mensal
  let taxaMensal = Math.pow(1 + (taxaJuros / 100), 1 / 12) - 1;

  // Inicia o rendimento bruto com o valor investido inicial
  let rendimentoBruto = valorInvestido;

  // Cálculo do rendimento com juros compostos e aportes mensais
  for (let i = 0; i < periodo; i++) {
      rendimentoBruto += aporteMensal; // Adiciona o aporte mensal
      rendimentoBruto *= (1 + taxaMensal); // Aplica os juros compostos
  }

  // Valor total investido (valor inicial + somatória dos aportes mensais)
  let valorTotalInvestido = valorInvestido + (aporteMensal * periodo);
  let rendimento = rendimentoBruto - valorTotalInvestido; // Rendimento sem impostos

  // Cálculo do imposto de renda sobre o rendimento
  let imposto = 0;
  if (periodo * 30 <= 180) { // Aproximando o número de dias para meses
      imposto = 22.5 / 100;
  } else if (periodo * 30 <= 360) {
      imposto = 20 / 100;
  } else if (periodo * 30 <= 720) {
      imposto = 17.5 / 100;
  } else {
      imposto = 15 / 100;
  }

  let impostoDevido = rendimento * imposto;
  let rendimentoLiquido = rendimentoBruto - impostoDevido;

  // Formatação de moeda e porcentagem
  let formatterMoeda = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
  });

  let formatterPorcentagem = new Intl.NumberFormat('pt-BR', {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
  });

  // Exibindo os resultados com formatação
  document.getElementById('rendimentoBruto').innerHTML = `Rendimento Bruto: ${formatterMoeda.format(rendimentoBruto)}`;
  document.getElementById('rendimentoLiquido').innerHTML = `Rendimento Líquido: ${formatterMoeda.format(rendimentoLiquido)}`;
  document.getElementById('taxaMensal').innerHTML = `Taxa Mensal: ${formatterPorcentagem.format(taxaMensal)}`;
}