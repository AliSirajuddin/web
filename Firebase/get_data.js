</script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    <script type="module">
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
      import { getDatabase, ref, set, get, child, update} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

      // Paste the code from Firebase
      const firebaseConfig = {
        apiKey: "AIzaSyBa5fQnmCsV97mJQg6KTF2xhia5IgPS0z4",
        authDomain: "homeproject-2842d.firebaseapp.com",
        databaseURL: "https://homeproject-2842d-default-rtdb.firebaseio.com",
        projectId: "homeproject-2842d",
        storageBucket: "homeproject-2842d.appspot.com",
        messagingSenderId: "518600901873",
        appId: "1:518600901873:web:e48a843dbf9e6251545550",
        measurementId: "G-V0FPK7FDBK",
      };//get from firebase

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      // Get a reference to the database service
      const db = getDatabase(app);
      const dbRef = ref(getDatabase(app));
      get(child(dbRef, "device/"))
        .then((snapshot) => {
          var x = document.getElementById("suhu");
          x.innerHTML = `${snapshot.val().temperature}`;
        })
        .catch((error) => {
          console.error(error);
        });

        get(child(dbRef, `device/lampu1`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            var lampu = snapshot.val();
            toggleSwitch(lampu);
          } else {
            console.log("No data available");
          }
          const updates = {};
          let testBool = lampu;
          const btn = document.getElementById("switchLampu");
          btn.addEventListener("click", (e) => {
            testBool = !testBool;
            console.log("Toggled bool is", testBool);
            updates["device/lampu1"] = testBool.toString();
            return update(ref(db), updates);
          });
        })
        .catch((error) => {
          console.error(error);
        });
        
    </script>
