import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const loginBtn = document.getElementById("loginBtn");
const msg = document.getElementById("msg");

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const user = userCred.user;

    // Get role from Firestore
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
