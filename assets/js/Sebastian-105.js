/*
<!--───────────────────────────────────────────────────────────────────────────────────────────────────|

Made by @Sebastian-105
[🦝]
|───⬛⬛⬛⬛⬛⬛────────────────⬛⬛⬛⬛⬛⬛─────────|
|──⬛⬛⬛⬛⬛⬛⬛──────────────⬛⬛⬛⬛⬛⬛⬛────────| 
|─⬛⬛────────⬛⬛────────────⬛⬛────────⬛⬛───────|
|⬛⬛────────────────────────⬛⬛────────────────────|
|─⬛⬛────────────────────────⬛⬛───────────────────|
|──⬛⬛⬛⬛⬛⬛⬛──────────────⬛⬛⬛⬛⬛⬛⬛⬛──────|
|───⬛⬛⬛⬛⬛⬛⬛──────────────⬛⬛⬛⬛⬛⬛⬛⬛─────|
|───────────────⬛⬛─────────────────────────⬛⬛────|
|────────────────⬛⬛─────────────────────────⬛⬛───| 
|─⬛⬛──────────⬛⬛─────────⬛⬛────────────⬛⬛────|
|──⬛⬛⬛⬛⬛⬛⬛⬛───────────⬛⬛⬛⬛⬛⬛⬛⬛⬛─────|
|───⬛⬛⬛⬛⬛⬛⬛─────────────⬛⬛⬛⬛⬛⬛⬛⬛──────|
🦝
───────────────────────────────────────────────────────────────────────────────────────────────────|
───────────────────────────────────────────────────────────────────────────────────────────────────|-->
Here is most of the javascript for the "sebastian-105" website
*/
var name = localStorage.getItem("personname");
var tabicon105 = localStorage.getItem("tabicon105");
var tabname1234 = localStorage.getItem("tabname1234");
var notification = $("#copyalertcorner123");
var theme = localStorage.getItem("theme");
if ((defaulttheme = "notstet")) {
  $("body").addClass("default");
} else {
  $("body").addClass(theme);
}
let defaultThemetext = $("#TheCurrentTheme");
const defaulttab = {
  title: "Sebastian S",
  icon: "/105.png",
};
smartlook("record", { ips: true });
smartlook("record", { forms: true });
smartlook("record", { emails: true });

