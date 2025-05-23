document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const messageDiv = document.getElementById('message');

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validação básica
        if (password !== confirmPassword) {
            showMessage('As senhas não coincidem!', 'error');
            return;
        }

        if (password.length < 6) {
            showMessage('A senha deve ter pelo menos 6 caracteres!', 'error');
            return;
        }

        try {
            console.log('Tentando criar usuário...');
            // Criar usuário no Firebase Auth
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            console.log('Usuário criado com sucesso:', userCredential.user.uid);
            
            // Salvar informações adicionais no Firestore
            await db.collection('users').doc(userCredential.user.uid).set({
                name: name,
                email: email,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            console.log('Dados do usuário salvos no Firestore');

            showMessage('Cadastro realizado com sucesso!', 'success');
            
            // Redirecionar para a página de produtos após 2 segundos
            setTimeout(() => {
                window.location.href = '../pages/products.html';
            }, 2000);

        } catch (error) {
            console.error('Erro no registro:', error);
            let errorMessage = 'Erro ao cadastrar usuário.';
            
            switch (error.code) {
                case 'auth/email-already-in-use':
                    errorMessage = 'Este e-mail já está em uso.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'E-mail inválido.';
                    break;
                case 'auth/weak-password':
                    errorMessage = 'A senha é muito fraca.';
                    break;
                case 'auth/operation-not-allowed':
                    errorMessage = 'O registro por email/senha não está habilitado.';
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