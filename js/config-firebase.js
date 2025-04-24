<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBH4KDV9ZLVtxqd6-d2VCFN5wV91XmfQ7s",
    authDomain: "ado-kain.firebaseapp.com",
    projectId: "ado-kain",
    storageBucket: "ado-kain.firebasestorage.app",
    messagingSenderId: "342052076610",
    appId: "1:342052076610:web:2d4adfdd56ce28950381db",
    measurementId: "G-TQ5VXSH0DM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>