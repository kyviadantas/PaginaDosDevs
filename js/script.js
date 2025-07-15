document.addEventListener('DOMContentLoaded', function() {
    const dataHora = new Date().toLocaleString('pt-BR');
    document.getElementById('data-hora').innerText = `Página carregada em: ${dataHora}`;
});