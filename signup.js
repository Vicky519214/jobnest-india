import { auth, createUserWithEmailAndPassword } from "./firebase.js";

const form = document.getElementById("signupForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const state = document.getElementById("state").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);

    alert("Account Created Successfully!");

    window.location.href = "login.html";
  } catch (error) {
    alert(error.message);
  }
});
