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
function Sebastian105() {
  window.addEventListener("offline", () => $("offline").fadeIn("slow"));
  document.getElementById("OfflineMode").innerHTML = "Offline";
}

var examplelink = location;
var author = "Sebastian-105";

function copytoclipboard(copiedcrap) {
  navigator.clipboard.writeText(copiedcrap);
  console.log(`${copiedcrap} has been copied.`);
  $("copyalertcorner").fadeIn("slow").delay(1500).fadeOut("fast");
  $("copyalertcorner").css("background-color", "#04AA6D");
  document.getElementById("copyalertcorner").innerHTML =
    "Successfully copied: " + copiedcrap;
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
var version = "v2.12.10";
$("#currentverisonasdf").html(version);
$("body").append("<script src='assets/js/about-blank.js'>");

//FUNCTIONS
function blocked() {
  var myWindow = window.open(
    "105/blocked/index.html",
    "_blank",
    "width=500,height=400,resizable=yes,left=500,top=200,toolbar=yes"
  );
}
function openlink(link) {
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
function RunMyFunction() {
  if (Enabled == false) {
    alert("Keybinds have been disabled. \n-Sebastian-105");
  } else {
    $(window).on("keypress", function (event) {
      if (event.key == "s") {
        window.open("https://sebastian105.repl.co/105/settings/index.html");
      }
    });
  }
}
function keybinds() {
  var myWindow = window.open("105/keybinds/index.html");
}
function buttonCode() {
  var tabnameforrealz = prompt("New Tab title:", "Example: " + document.title);
  var tabnameforrealz123 = (document.title = tabnameforrealz);
  localStorage.setItem("tabname1234", tabnameforrealz);
  $("copyalertcorner").fadeIn("fast").delay(1500).fadeOut("fast");
  $("copyalertcorner").css("background-color", "#04AA6D");
  document.getElementById(
    "copyalertcorner"
  ).innerHTML = `Successfully Changed tab title to: ${document.title}`;
}
function tabicon() {
  var thetabicon = prompt(
    "URL for image: \nMust include https:// or http://",
    examplelink
  );
  $("link[rel*='icon']").attr("href", thetabicon);
  localStorage.setItem("tabicon105", thetabicon);
  if (
    thetabicon.includes("https://") ||
    thetabicon.includes("http://") ||
    thetabicon.includes("file://") ||
    thetabicon.includes("localhost")
  ) {
    $("copyalertcorner").fadeIn("fast").delay(1500).fadeOut("fast");
    $("copyalertcorner").css("background-color", "#04AA6D");
    document.getElementById("copyalertcorner").innerHTML =
      "Successfully Changed tab icon " + thetabicon;
  } else {
    $("copyalertcorner").fadeIn("fast").delay(1500).fadeOut("fast");
    $("copyalertcorner").css("background-color", "#04AA6D");
    document.getElementById("copyalertcorner").innerHTML =
      "Fail to Change tab icon. Check to see if it includes https://";
  }
}
function resettabname() {
  document.title = "Sebastian-105";
  localStorage.setItem("tabname1234", "Sebastian-105");
  $("copyalertcorner").fadeIn("fast").delay(1500).fadeOut("fast");
  $("copyalertcorner").css("background-color", "#04AA6D");
  document.getElementById(
    "copyalertcorner"
  ).innerHTML = `Successfully Reset tab name back to ${document.title}`;
}

document.addEventListener("online", online);
document.addEventListener("offline", offline);
function online() {
  var online = true;
  if ((online = true)) {
    $("copyalertcorner").fadeIn("fast").delay(1500).fadeOut("fast");
    document.getElementById(
      "copyalertcorner"
    ).innerHTML = `You are back Online`;
    $("copyalertcorner").css("background-color", "#2196F3");
    online = false;
  }
}
function offline() {
  var offline = true;
  if ((offline = true)) {
    $("copyalertcorner").fadeIn("fast").delay(1500).fadeOut("fast");
    $("copyalertcorner").css("background-color", "#f44336");
    document.getElementById(
      "copyalertcorner"
    ).innerHTML = `Offline | Reconnect and try again | Offline`;
  }
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
  var gradenumber = localStorage.getItem("grade");
  setInterval(() => {
    document.getElementById("therealtime").innerHTML = thetime + " " + name;
    document.getElementById(
      "timedropdown"
    ).innerHTML = `${name}'s account settings`;
    document.getElementsByClassName(
      "grade"
    )[0].innerHTML = `${gradenumber}<sup>th</sup> Grade`;
  }, 1);
}
function username() {
  var usernames = prompt(
    "What should we call you?\nWarning: this reloads your page"
  );
  localStorage.setItem("personname", usernames);
  window.location.reload();
}
function grade() {
  var gradelevel = prompt(
    `What grade are you in? This will affect your recomendation based on your grade \nNote: Don't add the "th".\nWarning: this reloads your page`
  );
  localStorage.setItem("grade", gradelevel);
  window.location.reload();
}
setInterval(time, 1);
/* var lastKnownScrollPosition = 0;
      var ticking = false;
      document.addEventListener('scroll', function (e) {
        lastKnownScrollPosition = window.scrollY;
        if (!ticking) {
          window.requestAnimationFrame(function () {
            if (lastKnownScrollPosition == 0) {
              document.getElementsByClassName("navbar").style.boxShadow = "";
            } else {
              document.getElementsByClassName("navbar").style.boxShadow = "0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)";
            }
            ticking = false;
					});
          ticking = true;
        }
      }); */
if (
  document.location.href.includes("game/c") ||
  document.location.href.includes("game/p")
) {
  $("body").append(`<script>
  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% | Title | %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//
  var localStoragetitle = localStorage.getItem('tabname1234')
  setTimeout(() => { 
  document.title = localStoragetitle; 
  }, 105);
  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% | Icon | %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//
  var tabiconabc = localStorage.getItem('tabicon105');
  setTimeout(() => {
  $("link[rel*='icon']").attr("href", tabiconabc);
}, 105);
</script>`);
}

// about-blank.js
var jqueryhtml = $("html").html();
html = `<!DoCtyPe HtML> ${jqueryhtml}`;
width = screen.width;
height = screen.height;

function aboutblank_home() {
  var aboutblank = window.open(
    "",
    `${tabname1234} | Sebastian-105`
    `width=${width} height=${height}`
  );
  aboutblank.document.write(html);
}

// %%%%%%%%%%%%%%%%%%%%%%% KEYBINDS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
document.addEventListener("keydown", (e) => {
  if (e.key === "g" && e.ctrlKey) {
    e.preventDefault();
    console.log("game page opened");
    window.open("/game/index.html");
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
    buttonCode();
  } else if (e.key === "." && e.altKey) {
    e.preventDefault();
    tabicon();
  } else if (e.key === "c" && e.ctrlKey) {
    e.preventDefault();
    window.open("/105/chatroom/index.html");
  } else if (e.key === "o" && e.ctrlKey) {
    e.preventDefault();
    window.open("https://organization-105.netlify.app/");
  } else if (e.key === "d" && e.ctrlKey) {
    e.preventDefault();
    window.open("/docs/index.html");
  } else if (e.key === "b" && e.altKey) {
    aboutblank_home();
  }
});
