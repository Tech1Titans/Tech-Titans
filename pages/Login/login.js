// JavaScript
import { auth, db } from "../../firebase/config.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

const loginForm = document.getElementById("login");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User logged in:", user);
    })
    .catch((error) => {
      console.error("Error logging in:", error.code, error.message);
    });
});

const registerForm = document.getElementById("register");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Get values from the form
  const username = registerForm.querySelector('input[type="text"]').value;
  const email = registerForm.querySelector('input[type="email"]').value;
  const password = registerForm.querySelector('input[name="password"]').value;
  const confirmPassword = registerForm.querySelector('input[name="confirm-password"]').value;

  if (password !== confirmPassword) {
    console.error("Passwords do not match!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User registered:", user);
      
      set(ref(db, 'users/' + user.uid), {
         username: username,
         email: email,
      })
      .then(() => {
         console.log("User data saved to database.");
      })
      .catch((error) => {
         console.error("Error saving user data:", error);
      });
    })
    .catch((error) => {
      console.error("Error registering:", error.code, error.message);
    });
});
