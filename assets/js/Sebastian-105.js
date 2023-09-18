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







//FUNCTIONS
function openlink(link, type) {
    var myWindow = window.open(link, "_blank", `width=${screen.width} height=${screen.height}`);
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
        jQuery("#TheCurrentTheme").text("Default light")
      } else {
        $("body").removeClass("light");
        localStorage.setItem("theme", "default");
        var atheme = localStorage.getItem("theme");
        jQuery("#TheCurrentTheme").text("Default Dark")
        alert(atheme)
      }
  }
  function setTitleButton() {
    let setTitleButton1 = document.getElementById("setTitle").value
    setTitle(setTitleButton1);
  }
  function setThemes(setThemetheme) {
    $("body").attr("theme", "");
    $("body").attr("theme", setThemetheme);
    localStorage.setItem("theme", setThemetheme);
    var atheme = localStorage.getItem("theme");
    jQuery("#TheCurrentTheme").text(theme)
    notification.fadeIn("slow").delay(1500).fadeOut("fast");
    notification.css("background-color", "#04AA6D");
    notification.html(`Successfully to "${atheme}" theme`);
  }
  $("body").attr("theme", "");
  $("body").attr("theme", theme);
  //Theme Set

