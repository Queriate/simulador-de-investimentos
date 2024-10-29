// Código para alternar entre a tela inicial e o container
document.querySelector('.simular').addEventListener('click', function() {
    const inicial = document.querySelector('.inicial');
    const container = document.querySelector('.container');

    inicial.classList.add('hidden');
    container.classList.add('visible');
});

// Código para alternar entre o container e os resultados
document.querySelector('.container button').addEventListener('click', function() {
    // Captura os resultados
    calcularRendimento();
    
    const container = document.querySelector('.container');
    const resultados = document.querySelector('.resultados');

    // Alterna a visibilidade
    container.style.display = 'none'; // Esconde o container
    resultados.style.display = 'block'; // Mostra os resultados
});

// Botão de voltar
document.querySelector('.resultados a').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link

    const container = document.querySelector('.container');
    const resultados = document.querySelector('.resultados');

    // Volta a exibir o container e esconde os resultados
    container.style.display = 'block';
    resultados.style.display = 'none';
});


// centralizarResultados.js
function centralizarResultados() {
    const resultados = document.querySelector('.resultados');
    
    // Verifica se a seção de resultados existe
    if (resultados) {
        // Define a altura e a largura da tela
        const alturaTela = window.innerHeight;
        const larguraTela = window.innerWidth;

        // Define a largura da seção de resultados (ajuste conforme necessário)
        const larguraResultados = resultados.offsetWidth;

        // Centraliza a seção verticalmente e horizontalmente
        resultados.style.position = 'absolute';
        resultados.style.top = `${(alturaTela - resultados.offsetHeight) / 2}px`;
        resultados.style.left = `${(larguraTela - larguraResultados) / 2}px`;
    }
}

// Função para mostrar a seção de resultados com transição
function mostrarResultados() {
    const resultados = document.querySelector('.resultados');
    resultados.classList.add('visible');
    resultados.style.display = 'block'; // Torna a seção visível
    setTimeout(() => centralizarResultados(), 10); // Chama a função de centralização após um pequeno atraso
}

// Chama a função de centralização ao carregar a página
window.onload = centralizarResultados;

// Chama a função de centralização sempre que a janela for redimensionada
window.onresize = centralizarResultados;

// Adiciona o evento de clique no botão "Calcular Rendimento"
document.querySelector('button[onclick="calcularRendimento()"]').addEventListener('click', function() {
    const resultados = document.querySelector('.resultados');

    // Chama a função calcularRendimento aqui (não execute o código)
    calcularRendimento(); // Este é o seu script de cálculo

    mostrarResultados(); // Mostra a seção de resultados
});
