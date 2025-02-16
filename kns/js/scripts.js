// Adiciona parâmetros de URL aos links
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a").forEach((link) => {
        if (link.getAttribute("href")?.includes("#")) return;
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.forEach((value, key) => {
            link.href += `&${key}=${value}`;
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Desabilitar seleção de texto
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    document.body.style.msUserSelect = 'none';

    // Desabilitar clique com o botão direito
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    // Desabilitar arrastar de imagens
    document.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });

    // Desabilitar Ctrl+S e Ctrl+U
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && (e.key === 's' || e.key === 'u')) {
            e.preventDefault();
        }
    });
});