var examplelink = location;
var author = "Sebastian-105";
function homepage() {
  window.open("/");
}
function games() {
  window.open("/game/");
}
function docs() {
  window.open("/docs/");
}
function copytoclipboard(copiedcrap) {
  navigator.clipboard.writeText(copiedcrap);
  console.log(`${copiedcrap} has been copied.`);
  notification.fadeIn("slow").delay(1500).fadeOut("fast");
  notification.css("background-color", "#04AA6D");
  notification.html("Successfully copied: " + copiedcrap);
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Right Click Stuff         %%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const menu = document.querySelector(".menurightclick");
// add an event listener for the right-click event on the document
document.addEventListener("contextmenu", (e) => {
  // prevent the default browser behavior
  e.preventDefault();
  // show the menu element
  menu.style.display = "block";
  // position the menu element near the cursor horizontally
  menu.style.left = `${event.clientX}px`;
  // position the menu element near the cursor vertically
  menu.style.top = `${event.clientY}px`;
});
// add an event listener for the click event on the document
document.addEventListener("click", hideMenu);
function hideMenu() {
  menu.style.display = "none";
}

// select all the option elements
const options = document.querySelectorAll(".menurightclick>div");

// add an event listener for the click event on each option element
options.forEach((ea) => {
  ea.addEventListener("click", (event) => {
    // get the text content of the clicked option
    const act = event.target.getAttribute("actions");
    if (act === "a") {
      // do something for option 1
      alert("a");
    } else if (act === "") {
      // do something for option 2
      alert("");
    } else if (act === "") {
      // do something for option 3
      console.log("");
    }
  });
});

function closesidenav() {
  $(".sidenav").hide("fast");
  $("#time").hide("slow");
  console.log("Closed sidenav");
}
function opensidenav() {
  $(".sidenav").show("fast");
  console.log("opened sidenav");
}

setTimeout(() => {
  $(".loader-wrapper").fadeOut(105);
}, 1000);

//FUNCTIONS
function openlink(link, type) {
  var myWindow = window.open(
    link,
    "_blank",
    `width=${screen.width} height=${screen.height}`
  );
}
function reseteverything() {
  document.title = "Sebastian S";
  localStorage.setItem("tabname1234", "Sebastian S");
  document.querySelector("link[rel='icon']").href = defaulttab.icon;
  $("#copyalertcorner123").fadeIn("fast").delay(1500).fadeOut("fast");
  $("#copyalertcorner123").css("background-color", "#04AA6D");
  $("#copyalertcorner123").html(
    `Successfully Reset tab name back to ${document.title}`
  );
}
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
      "Games | Sebastian",
      `width=${width} height=${height}`
    );
  } else if (e.key === "s" && e.ctrlKey) {
    e.preventDefault();
    $("#settingsmenu").fadeToggle("fast");
    console.log("settings page opened");
  } else if (e.key === "h" && e.ctrlKey) {
    e.preventDefault();
    window.open("/index.html");
    console.log("settings page opened");
  } else if (e.key === "c" && e.ctrlKey) {
    e.preventDefault();
    window.open("/105/chatroom/index.html");
  } else if (e.key === "c" && e.altKey) {
    var chatroomwindow = window.open(
      "/105/chatroom/index.html",
      'Chatroom | Sebastian',
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
    $("#menurealz").fadeToggle("fast");
  } else if ((e.key === "a" && e.ctrlKey) || (e.key === "H" && e.ctrlKey )) {
    e.preventDefault();
    openHelpMenu()
  } else if (e.key === "?") {
    $("#menurealz").fadeToggle("fast");
  }
});
function settingsclose() {
$("#settingsclose").click(function (e) {
  $(".menupopup").fadeOut("fast");
});}
function allActionsClose() {
$("#allactionsclose").click(function (e) {
  $(".menupopup").fadeOut("fast");
});}
function setTitle(title = "") {
  if (title) {
    document.title = title;
    tabname1234 = title;
  } else {
    document.title = "Sebastian-105";
  }
}
function expandCollapse() {
  $(".sidenav").css("width", "200px");
}
function darkmoderealz() {
  var checkBox = document.getElementById("dark-mode");
  if (checkBox.checked == true) {
    $("body").addClass("light");
    localStorage.setItem("theme", "light");
    var atheme = localStorage.getItem("theme");
    jQuery("#TheCurrentTheme").text("Default light");
  } else {
    $("body").removeClass("light");
    localStorage.setItem("theme", "default");
    var atheme = localStorage.getItem("theme");
    jQuery("#TheCurrentTheme").text("Default Dark");
  }
}
function setTitleButton() {
  let setTitleButton1 = document.getElementById("setTitle").value;
  setTitle(setTitleButton1);
}
function setThemes(setThemetheme) {
  $("body").attr("theme", "");
  $("body").attr("theme", setThemetheme);
  localStorage.setItem("theme", setThemetheme);
  var atheme = localStorage.getItem("theme");
  jQuery("#TheCurrentTheme").text(theme);
  notification.fadeIn("slow").delay(1500).fadeOut("fast");
  notification.css("background-color", "#04AA6D");
  notification.html(`Successfully to "${atheme}" theme`);
}
function openSettings() {
  $("#settingsmenu").fadeIn("fast");
  console.log("settings page opened");
}
$("body").attr("theme", "");
$("body").attr("theme", theme);
//Theme Set

var jqueryhtml = $("html").html();
html = `<!DoCtyPe HtML> ${jqueryhtml}`;
width = screen.width;
height = screen.height;
var gametitle = localStorage.getItem("tabname1234");

function aboutblank() {
  var aboutblank = window.open(
    "",
    "Sebastian-105",
    `width=${width} height=${height}`
  );
  aboutblank.document.write(html);
}
function aboutblank_window() {
  var aboutblank = window.open("", "Sebastian-105");
  aboutblank.document.write(html);
}

