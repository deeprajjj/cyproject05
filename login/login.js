    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
    import {getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";


    const firebaseConfig = {
        apiKey: "AIzaSyCtRav9-Mts49JUuEwwrtiBvnPPCBACPXA",
        authDomain: "authproject-d7c63.firebaseapp.com",
        projectId: "authproject-d7c63",
        storageBucket: "authproject-d7c63.appspot.com",
        messagingSenderId: "24118707926",
        appId: "1:24118707926:web:3d0481708adf99d01a6b77"
      };


    const app = initializeApp(firebaseConfig) ;
    const auth = getAuth(app);


    const submit = document.getElementById('submit');

    submit.addEventListener('click', function async (event) {
        event.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('pass').value;

        if (email != "" || password != "") {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // alert(userCredential);
                alert("user created");
                const user = userCredential.user;
                window.location.href = '../homepage/homepage.html';
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // console.error("Error:", errorCode, errorMessage);
            });
        }
    })





