
//saída de iniciar para conteiner 
document.querySelector('.simular').addEventListener('click', function() {
    const inicial = document.querySelector('.inicial');
    const container = document.querySelector('.container');
    
    inicial.classList.add('hidden');
    container.classList.add('visible');
  });
  
  //saida de conteiner para resoltados 
  document.querySelector('.rusoltados').addEventListener('click', function() {
    const inicial = document.querySelector('.conteiner');
    const container = document.querySelector('.resultados');
    
    inicial.classList.add('hidden');
    container.classList.add('visible');
  });