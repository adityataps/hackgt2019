<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.2.2/firebase-app.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="https://www.gstatic.com/firebasejs/7.2.2/firebase-analytics.js"></script>

    <script>
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCr2GStfS2_8jJZNNia5RSgS2Y_U2CdkVE",
    authDomain: "snackgt.firebaseapp.com",
    databaseURL: "https://snackgt.firebaseio.com",
    projectId: "snackgt",
    storageBucket: "snackgt.appspot.com",
    messagingSenderId: "531303734420",
    appId: "1:531303734420:web:070d354b218cecc7916881",
    measurementId: "G-Y59XSVQ35W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();