function opengamespage() {
    window.open(
        './game/index.html',
        'Games | Sebastian',
        `width=${width} height=${height}`)
}
function openhomepage() {
    window.open("/");
}
function openchatroom() {
    window.open('/105/chatroom/index.html')
}
function openHelpMenu() {
    $(`#allactions`).fadeToggle(`fast`);
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//
// Useless stuff but also helpful don't mess with this %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//
const floatingcontent = `<div class="loader-wrapper">
<span class="loader"><span class="loader-inner"></span></span>
</div>
<div class="menurightclick" class="rightclick">
<div onclick="games()" actions="games">Games Page</div>
<div onclick="homepage()" actions="homepage">Homepage</div>
<div onclick="docs()" actions="docs">Docs</div>
<div onclick="window.open('https://schoolinks-105.netlify.app/')">School Related Links</div>
<div onclick="window.open('https://links-105.netlify.app/')">My Links</div>
</div>
</div>
<copyalertcorner class="alertcorner" id="copyalertcorner123"></copyalertcorner>
<!-- Settings -->
<div class="container">
<div class="menupopup" id="settingsmenu">
<div class="menuicon">
   <img src="105.png" width="25" height="25" style="border-radius: 50%;">
   <author style="font-size:18px;"> By: Sebastian S</author>
</div>
<div id="settingsclose" onclick="settingsclose()"style="float:right; cursor: pointer; font-size:50px; margin-top:-52px;margin-right:-15px;"
   title="close">×</div>
<div class="menucontent">Settings</div>
<div class="menuspace"></div>
<div class="menucontenttext">
   <ul>
      <h2>Themes:</h2>
      <button class="setthemebuttons" onclick="setThemes('default')" style="background-color:#111;color:white;">Default</button>
      <button class="setthemebuttons" style="background-color:rgba(255, 255, 255, 0.75); color:black;" onclick="setThemes('light')" >Light</button>
      <button class="setthemebuttons" style="background-color:#6df320;color:black;"onclick="setThemes('green & black')">Green & Black</button>
      <button class="setthemebuttons" style="background-color:#0A2647;color:white;"onclick="setThemes('dark blue')">Dark Blue</button>
      <button class="setthemebuttons" style="background-color:#040622;color:white;"onclick="setThemes('midnight')">Midnight</button>
       <button class="setthemebuttons" style="background-color:#ff9a00;color:white;"onclick="setThemes('halloween')">Halloween</button>
      <h2>Tab settings</h2>
      <div>
         <h4>Tab Name:</h4>
         <input id="setTitle"  style="color:var(--font-color); padding:15px; border-radius:15px; background-color:var(--secondtheme); border:solid 3px var(--contrast);font-size:16px;" type="textbox">  <button class="setthemebuttons" onclick="setTitleButton()">Set Title!</button>
      </div>
   </ul>
</div>
</div>
<!-- Search Actions -->
<div class="container">
<div class="menupopup" id="allactions">
   <div class="menuicon">
      <img src="105.png" width="25" height="25" style="border-radius: 50%;">
      <author style="font-size:18px;"> By: Sebastian S</author>
   </div>
   <div id="allactionsclose" onclick="allActionsClose()" style="float:right; cursor: pointer; font-size:50px; margin-top:-52px;margin-right:-15px;"
      title="close">×</div>
   <div class="menucontent">All Actions/Comands</div>
   <div class="menuspace"></div>
   <div class="menucontenttext">
    <h1 style="font-size:25px;">Keyboard Shotcuts:</h1>
    <subtitle>Most of the links the <code>ctrl</code> can be repaced with <code>alt</code> to open the page in a new window,  If it has <code>(alt comp)</code> next to it then it works</subtitle>
    <ul class="actionsoptions" onclick="openHelpMenu()">Opens this menu (ctrl + a, ctrl + shift + h)</ul>
    <ul class="actionsoptions" onclick="window.open('./game/')">Games page (ctrl + g)</ul>
    <ul class="actionsoptions" onclick="opengamespage()">Open Games page in new window</ul>

    <ul class="actionsoptions" onclick="openSettings()">Open Settings (ctrl + s)</ul>
    <ul class="actionsoptions" onclick="window.open('./docs/')">Open Docs (ctrl + d)</ul>
    <ul class="actionsoptions" onclick="aboutblank()">Open page in about:blank tab (ctrl + b) (alt comp)</ul>
    <ul class="actionsoptions" onclick="openhomepage()">Open Homepage (ctrl + h)</ul>
    <ul class="actionsoptions" onclick="openchatroom()">Open Chatroom (ctrl + c) (alt comp)</ul>
    <ul class="actionsoptions" onclick="window.open('https://organization-105.netlify.app/')">Open Organization-105 page (ctrl + o)</ul>
    <ul class="actionsoptions" onclick=""></ul>
    <ul class="actionsoptions" onclick=""></ul>
    <ul class="actionsoptions" onclick=""></ul>
    <ul class="actionsoptions" onclick=""></ul>
    <ul class="actionsoptions" onclick=""></ul>
    <h1 style="font-size:25px;">Go To:</h1>
    <ul class="actionsoptions" onclick="window.open('/')">Homepage</ul>
    <ul class="actionsoptions" onclick="window.open('/game/')">Games page</ul>
    <ul class="actionsoptions" onclick="window.open('/105/chatroom')">Chatroom</ul>
    <ul class="actionsoptions" onclick="window.open('https://organization-105.netlify.app/')">Organization-105</ul>
    <ul class="actionsoptions" onclick="window.open('/legal/terms/')">Terms And Agreements</ul>
    <ul class="actionsoptions" onclick="window.open('/legal/privacy/')">Privacy Policy</ul>
    <ul class="actionsoptions" onclick="window.open('https://schoolinks-105.netlify.app/')">School Links</ul>
    <ul class="actionsoptions" onclick="window.open('https://github.com/Sebastian-105/Sebastian-105.github.io')">Source Code</ul>
    <h1 style="font-size:25px;">My personal links:</h1>
    <ul class="actionsoptions" onclick="window.open('https://chess.com/Sebastian-105')">Chess.com</ul>
    <ul class="actionsoptions" onclick="window.open('https://open.spotify.com/user/xgejalgtp9rurdpiic5ysyrju')">Spotify</ul>
    <ul class="actionsoptions" onclick="window.open('https://github.com/Sebastian-105/')">Github</ul>
    <ul class="actionsoptions" onclick="window.open('https://links-105.netlify.app/')">Links</ul>
    <ul class="actionsoptions" onclick="window.open('mailto:28schapel1@gmail.com')">Work Email</ul>
    <ul class="actionsoptions" onclick="window.open('mailto:28schapel4@glexingtonma.org')">School Email</ul>
    <ul class="actionsoptions" onclick="window.open('https://discord.gg/hGzm2drjan')">Discord Server</ul>
    <ul class="actionsoptions" onclick="window.open('https://eaglercraft-105.vercel.app')">Eaglercraft-105</ul>
    <ul class="actionsoptions" onclick="window.open('')"></ul>

   </div>
</div>
</div><div class="sidenav" >
<br />
<br />
<a onclick="$('#settingsmenu').fadeToggle('fast');console.log('settings page opened');" title="Settings">
   <i class="fa fa-cog" aria-hidden="true" style="width:50px;height: 50px;"></i>
   <large>Settings</large>
</a>
<a onclick="window.open('game/index.html')" target="_blank" title="Games Site">
   <i class="fa fa-gamepad" aria-hidden="true"></i>
   <large>Games Site</large>
</a>
<br />
<a onclick="window.open('105/chatroom/index.html')" target="_blank" title="Chatroom">
   <i class="fa fa-commenting-o" aria-hidden="true"></i>
   <large>The Chatroom</large>
</a>
<br>
<a onclick="window.open('legal/terms/index.html')" target="_blank" title="Privacy Policy">
   <i class="fa fa-book" aria-hidden="true"></i>
   <br>
   <large>Privacy Policy</large>
</a>
<br>
<a onclick="window.open('legal/privacy/index.html')" target="_blank" title="Terms and Agreements">
   <i class="fa fa-handshake-o" aria-hidden="true"></i>
   <large>Terms And Agreements</large>
</a>
<br>
<a onclick="$('#allactions').fadeToggle('fast');" target="_blank" title="All Actions">
   <i class="fa fa-plus" aria-hidden="true"></i>
   <large>All Actions</large>
</a>

<br>
<bottom>
<!-- <button class="dropdown-btn" title="all my forms">
   Forms
   <div class="list">~</div>
   </button>
   <div class="dropdown-container">
   <a class="jQuerytest" href="https://forms.gle/hR1MggYi3tDUGgzKA" target="_bank">Registration form</a>
   <a class="jQuerytest" href="https://forms.gle/br2Nd426yGBtuHVB6" target="_bank">Help form</a>
   <a class="jQuerytest" href="https://forms.gle/mb2QFzE9WVeiRB2h9" target="_blank">Addgame form</a>
   <a class="jQuerytest" href="https://forms.gle/TVqtqGoFw7u2EpZq7" target="_blank">Suggestions</a>
   <a class="jQuerytest" href="https://forms.gle/7HRXRmFUnAN8KRDfA" target="_blank">Feedback</a>
   </div>
   <button class="dropdown-btn" title="all my forms">
   Backup Links
   <div class="list">~</div>
   </button>
   <div class="dropdown-container">
   <a class="jQuerytest" onclick='openlink("https://forms.gle/hR1MggYi3tDUGgzKA")'
     target="_bank">.vercel.app</a>
   <a class="jQuerytest" href="https://forms.gle/br2Nd426yGBtuHVB6" target="_bank">Help form</a>
   <a class="jQuerytest" href="https://forms.gle/mb2QFzE9WVeiRB2h9" target="_blank">Addgame form</a>
   <a class="jQuerytest" href="https://forms.gle/TVqtqGoFw7u2EpZq7" target="_blank">Suggestions</a>
   <a class="jQuerytest" href="https://forms.gle/7HRXRmFUnAN8KRDfA" target="_blank">Feedback</a>
   </div>
   <button class="dropdown-btn" title="all my forms">
   <div class="list">~</div>
   Extra links
   </button>
   <div class="dropdown-container">
   <a class="jQuerytest"
     href="https://github.com/Sebastian-105/Sebastian-105.github.io/blob/main/CODE_OF_CONDUCT.md"
     target="_blank" title="Code of conduct">CODE OF CONDUCT.md</a>
   <a class="jQuerytest"
     href="https://github.com/Sebastian-105/Sebastian-105.github.io/blob/main/CONTRIBUTING.md"
     target="_blank">CONTRIBUTING.md</a>
   <a class="jQuerytest" href="https://github.com/Sebastian-105/Sebastian-105.github.io/blob/main/CHANGELOG.md"
     title="Outdated">changelog.md</a>
   <a class="jQuerytest"
     href="https://github.com/Sebastian-105/Sebastian-105.github.io/blob/main/SECURITY.md">Security.md</a>
   </div>
   <button class="dropdown-btn" title="all my forms">
   <div class="list">~</div>
   Tutorials
   </button>
   <div class="dropdown-container">
   <a class="jQuerytest" href="105/tutorial/index.html" target="_blank" title="Tutorial">Tutorials</a>
   <a class="jQuerytest" href="105/tutorial/code/index.html" target="_blank" title="Tutorial">Download
     Locally</a>
   </div>-->
</div>
<!--JS Libarys-->
         <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> 
         <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> 
         <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.cjs.js" integrity="sha512-Om0T2d9tl4H2ShSsEkWjJeQOlXGJg4OZvXKZw075refp2RNZ1avQDbqd6WhwGbWhqpcn2oPmExCEa/lSLzZaJw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min.js" integrity="sha512-KZmyTq3PLx9EZl0RHShHQuXtrvdJ+m35tuOiwlcZfs/rE7NZv29ygNA8SFCkMXTnYZQK2OX0Gm2qKGfvWEtRXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
         <!--JS Libarys end -->
         <script src="/assets/js/Sebastian-105.js></script>
`
const floatingContent1 = `<link rel="stylesheet" href="/assets/css/Sebastian-105.css`;
$("body").append(floatingcontent);
$("html").append(floatingContent1);