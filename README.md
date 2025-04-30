# Sistema de Produtos com Firebase

Este é um sistema web que implementa autenticação de usuários com Firebase Authentication e armazenamento de dados com Firebase Firestore.

## Funcionalidades

- Cadastro de usuários
- Login de usuários
- Visualização de produtos (apenas para usuários autenticados)
- Proteção de rotas
- Interface responsiva

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Firebase Authentication
- Firebase Firestore

## Pré-requisitos

- Conta no Firebase
- Projeto Firebase configurado
- Navegador web moderno

## Configuração

1. Clone este repositório
2. Crie um projeto no Firebase Console (https://console.firebase.google.com/)
3. Ative o Authentication e o Firestore no seu projeto Firebase
4. Copie as credenciais do seu projeto Firebase
5. Substitua as credenciais no arquivo `js/firebase-config.js`:

```javascript
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_AUTH_DOMAIN",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_STORAGE_BUCKET",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID"
};
```

## Estrutura do Projeto

```
├── index.html
├── js/
│   ├── firebase-config.js
│   ├── login.js
│   ├── register.js
│   └── products.js
├── styles/
│   ├── login.css
│   ├── register.css
│   └── products.css
├── pages/
│   ├── register.html
│   └── products.html
└── login/
    └── login.html
```

## Como Usar

1. Abra o arquivo `login/login.html` em seu navegador
2. Crie uma conta ou faça login se já tiver uma
3. Após o login, você será redirecionado para a página de produtos
4. Para sair, clique no botão "Sair" no canto superior direito

## Segurança

- Todas as rotas são protegidas
- Senhas são armazenadas de forma segura no Firebase Authentication
- Dados sensíveis são protegidos por regras de segurança do Firestore

## Contribuição

Sinta-se à vontade para contribuir com o projeto. Abra uma issue ou envie um pull request.

## Licença

Este projeto está sob a licença MIT.
