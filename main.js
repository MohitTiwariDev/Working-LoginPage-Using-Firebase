import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

let signUp = document.getElementById("btn");
let name = document.getElementById("name");
const firebaseConfig = {
  apiKey: "AIzaSyDxUp1BeMCUNG6V-FQd6v64qT6aT8PM_38",
  authDomain: "logingwithjs.firebaseapp.com",
  databaseURL: "https://logingwithjs-default-rtdb.firebaseio.com",
  projectId: "logingwithjs",
  storageBucket: "logingwithjs.appspot.com",
  messagingSenderId: "149064010770",
  appId: "1:149064010770:web:bf2706b32f250626bb1ccb",
  measurementId: "G-FW99ZHML24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

signUp.addEventListener("click", (e) => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var username = document.getElementById("username").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("User Created!");
      set(ref(database, "users/" + user.uid), {
        username: username,
        email: email,
      });

      name.innerText = username;

      window.location.replace("loggedIn.html");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
