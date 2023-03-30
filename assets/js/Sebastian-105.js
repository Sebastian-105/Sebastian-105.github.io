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
Here is most of the javascript for "sebastian-105"
*/
var name = localStorage.getItem('personname');
var tabicon105 = localStorage.setItem('tabicon105', `https://sebastian-105.vercel.app/105.png`);
var tabname1234 = localStorage.setItem('tabname1234', 'Sebastian-105');
function Sebastian105() {
  window.addEventListener('offline', () => $('offline').fadeIn('slow'));
  document.getElementById('OfflineMode').innerHTML = 'Offline';
}
function closesidenav() {
  $('.sidenav').hide('slow');
  $('#time').hide('slow')
  console.log('Closed sidenav');
}
function tabfocus() {
  if (location.href.include('game/c')) {
    if (document.hasFocus()) {
      document.title = tabname1234;
    } else {
      document.title = 'New Tab';
    }
  }
}
setInterval(tabfocus, 1);
var examplelink = location;
var author = 'Sebastian-105';

function copytoclipboard(copiedcontent) {
  navigator.clipboard.writeText(copiedcontent);
  console.log('Username has been copied.');
  $('copyalertcorner').fadeOut('fast');
  $('copyalertcorner').fadeIn('slow').delay(1500).fadeOut('fast');
  $('copyalertcorner').css('background-color', '#04AA6D');
  document.getElementById('copyalertcorner').innerHTML =
    'Successfully copied: ' + copiedcontent;
}
function settings() {
  if (
    confirm(
      'This page is still a work in progress, are you sure you want to go here? \n-Sebastian-105'
    ) === true
  ) {
    var myWindow = window.open('105/settings/index.html');
    console.log('Opened Settings');
  } else {
    console.log('stayed at homepage \n-Sebastian-105');
  }
}
let version = 'v2.6.9';
$('#currentverisonasdf').html(version);
$('body').append("<script src='/assets/js/about-blank.js'>");
if (location.href.includes('game/c/')) {
  $('body').append(`<script> //Keybinds ONLY!
      document.addEventListener("keydown", e => {
        e.preventDefault();
        if (e.key === "f" && e.ctrlKey) {
      document.requestFullscreen();}
        if (e.key === "g" && e.ctrlKey) {
        	console.log("game page opened");
          window.open("/game/index.html");
        } else if (e.key === "s" && e.ctrlKey) {
          window.open("105/settings/index.html");
        	console.log("settings page opened");
        } else if (e.key === "h" && e.ctrlKey) {
          window.open("./index.html");
        	console.log("settings page opened");
        } else if (e.key === "c" && e.ctrlKey) {
          window.open("/105/chatroom/index.html");
        } else if (e.key === "d" && e.ctrlKey) {
          window.open("/docs/index.html"); }
          else if (e.key === "b" && e.ctrlKey) {
          abgs();
        }
      })
  `);
}
function username() {
  var usernames = prompt('What should we call you?\nWarning: this reloads your page');
  localStorage.setItem("personname", usernames);
  window.location.reload();
}
// Varibles
//Sidenav
//FUNCTIONS
function blocked() {
  var myWindow = window.open(
    '105/blocked/index.html',
    '_blank',
    'width=500,height=400,resizable=yes,left=500,top=200,toolbar=yes'
  );
}

function myFunctionterms() {
  var myWindow = window.open('105/terms/index.html', '_blank');
}

function addgame() {
  var myWindow = window.open('https://forms.gle/TXz4Mk4ZQEyjSn43A', '_blank');
}
function code() {
  var myWindow = window.open('105/code/index.html', '_blank');

  function feedback() {
    var myWindow = window.open('https://forms.gle/xmRta2vvGCLsrKUC8', '_blank');
  }
}
function suggestions() {
  var myWindow = window.open('https://forms.gle/X82sK1epn5Y1Rqj66', '_blank');
}
function myFunctionTwilight() {
  var element = document.body;
  element.classList.toggle('dark-mode');
}
function myFunctionDarkMode() {
  var elemenwt = document.body;
  elemenwt.classlist.toggle('twilight-mode');
}
function myFunctiongame() {
  var myWindow = window.open('game/index.html', '_blank');
}
function ack() {
  var myWindow = window.open('105/acknowledgements/index.html', '_blank');
}

function myFunction12345() {
  var myWindow = window.open('', 'MsgWindow', 'width=500,height=500');
  myWindow.document.write(
    'Email:<p>28stu216@lexingtonma.org</p><p><strong>Note:</strong> you can only email me if you have a lexington account</p><p>I will get a email account shortly</p>'
  );
}
function bio() {
  var myWindow = window.open('ReadMe.md', '_blank', 'width=500,height=500');
}
function changelog() {
  var myWindow = window.open('105/changelog/index.html', '_blank');
}
function myFunctionspotify() {
  var myWindow = window.open('105/spotify/index.html', '_blank');
}

