console.log('Script theme.js carregado');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded disparado');
    
    const themeToggle = document.getElementById('theme-toggle');
    console.log('Botão encontrado:', themeToggle);
    
    if (!themeToggle) {
        console.error('Botão theme-toggle não encontrado!');
        return;
    }
    
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const themeText = themeToggle.querySelector('.theme-text');
    
    // Verifica se há uma preferência salva
    const savedTheme = localStorage.getItem('theme');
    console.log('Tema salvo:', savedTheme);
    
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('theme-dark');
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Modo Claro';
    }
    
    themeToggle.addEventListener('click', () => {
        console.log('Botão clicado');
        document.documentElement.classList.toggle('theme-dark');
        
        if (document.documentElement.classList.contains('theme-dark')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Modo Claro';
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.textContent = '🌙';
            themeText.textContent = 'Modo Escuro';
        }
    });
}); 