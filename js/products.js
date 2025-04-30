document.addEventListener('DOMContentLoaded', () => {
    const productsList = document.getElementById('productsList');
    const userNameSpan = document.getElementById('userName');
    const logoutBtn = document.getElementById('logoutBtn');
    const messageDiv = document.getElementById('message');

    // Verificar autenticação
    auth.onAuthStateChanged(async (user) => {
        if (!user) {
            window.location.href = '../login/login.html';
            return;
        }

        // Obter informações do usuário
        const userDoc = await db.collection('users').doc(user.uid).get();
        const userData = userDoc.data();
        userNameSpan.textContent = userData.name;

        // Carregar produtos
        loadProducts();
    });

    // Função para carregar produtos
    async function loadProducts() {
        try {
            const productsSnapshot = await db.collection('products').get();
            productsList.innerHTML = '';

            if (productsSnapshot.empty) {
                productsList.innerHTML = '<p>Nenhum produto cadastrado.</p>';
                return;
            }

            productsSnapshot.forEach(doc => {
                const product = doc.data();
                const productCard = createProductCard(product);
                productsList.appendChild(productCard);
            });

        } catch (error) {
            showMessage('Erro ao carregar produtos.', 'error');
        }
    }

    // Função para criar card de produto
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">R$ ${product.price.toFixed(2)}</p>
            <p class="product-description">${product.description}</p>
        `;

        return card;
    }

    // Logout
    logoutBtn.addEventListener('click', async () => {
        try {
            await auth.signOut();
            window.location.href = '../login/login.html';
        } catch (error) {
            showMessage('Erro ao fazer logout.', 'error');
        }
    });

    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = `message ${type}`;
        
        // Remover mensagem após 3 segundos
        setTimeout(() => {
            messageDiv.textContent = '';
            messageDiv.className = 'message';
        }, 3000);
    }
}); 