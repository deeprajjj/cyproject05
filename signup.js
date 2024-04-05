import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCtRav9-Mts49JUuEwwrtiBvnPPCBACPXA",
    authDomain: "authproject-d7c63.firebaseapp.com",
    projectId: "authproject-d7c63",
    storageBucket: "authproject-d7c63.appspot.com",
    messagingSenderId: "24118707926",
    appId: "1:24118707926:web:3d0481708adf99d01a6b77"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const btn = document.getElementById('submit');
btn.addEventListener('click',function(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('logged In');
    window.location.href="/homepage/homepage.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error);
  });
})

const signupbtn = document.getElementById('submitref');
signupbtn.addEventListener('click', function(event){
  event.preventDefault();
  window.location.href = "/landingpage/landing.html";
});


// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
  // Select the card element
  const card = document.querySelector('.card');
  // Add the 'slide-up' class to trigger the animation
  card.classList.add('slide-up');
});








