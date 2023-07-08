/*
<!--─────────────────────────────────────────────────────────────────────────────────────────────────|
<!───────────────────────────────────────────────────────────────────────────────────────────────────|
|──────────────────────────────────────────────|
|⬛⬛──────⬛⬛⬛⬛───────────⬛⬛⬛⬛⬛──────|
|⬛⬛─────⬛⬛──⬛⬛────────⬛⬛⬛⬛⬛⬛⬛────|
|⬛⬛────⬛⬛────⬛⬛──────⬛⬛────────⬛⬛───|
|⬛⬛───⬛⬛──────⬛⬛────⬛⬛────────────────|
|⬛⬛──⬛⬛────────⬛⬛────⬛⬛───────────────|
|⬛⬛──⬛⬛────────⬛⬛──────⬛⬛⬛⬛⬛⬛⬛───|
|⬛⬛───⬛⬛──────⬛⬛───────────────────⬛⬛──|
|⬛⬛────⬛⬛────⬛⬛─────────────────────⬛⬛─|
|⬛⬛─────⬛⬛──⬛⬛───────⬛⬛──────────⬛⬛──|
|⬛⬛──────⬛⬛⬛⬛──────────⬛⬛⬛⬛⬛⬛⬛────|     (105)
────────────────────────────────────────────────|
Made by @Sebastian-105 (https://github.com).
───────────────────────────────────────────────────────────────────────────────────────────────────|
───────────────────────────────────────────────────────────────────────────────────────────────────|-->
Here is most of the javascript for the "sebastian-105" website
*/
var name = localStorage.getItem("personname");
var tabicon105 = localStorage.getItem("tabicon105");
var tabname1234 = localStorage.getItem("tabname1234");
var notification = notification;

var examplelink = location;
var author = "Sebastian-105";
// %%%%%%%%%%%%%%%%%%%%%%% KEYBINDS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
document.addEventListener("keydown", (e) => {
  if (e.key === "g" && e.ctrlKey) {
    e.preventDefault();
    console.log("game page opened");
    window.open("/game/index.html");
  } else if (e.key === "g" && e.altKey) {
    e.preventDefault();
    var aboutblank123412341234 = window.open(
      "/game/index.html",
      "Games | Sebastian-105",
      `width=${width} height=${height}`
    );
  } else if (e.key === "s" && e.ctrlKey) {
    e.preventDefault();
    window.open("/105/settings/index.html");
    console.log("settings page opened");
  } else if (e.key === "h" && e.ctrlKey) {
    e.preventDefault();
    window.open("/index.html");
    console.log("settings page opened");
  } else if (e.key === "," && e.altKey) {
    e.preventDefault();
    tabname();
  } else if (e.key === "." && e.altKey) {
    e.preventDefault();
    tabicon();
  } else if (e.key === "c" && e.ctrlKey) {
    e.preventDefault();
    window.open("/105/chatroom/index.html");
  } else if (e.key === "c" && e.altKey) {
    var chatroomwindow = window.open(
      "/105/chatroom/index.html",
      `width=${width} height=${height}`
    );
  } else if (e.key === "o" && e.ctrlKey) {
    e.preventDefault();
    window.open("https://organization-105.netlify.app/");
  } else if ((e.key === "d" && e.ctrlKey) || (e.key === "h" && e.altKey)) {
    e.preventDefault();
    window.open("/docs/index.html");
  } else if (e.key === "b" && e.altKey) {
    e.preventDefault();
    aboutblank();
  } else if (e.key === "b" && e.ctrlKey) {
    e.preventDefault();
    aboutblank_window();
  } else if (e.key === "m" && e.ctrlKey) {
    $(".menupopup").fadeToggle("fast");
  }
});
$("#menuclose").click(function (e) {
  $(".menupopup").fadeOut("fast");
});
function copytoclipboard(copiedcrap) {
  navigator.clipboard.writeText(copiedcrap);
  console.log(`${copiedcrap} has been copied.`);
  notification.fadeIn("slow").delay(1500).fadeOut("fast");
  notification.css("background-color", "#04AA6D");
  notification.innerText = "Successfully copied: " + copiedcrap;
}
function closesidenav() {
  $(".sidenav").hide("fast");
  $("#time").hide("slow");
  console.log("Closed sidenav");
}

