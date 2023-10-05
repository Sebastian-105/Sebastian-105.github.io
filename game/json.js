// Hello epic hacker (maybe skid) you are looking at one of the many scripts that powers the site, this script has extra comments and info to help you understand what is going on.

// This is a JavaScript code that creates a game catalog page with a search feature, a game detail page, and the ability to save and load user data. It uses fetch to load game data from a JSON file, creates game elements for each game, and adds click event listeners to show the game in a game container. The code also includes functions to handle saving and loading user data as well as a function to handle a specific key sequence.

// Select the elements
const gamesContainer = document.querySelector(".games");
const gameContainer = document.querySelector(".gamecontainer");
const gameFrame = gameContainer.querySelector(".frame");
const gameNav = gameContainer.querySelector(".nav");

// Fetch the games data from a JSON file
fetch("./games2.json")
  .then((res) => res.json())
  .then((games) => {
    // Loop through each game and create a new game element for it
    games.forEach((game) => {
      const game105 = document.createElement("div");
      game105.className = "game-box";
      game105.innerHTML = `<!-- ${game.name} -->
      <div class="a">
      <div class="banner">
         <seb>
            <a class="classText" style="color:white;" target="_blank" rel="noopener noreferrer" onclick='console.log("Clicked on ${game.name}")'>
            <div class="main">${game.name}</div>
           <!-- <div class="sub">${game.sub}</div>-->
            </a>
    </seb>
   </div>
   </div>`;
      /* <!-- ${game.name} -->
      <div class="a">
      <div class="banner">
         <seb>
            <a class="classText" href="${game.root}/" style="color:white;" target="_blank" rel="noopener noreferrer" onclick='console.log("Clicked on ${game.name}")'>
            <div class="main">${game.name}</div>
            <div class="sub">${game.sub}</div>
            </a>
    </seb>
   </div>
   </div>
   */
  /* <html>

<head>
<title> </title>
	<link rel="shortcut icon" href="https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico">
<style>
html, body{
  background-color:#27262b; margin:0px; padding:0px;
}
</style>
</head>
<body>
	<iframe src="${game.root}/${game.file}" frameborder="0" scrolling="no" width="100%" height="100%" allowfullscreen></iframe><script src="/assets/js/Sebastian-105.js" async defer></script><script src="https://unpkg.com/jquery"></script><script src="/assets/js/Sebastian-105.js"></script><script src="/assets/js/jQuery.min.js"></script>
</body>

</html>
`*/
   game105.onclick = (e) => {
    const windowContent = `<html><head><title>Sebastian S</title><link rel="/105.png"></head><script src="https://icon105.netlify.app/Sebastian105.js" defer></script><script src="/assets/js/Sebastian-105.js"></script><body><iframe src="${game.root}/${game.file}" style = 'width: 100%; height: 100vh; top: 0; left: 0; position: fixed; outline: none; border: none;'></iframe> <!--JS Libarys--><script src="https://cdn.jsdelivr.net/npm/lax.js" ></script><script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.cjs.js" integrity="sha512-Om0T2d9tl4H2ShSsEkWjJeQOlXGJg4OZvXKZw075refp2RNZ1avQDbqd6WhwGbWhqpcn2oPmExCEa/lSLzZaJw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min.js" integrity="sha512-KZmyTq3PLx9EZl0RHShHQuXtrvdJ+m35tuOiwlcZfs/rE7NZv29ygNA8SFCkMXTnYZQK2OX0Gm2qKGfvWEtRXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script><!--JS Libarys end --><script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> <script src="/assets/lib/javascriptlib.js"></script><script src="/assets/js/jQuery.min.js"><body></html>`
    var myWindow = window.open("", "Games");
    myWindow.document.write(windowContent);
  };
      gamesContainer.appendChild(game105);
      // Add click event listener to the game element to show the game in the game container

      // Add click event listener to the back button in the game container to go back to the games list
      gameNav.querySelector("#back").addEventListener("click", (e) => {});

      // Add click event listener to the fullscreen button in the game container to enter fullscreen mode
      gameNav.querySelector("#fullscreen").addEventListener("click", (e) => {
        if (!document.fullscreenElement) {
          gameFrame.requestFullscreen();
        }
      });
    });
  })
  .catch((e) => {
    swal({
      title: "Good job!",
      text: "The error was " + e,
      icon: "error",
      button: "Continue",
    });
  });

// Hide the spinner element after the page is loaded
document.querySelector(".spinner").style.display = "none";

