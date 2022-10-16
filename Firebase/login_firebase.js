<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    <script type="module">
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
      import { getDatabase, get, ref, set, child } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";
      import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

      const firebaseConfig = {
        apiKey: "AIzaSyBa5fQnmCsV97mJQg6KTF2xhia5IgPS0z4",
        authDomain: "homeproject-2842d.firebaseapp.com",
        databaseURL: "https://homeproject-2842d-default-rtdb.firebaseio.com",
        projectId: "homeproject-2842d",
        storageBucket: "homeproject-2842d.appspot.com",
        messagingSenderId: "518600901873",
        appId: "1:518600901873:web:e48a843dbf9e6251545550",
        measurementId: "G-V0FPK7FDBK",
      };//get this from firebase

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      // Get a reference to the database service
      const db = getDatabase(app);
      const dbRef = ref(getDatabase(app));
      const auth = getAuth();
      const submit = document.getElementById("submit");
      submit.addEventListener("click", (e) => {
        var email = document.getElementById("email").value;
        var pass = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, email, pass)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert("login Berhasil");
            window.location.replace("home.html");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(error);
          });
      });
    </script>
