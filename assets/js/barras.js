const containerBarra = document.querySelector('.container_barra');

for (let i = 0; i < 19; i++) {
  const novaBarra = document.createElement('div');
  novaBarra.classList.add('barra');

  const largura = Math.random() * 15 + 10 + '%';
  
  const altura = Math.random() * 2.5 + 1 + 'rem';

  if (Math.random() > 0.5) {
    const posicaoEsquerda = Math.random() * 10 + 'vw';
    novaBarra.style.marginLeft = posicaoEsquerda;
  }
  novaBarra.style.width = largura;
  novaBarra.style.height = altura;

  containerBarra.appendChild(novaBarra);
}