function settings() {
  if (
    confirm(
      "This page is still a work in progress, are you sure you want to go here? \n-Sebastian-105"
    ) === true
  ) {
    var myWindow = window.open("105/settings/index.html");
    console.log("Opened Settings");
  } else {
    console.log("stayed at homepage \n-Sebastian-105");
  }
}
var version = "v3.14.10";

//FUNCTIONS
function blocked() {
  var myWindow = window.open(
    "105/blocked/index.html",
    "_blank",
    "width=500,height=400,resizable=yes,left=500,top=200,toolbar=yes"
  );
}
function openlink(link, type) {
  var myWindow = window.open(
    link,
    "_blank",
    `width=${screen.width} height=${screen.height}`
  );
}
function code() {
  var myWindow = window.open("105/code/index.html", "_blank");

  function feedback() {
    var myWindow = window.open("https://forms.gle/xmRta2vvGCLsrKUC8", "_blank");
  }
}
function suggestions() {
  var myWindow = window.open("https://forms.gle/X82sK1epn5Y1Rqj66", "_blank");
}
function myFunctionTwilight() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
function myFunctionDarkMode() {
  var elemenwt = document.body;
  elemenwt.classlist.toggle("twilight-mode");
}
function myFunctiongame() {
  var myWindow = window.open("game/index.html", "_blank");
}
function ack() {
  var myWindow = window.open("105/acknowledgements/index.html", "_blank");
}

function myFunction12345() {
  var myWindow = window.open("", "MsgWindow", "width=500,height=500");
  myWindow.document.write(
    "Email:<p>28stu216@lexingtonma.org</p><p><strong>Note:</strong> you can only email me if you have a lexington account</p><p>I will get a email account shortly</p>"
  );
}
function bio() {
  var myWindow = window.open("ReadMe.md", "_blank", "width=500,height=500");
}
function changelog() {
  var myWindow = window.open("105/changelog/index.html", "_blank");
}
function myFunctionspotify() {
  var myWindow = window.open("105/spotify/index.html", "_blank");
}

function Chatroom() {
  var myWindow = window.open("105/chatroom/index.html", "_blank");
}
function myfunctionofflinegames() {
  var myWindow = window.open("p/offline/index.html");
}
function dailygames() {
  var myWindow = window.open("p/daily/index.html");
}
function downloadlink() {
  var myWindow = window.open("105/download/index.html");
}

function tabname() {
  var tabnameforrealz = prompt("New Tab title:", "Example: " + document.title);
  var tabnameforrealz123 = (document.title = tabnameforrealz);
  localStorage.setItem("tabname1234", tabnameforrealz);
  notification.fadeIn("fast").delay(1500).fadeOut("fast");
  notification.css("background-color", "#04AA6D");
  document.getElementById(
    "copyalertcorner"
  ).innerHTML = `Successfully Changed tab title to: ${document.title}`;
}

function resettabname() {
  document.title = "Sebastian-105";
  localStorage.setItem("tabname1234", "Sebastian-105");
  notification.fadeIn("fast").delay(1500).fadeOut("fast");
  notification.css("background-color", "#04AA6D");
  document.getElementById(
    "copyalertcorner"
  ).innerHTML = `Successfully Reset tab name back to ${document.title}`;
}

function time() {
  const hour = new Date().getHours();
  var thetime;
  if (hour < 12) {
    thetime = `Good Morning`;
  } else if (hour < 17) {
    thetime = `Good Afternoon`;
  } else {
    thetime = `Good Evening`;
  }
}