// Function to get the main save data
function getMainSave() {
  var mainSave = {};

  // List of items in localStorage that should not be saved
  var localStorageDontSave = ["theme", "tab", "nebelung"];

  // Convert localStorage to an array of key-value pairs and remove the items that should not be saved
  localStorageSave = Object.entries(localStorage);

  for (let entry in localStorageSave) {
    if (localStorageDontSave.includes(localStorageSave[entry][0])) {
      localStorageSave.splice(entry, 1);
    }
  }

  // Convert the localStorage array to a base64-encoded JSON string
  localStorageSave = btoa(JSON.stringify(localStorageSave));

  // Add the localStorage data to the mainSave object
  mainSave.localStorage = localStorageSave;

  // Get the cookies data and add it to the mainSave object
  cookiesSave = document.cookie;
  cookiesSave = btoa(cookiesSave);
  mainSave.cookies = cookiesSave;

  // Convert the mainSave object to a base64-encoded JSON string
  mainSave = btoa(JSON.stringify(mainSave));

  // Encrypt the mainSave data using AES encryption with the key 'save'
  mainSave = CryptoJS.AES.encrypt(mainSave, "save").toString();

  // Return the encrypted mainSave data
  return mainSave;
}

// Function to download the main save data as a file
function downloadMainSave() {
  var data = new Blob([getMainSave()]);
  var dataURL = URL.createObjectURL(data);

  var fakeElement = document.createElement("a");
  fakeElement.href = dataURL;
  fakeElement.download = "games.save";
  fakeElement.click();
  URL.revokeObjectURL(dataURL);
}

// Function to get the main save data from an uploaded file
function getMainSaveFromUpload(data) {
  // Decrypt the uploaded data using AES decryption with the key 'save'
  data = CryptoJS.AES.decrypt(data, "save").toString(CryptoJS.enc.Utf8);

  // Parse the decrypted data as JSON
  var mainSave = JSON.parse(atob(data));
  var mainLocalStorageSave = JSON.parse(atob(mainSave.localStorage));
  var cookiesSave = atob(mainSave.cookies);

  // Set the items in localStorage using the uploaded data
  for (let item in mainLocalStorageSave) {
    localStorage.setItem(
      mainLocalStorageSave[item][0],
      mainLocalStorageSave[item][1]
    );
  }

  // Set the cookies using the uploaded data
  document.cookie = cookiesSave;
}

// Function to handle the file upload
function uploadMainSave() {
  var hiddenUpload = document.querySelector(".hiddenUpload");
  hiddenUpload.click();

  // Listen for the change event on the file input element
  hiddenUpload.addEventListener("change", function (e) {
    var files = e.target.files;
    var file = files[0];
    if (!file) {
      return;
    }

    // Read the contents of the uploaded file as text and call getMainSaveFromUpload with the result
    var reader = new FileReader();

    reader.onload = function (e) {
      getMainSaveFromUpload(e.target.result);

      // Show a success message to the user
      var uploadResult = document.querySelector(".uploadResult");
      uploadResult.innerText = "Uploaded save!";
      uploadResult.style.display = "initial";
      setTimeout(function () {
        uploadResult.style.display = "none";
      }, 3000);
    };

    reader.readAsText(file);
  });
}

// Handle the hii pattern when keys are pressed
var hiiPattern = ["h", "i", "i"];
var hiiCurrent = 0;

document.addEventListener("keydown", function (e) {
  if (e.key !== hiiPattern[hiiCurrent]) {
    return (hiiCurrent = 0);
  }

  hiiCurrent++;

  if (hiiPattern.length == hiiCurrent) {
    hiiCurrent = 0;
    document.querySelector(".hii").removeAttribute("hidden");
  }
});
//Shadow on scroll script
let lastKnownScrollPosition = 0;
let ticking = false;
document.addEventListener("scroll", function (e) {
  lastKnownScrollPosition = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function () {
      if (lastKnownScrollPosition == 0) {
        document.getElementsByTagName("nav")[0].style.boxShadow = "";
      } else {
        document.getElementsByTagName("nav")[0].style.boxShadow =
          "0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)";
      }
      ticking = false;
    });
    ticking = true;
  }
});

function myFunction105() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function myFunction77() {
  const banner = document.querySelectorAll(".banner");
  banner.forEach((banner) => {
    var link = 'background-image: url("../assets/images/banner';
    let a = Math.floor(Math.random() * 9) + 1;
    link += a.toString();
    link += '.jpg");';
    banner.style = link;
  });
}

function myFunction2468() {
  var myWindow = window.open("../index.html", "_blank", "width=400,height=400");
}

function blocked2() {
  var myWindow = window.open(
    "../105/blocked/index.html",
    "_blank",
    "width=300,height=330,resizable=yes,left=500,top=200,toolbar=yes"
  );
}
