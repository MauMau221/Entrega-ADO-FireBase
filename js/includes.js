function incluirHTML(id, url) {
    return new Promise((resolve, reject) => {
        const elemento = document.getElementById(id);
        fetch(url)
            .then(response => response.text())
            .then(html => {
                elemento.innerHTML = html;
                resolve();
            })
            .catch(error => {
                console.error('Erro ao carregar o conteúdo:', error);
                reject(error);
            });
    });
} 