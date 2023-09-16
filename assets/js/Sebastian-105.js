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
var defaulttheme = localStorage.setItem("theme", "default");
var theme = localStorage.getItem("theme");
if ((defaulttheme = "notstet")) {
    $("body").addClass("default");
} else {
    $("body").addClass(theme);
}
const defaulttab = {
  title: "Sebastian S",
  icon: "/105.png"
}
smartlook("record", {ips: true});
smartlook("record", {forms: true});
smartlook("record", {emails: true});

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
function settings() {
    if (confirm("This page is still a work in progress, are you sure you want to go here? \n-Sebastian") === true) {
        var myWindow = window.open("105/settings/index.html");
        console.log("Opened Settings");
    } else {
        console.log("stayed at homepage \n-Sebastian");
    }
}
var version = "v3.14.10";
$("#currentverisonasdf").html(version);
$("body").append("<script src='/assets/js/about-blank.js'>");

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml1 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime
.timeline({loop: true})
.add({
    targets: ".ml1 .letter",
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i + 1),
})
.add({
    targets: ".ml1 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
    offset: "-=875",
    delay: (el, i, l) => 80 * (l - i),
})
.add({
    targets: ".ml1",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
});
//FUNCTIONS
function blocked() {
    var myWindow = window.open(
        "105/blocked/index.html",
        "_blank",
        "width=500,height=400,resizable=yes,left=500,top=200,toolbar=yes"
    );
}
function openlink(link, type) {
    var myWindow = window.open(link, "_blank", `width=${screen.width} height=${screen.height}`);
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

function keybinds() {
    var myWindow = window.open("105/keybinds/index.html");
}
function reseteverything() {
    document.title = "Sebastian S";
    localStorage.setItem("tabname1234", "Sebastian S");
    document.querySelector("link[rel='icon']").href = defaulttab.icon;
    $("#copyalertcorner123").fadeIn("fast").delay(1500).fadeOut("fast");
    $("#copyalertcorner123").css("background-color", "#04AA6D");
    $("#copyalertcorner123").html(`Successfully Reset tab name back to ${document.title}`);
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
    } else if (e.key === "," && e.altKey) {
        e.preventDefault();
        tabname();
    } else if (e.key === "," && e.ctrlKey) {
        e.preventDefault();
        reseteverything();
    } else if (e.key === "." && e.altKey) {
        e.preventDefault();
        tabicon();
    } else if (e.key === "c" && e.ctrlKey) {
        e.preventDefault();
        window.open("/105/chatroom/index.html");
    } else if (e.key === "c" && e.altKey) {
        var chatroomwindow = window.open("/105/chatroom/index.html", `width=${width} height=${height}`);
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
    } else if (e.key === "?") {
        $("#menurealz").fadeToggle("fast");
    }
});
function asdfasdf(){alert('a')}
$("#menuclose").click(function (e) {
    $(".menupopup").fadeOut("fast");
});
function asdfasdf(){alert('a')}
$("#settingsclose").click(function (e) {
    $(".menupopup").fadeOut("fast");
});
function setTitle(title = "") {
    if (title) {
        document.title = title;
    } else {
        document.title = "Sebastian-105";
    }
}
function expandCollapse() {
    $(".sidenav").css("width", "200px"); 
  }
  function darkmoderealz() {
    var checkBox = document.getElementById("dark-mode");
    if (checkBox.checked == true){
        $("body").addClass("light");
        localStorage.setItem("theme", "light");
        var atheme = localStorage.getItem("theme");
        alert(atheme)
      } else {
        $("body").removeClass("light");
        localStorage.setItem("theme", "default");
        var atheme = localStorage.getItem("theme");
        alert(atheme)
      }
  }
