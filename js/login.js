document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    // Verificar se o usuário já está logado
    auth.onAuthStateChanged((user) => {
        if (user) {
            window.location.href = '../pages/products.html';
        }
    });

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            showMessage('Login realizado com sucesso!', 'success');
            
            // Redirecionar para a página de produtos após 1 segundo
            setTimeout(() => {
                window.location.href = '../pages/products.html';
            }, 1000);

        } catch (error) {
            let errorMessage = 'Erro ao fazer login.';
            
            switch (error.code) {
                case 'auth/user-not-found':
                    errorMessage = 'Usuário não encontrado.';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'Senha incorreta.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'E-mail inválido.';
                    break;
                case 'auth/user-disabled':
                    errorMessage = 'Usuário desativado.';
                    break;
            }
            
            showMessage(errorMessage, 'error');
        }
    });

    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = `message ${type}`;
    }
}); 