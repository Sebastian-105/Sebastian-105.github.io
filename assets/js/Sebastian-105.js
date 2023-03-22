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
Made by @Sebastian-105 and by @DanyangXu77.
───────────────────────────────────────────────────────────────────────────────────────────────────|
───────────────────────────────────────────────────────────────────────────────────────────────────|-->
*/
localStorage.setItem('tabicon105', '/105.png');
localStorage.setItem('tabname1234', 'Sebastian-105')
function Sebastian105() {
	window.addEventListener('offline', () => 
  $("offline").fadeIn("slow"))
  document.getElementById("OfflineMode").innerHTML = "Offline"
}
function closesidenav() {
  $(".sidenav").fadeToggle("slow");
  console.log('Closed sidenav');
}
var examplelink = location.href

var author = "Sebastian-105";

function copytoclipboard(copiedcontent){
  navigator.clipboard.writeText(copiedcontent);
  console.log("Username has been copied.");
  $("copyalertcorner").fadeIn("slow").delay(5000).fadeOut("slow");
  document.getElementById("copyalertcorner").innerHTML = "Successfully copied: " + copiedcontent;
}
function settings() {
  if (confirm("This page is still a work in progress, are you sure you want to go here? \n-Sebastian-105") === true) {
    var myWindow = window.open("105/settings/index.html");
    console.log('Opened Settings');
  } else {
    console.log("stayed at homepage \n-Sebastian-105");
  }
}
  let version = "v1.3.6";
  $("#currentverisonasdf").html(version);

function theexacttime() {
var d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let ms = d.getMilliseconds();
let y = d.getYear();
m = checkTime(m);
s = checkTime(s);
ms = checkTimems(ms);
h = checkTime(h);
document.getElementById("thetimeinexacttime").innerHTML = "It is " + h +":" + m +":"+ s +"." + ms + " 2023" +"<br />"+"- Sebastian105";
setTimeout(theexacttime, 0);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i}
  return i;
}
function checkTimems(i) {
  if (i <100) {i = "0" + i}
  return i;
}
// Varibles
//Sidenav
//FUNCTIONS
     function blocked() {
  var myWindow = window.open("105/blocked/index.html", "_blank", "width=500,height=400,resizable=yes,left=500,top=200,toolbar=yes");
}

function myFunctionterms() {
  var myWindow = window.open("105/terms/index.html", "_blank");

}

function addgame() {
   var myWindow = window.open("https://forms.gle/TXz4Mk4ZQEyjSn43A", "_blank");
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
  myWindow.document.write("Email:<p>28stu216@lexingtonma.org</p><p><strong>Note:</strong> you can only email me if you have a lexington account</p><p>I will get a email account shortly</p>");
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
function RunMyFunction()
{
if(Enabled == false)
{
 alert("Keybinds have been disabled. \n-Sebastian-105");

}else
{
  $(window).on("keypress", function(event){
    if (event.key == "s") {
      window.open("https://sebastian105.repl.co/105/settings/index.html");
    }
});}
}
function keybinds(){
  var myWindow = window.open("105/keybinds/index.html");
}
function buttonCode()
{
  var tabnameforrealz = prompt("New Tab title:", 'Example: ' + document.title);
  var tabnameforrealz123 = document.title = tabnameforrealz
  localStorage.setItem('tabname1234', tabnameforrealz);
  $("copyalertcorner").fadeIn("slow").delay(5000).fadeOut("slow");
  document.getElementById("copyalertcorner").innerHTML = `Successfully Changed tab title to: ${document.title}`;
}
function tabicon() {
  
  var thetabicon = prompt("URL for image: \nMust include https:// or http://", examplelink);
  var tabiconforrealz = $("link[rel*='icon']").attr("href", thetabicon);
 localStorage.setItem('tabicon105', tabiconforrealz);
 if (thetabicon.includes('https://')  || thetabicon.includes("http://") ||thetabicon.includes("file://") ||thetabicon.includes('localhost')){
 $("copyalertcorner").fadeIn("slow").delay(5000).fadeOut("slow");
  document.getElementById("copyalertcorner").innerHTML = "Successfully Changed tab icon " + thetabicon;
} else {
  $("copyalertcorner").fadeIn("slow").delay(5000).fadeOut("slow");
  $("copyalertcorner").css('background-color', 'red');
  document.getElementById("copyalertcorner").innerHTML = "Fail to Change tab icon. Check to see if it includes https://";
}
}
function resettabname() {
  document.title = "Sebastian-105";
  localStorage.getItem("tabname1234", "Sebastian-105");
  $("copyalertcorner").fadeIn("slow").delay(5000).fadeOut("slow");
  document.getElementById("copyalertcorner").innerHTML = `Successfully Reset tab name back to ${document.title}`;
} 
document.addEventListener("keydown", e => {
      if (e.key === "g" && e.ctrlKey) {
      e.preventDefault();
      console.log("game page opened");
      window.open("game/index.html");
    } else if (e.key === "s" && e.ctrlKey) {
      e.preventDefault();
      window.open("105/settings/index.html");
      console.log("settings page opened");
    } else if (e.key === "h" && e.ctrlKey) {
      e.preventDefault();
      window.open("./index.html");
      console.log("settings page opened");
    } else if (e.key === "c" && e.ctrlKey) {
      e.preventDefault();
      window.open("105/chatroom/index.html");
    } else if (e.key === "d" && e.ctrlKey) {
      e.preventDefault();
      window.open("docs/index.html"); }
  });
  window.addEventListener('online',  online);
window.addEventListener('offline', offline);
function online() {
  $("copyalertcorner").fadeIn("slow").delay(5000).fadeOut("slow");
  document.getElementById("copyalertcorner").innerHTML = `You are back Online`;

}
function offline() {
  $("copyalertcorner").fadeIn("slow").delay(5000).fadeOut("slow");
  $('copyalertcorner').addClass('offline');
  document.getElementById("copyalertcorner").innerHTML = `Offline | Reconnect and try again | Offline`;
}