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

submit.addEventListener('click', async function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;

    // Function to check if the password meets the strength requirements
    function isStrongPassword(pass) {
        // Regular expression for password strength criteria
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return strongRegex.test(pass);
    }

    if (email && password && isStrongPassword(password)) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            alert("User created successfully!");
            const user = userCredential.user;
            window.location.href = '../homepage/homepage.html';
        } catch (error) {
            const errorMessage = error.message;
            alert(errorMessage);
        }
    } else {
        alert("Please enter a valid email and a strong password.\nPassword should contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.");
    }
});

const signupbtn = document.getElementById('loginref');
signupbtn.addEventListener('click', function(event){
  event.preventDefault();
  window.location.href="/index.html"
})


// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
  // Select the card element
  const card = document.querySelector('.card');
  // Add the 'slide-up' class to trigger the animation
  card.classList.add('slide-up');
});