function Chatroom() {
  var myWindow = window.open('105/chatroom/index.html', '_blank');
}
function myfunctionofflinegames() {
  var myWindow = window.open('p/offline/index.html');
}
function dailygames() {
  var myWindow = window.open('p/daily/index.html');
}
function downloadlink() {
  var myWindow = window.open('105/download/index.html');
}
function RunMyFunction() {
  if (Enabled == false) {
    alert('Keybinds have been disabled. \n-Sebastian-105');
  } else {
    $(window).on('keypress', function (event) {
      if (event.key == 's') {
        window.open('https://sebastian105.repl.co/105/settings/index.html');
      }
    });
  }
}
function keybinds() {
  var myWindow = window.open('105/keybinds/index.html');
}
function buttonCode() {
  var tabnameforrealz = prompt('New Tab title:', 'Example: ' + document.title);
  var tabnameforrealz123 = (document.title = tabnameforrealz);
  localStorage.setItem('tabname1234', tabnameforrealz);
  $('copyalertcorner').fadeIn('slow').delay(1500).fadeOut('fast');
  $('copyalertcorner').css('background-color', '#04AA6D');
  document.getElementById(
    'copyalertcorner'
  ).innerHTML = `Successfully Changed tab title to: ${document.title}`;
}
function tabicon() {
  var thetabicon = prompt(
    'URL for image: \nMust include https:// or http://',
    examplelink
  );
  $("link[rel*='icon']").attr('href', thetabicon);
  localStorage.setItem('tabicon105', thetabicon);
  if (
    thetabicon.includes('https://') ||
    thetabicon.includes('http://') ||
    thetabicon.includes('file://') ||
    thetabicon.includes('localhost')
  ) {
    $('copyalertcorner').fadeIn('slow').delay(1500).fadeOut('fast');
    $('copyalertcorner').css('background-color', '#04AA6D');
    document.getElementById('copyalertcorner').innerHTML =
      'Successfully Changed tab icon ' + thetabicon;
  } else {
    $('copyalertcorner').fadeIn('slow').delay(1500).fadeOut('fast');
    $('copyalertcorner').css('background-color', '#04AA6D');
    document.getElementById('copyalertcorner').innerHTML =
      'Fail to Change tab icon. Check to see if it includes https://';
  }
}
function resettabname() {
  document.title = 'Sebastian-105';
  localStorage.setItem('tabname1234', 'Sebastian-105');
  $('copyalertcorner').fadeIn('slow').delay(1500).fadeOut('fast');
  $('copyalertcorner').css('background-color', '#04AA6D');
  document.getElementById(
    'copyalertcorner'
  ).innerHTML = `Successfully Reset tab name back to ${document.title}`;
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'g' && e.ctrlKey) {
    e.preventDefault();
    console.log('game page opened');
    window.open('game/index.html');
  } else if (e.key === 's' && e.ctrlKey) {
    e.preventDefault();
    window.open('105/settings/index.html');
    console.log('settings page opened');
  } else if (e.key === 'h' && e.ctrlKey) {
    e.preventDefault();
    window.open('./index.html');
    console.log('settings page opened');
  } else if (e.key === 'c' && e.ctrlKey) {
    e.preventDefault();
    window.open('105/chatroom/index.html');
  } else if (e.key === 'd' && e.ctrlKey) {
    e.preventDefault();
    window.open('docs/index.html');
  }
});
document.addEventListener('online', online);
document.addEventListener('offline', offline);
window.addEventListener('online', online);
window.addEventListener('offline', offline);
function online() {
  $('copyalertcorner').fadeIn('slow').delay(1500).fadeOut('fast');
  document.getElementById('copyalertcorner').innerHTML = `You are back Online`;
  $('copyalertcorner').css('background-color', '#2196F3');
}
function offline() {
  $('copyalertcorner').fadeIn('slow').delay(1500).fadeOut('fast');
  $('copyalertcorner').css('background-color', '#f44336');
  document.getElementById(
    'copyalertcorner'
  ).innerHTML = `Offline | Reconnect and try again | Offline`;
}
function time() {
const day = new Date('March 29, 2023 23:15:30').getDay();
const hour = new Date().getHours();
let thetime;
if (hour < 12) {
  seb = `Good Morning`;
} else if (hour < 17) {
  thetime = `Good Afternoon`;
} else {
  thetime = `Good Evening`;
}
if (day = 6) {
  window.location.replace('105/dump/prank/index.html');
}
setInterval(() => {
document.getElementById('therealtime').innerHTML = thetime +' '+ name;
document.getElementById('timedropdown').innerHTML = `${name}'s account settings`; 
}, 1);
}
setInterval(time, 1);