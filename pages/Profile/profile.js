import { db } from "../../firebase/config.js";
import {
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const auth = getAuth();
const user = auth.currentUser;

if (user) {
  const userId = user.uid;
  const userRef = ref(db, "users/" + userId);

  get(userRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        document.getElementById("profileImage").src = userData.profileIMG;
        document.getElementById("username").textContent = userData.username;
        document.getElementById("description").textContent =
          userData.description;
        document.getElementById("email").textContent = userData.email;
      } else {
        console.log("No user data available");
      }
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
} else {
  console.log("No user is logged in.");
}
