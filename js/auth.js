import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const loginForm = document.getElementById("login-form");
const msg = document.getElementById("msg");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const user = userCred.user;

    const docRef = doc(db, "users", user.uid);
    const snap = await getDoc(docRef);

    if (!snap.exists()) {
      msg.innerText = "No role assigned to this account.";
      return;
    }

    const role = snap.data().role;
    if (role === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "student.html";
    }

  } catch (error) {
    msg.innerText = error.message;
  }
});
