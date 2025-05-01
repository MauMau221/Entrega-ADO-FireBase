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

        // Validações básicas
        if (!email || !password) {
            showMessage('Por favor, preencha todos os campos.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showMessage('Por favor, insira um e-mail válido.', 'error');
            return;
        }

        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            showMessage('Login realizado com sucesso!', 'success');
            
            // Redirecionar para a página de produtos após 1 segundo
            setTimeout(() => {
                window.location.href = '../pages/products.html';
            }, 1000);

        } catch (error) {
            console.error('Erro de login:', error);
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
                case 'auth/too-many-requests':
                    errorMessage = 'Muitas tentativas de login. Tente novamente mais tarde.';
                    break;
                case 'auth/network-request-failed':
                    errorMessage = 'Erro de conexão. Verifique sua internet.';
                    break;
            }
            
            showMessage(errorMessage, 'error');
        }
    });

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = `message ${type}`;
    }
}); 