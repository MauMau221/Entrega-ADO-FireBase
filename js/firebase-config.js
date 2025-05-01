// Verificar se o Firebase já foi inicializado
if (!firebase.apps.length) {
    // Configuração do Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBH4KDV9ZLVtxqd6-d2VCFN5wV91XmfQ7s",
        authDomain: "ado-kain.firebaseapp.com",
        projectId: "ado-kain",
        storageBucket: "ado-kain.firebasestorage.app",
        messagingSenderId: "342052076610",
        appId: "1:342052076610:web:2d4adfdd56ce28950381db",
        measurementId: "G-TQ5VXSH0DM"
    };

    // Inicializa o Firebase
    firebase.initializeApp(firebaseConfig);
}

// Referências para os serviços
const auth = firebase.auth();
const db = firebase.firestore(); 