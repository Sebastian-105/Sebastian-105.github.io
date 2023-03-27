var jqueryhtml = $("html").html();
width = screen.width;
height = screen.height
var gametitle = localStorage.getItem("tabname1234");
function abgs() {
  var aboutblank = window.open("", `${gametitle}`, `width=${width} height=${height}`);
  aboutblank.document.write(jqueryhtml);
}
function aboutblank_home()  {
  var aboutblank = window.open("", "Sebastian-105", `width=${width} height=${height}`);
  aboutblank.document.write(`<!--─────────────────────────────────────────────────────────────────────────────────────────────────|
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
<!DOCTYPE html>
<html lang="en-US">
  <head onbeforunload="return MyFunctionalert()">
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-EF4SM0THHF"></script>
    <script>
      window.dataLayer = window.dataLayer || [];

      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date()); 
      gtag("config", "G-EF4SM0THHF");

    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="UTF-8" />
    <meta name="deription" content="My Online Name is Sebastian-105" />
    <meta name="author" content="Sebastian-105" />
    <meta property="og:title" content="Sebastian-105" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://sebastian-105.github.io" />
    <meta property="og:image" content="./105.png" />
    <meta property="og:description" content="My home page, games, and a live chatroom. | Sebastian-105 | Made with https://github.com">
    <link rel="manifest" href="manifest.json" />
    <link rel="stylesheet" href="assets/lib/fonts/kings.css" />
    <link rel="stylesheet" href="assets/lib/fonts/SourceCodePro.css" />
    <link rel="stylesheet" href="assets/lib/fonts/vollkorn.css" />
    <link rel="stylesheet" href="assets/css/Sebastian-105.css" />
    <link rel="stylesheet" href="assets/lib/font-awesome.min.css" />
    <link rel="stylesheet" href="https://sebastian-105.vercel.app/assets/lib/fonts/kings.css" />
    <link rel="stylesheet" href="https://sebastian-105.vercel.app/assets/lib/fonts/SourceCodePro.css" />
    <link rel="stylesheet" href="https://sebastian-105.vercel.app/assets/lib/fonts/vollkorn.css" />
    <link rel="stylesheet" href="https://sebastian-105.vercel.app/assets/css/Sebastian-105.css" />
    <link rel="stylesheet" href="https://sebastian-105.vercel.app/assets/lib/font-awesome.min.css" />
    <link rel="help" href="105/help/index.html" />
    <link rel="license" href="LICENSE" />
    <link rel="icon" href="105.png" style="border-radius: 50%" />
    <title class="title">Sebastian-105</title>
  </head>
  <body onload="test123451234512345()">
    <div class="container" onload="Sebastian105()">
      
      <main>
        <!-- ─────────────── Little alert in corner ─────────────── -->
        <div class="corner">
          <div class="iconcorner"></div>
          <id id="cornercontent"></id>
        </div>
        <!-- End of little alert in corner -->
        <!--───────────────Callout───────────────-->
        <!-- <div class="callout">
          <div class="callout-header"><strong>Unblocked My Site!!!</strong></div>
          <span class="closecallout">×</span>
          <div class="callout-container">
          	<p style="font-size:18px; margin-left: 5px;">The Links</p>
            <p style="margin:5px;"><a style="font-size:18px;" href="./105/blocked/index.html">The blocked page (list of backup urls)</a></p>
          </div>
        </div> -->
        <!-- ───────────────Alert Box───────────────-->
        <!-- in order to add an alert box copy. . . -->
        <div class="alert info" style="display: block">
          <div id="tacbox" style="display: block">
            <input id="terms2" type="checkbox" oninput="terms()" />
            <label for="checkbox">By using any URL under this domain, I
              agree to these
              <a href="105/terms/index.html">Terms and Conditions</a>.</label>
          </div>
        </div>

        <!--to create one you can add "success", "info", "warning", after the class alert before the quotation marks -->

        <!-- ───────────────Home─────────────── -->
        <div id="time" title="It's Interactive!" onclick="theexacttime()"></div>
        <div class="exacttime">
          <br /><br /><br />
          <h1 id="thetimeinexacttime"></h1>
          <div id="exittime">dismiss</div>
        </div>
        <script>
          const hour = new Date().getHours();
          let seb;
          if (hour < 12) {
            seb = "Good Morning";
          } else if (hour < 17) {
            seb = "Good Afternoon";
          }else{
            seb = "Good Evening";
          }
          document.getElementById("time").innerHTML = seb;

        </script>
        <!--──────────────── HEADER────────────────-->
        <div id="home">
          <section class="intro">
            <h3 id="headerh1" title="The best website out there!!" class="title">
              Sebastian-105
              <hr />
              <hr />
            </h3>
            <p class="subtitledesc" title="Pseudonyam means another name">
              Not much of a pseudonyam wouldn't you say?
            </p>
            <p class="subtitledesc">
              If you ever use my template . . . CITE ME!
            </p>
            <p class="subtitledesc" title='when I say "appreciate" I mean "do it now"'>
              I would appreciate if you fill out the feedback form.
            </p>
            <hr id="lineunder" />
            <!--───────────────social media links───────────────-->

            <div class="social-media"></div>
            <a class="asasdfd" href="https://github.com/Sebastian-105/" target="_blank">
              <title>Github</title><img src="105.png" style="width: 25px; height: 25px; border-radius: 50%" />
            </a>
            <a class="asasdfd" href="https://open.spotify.com/user/xgejalgtp9rurdpiic5ysyrju" target="_blank">
              <title>Spotify</title><img src="./assets/images/Spotify_icon.svg.png" style="width: 25px; height: 25px; border-radius: 50%" />
            </a>
          </section>
        </div>

        <!--───────────────Projects───────────────-->
        <div class="hr" style="width:544px;"></div>
        <div id="projects">
          <h3>My Projects</h3>
          <div class="subtitle" id="xyz" style="font-size: 14px">
            (click me to hide projects)
          </div>
          <p id="projects2">
            <a href="105/projects/index.html">Here are some of my projects, you may like.</a>
          </p>
          <div class="work-box" >
            <div class="work">
              <div class="card" title="offical games site">
                <img class="work-img" src="105.circle.png" />
                <a href="game/index.html" target="_blank">
                  <!--Link to project-->
                  <div class="work-content">Games site</div>
                </a>
              </div>
                  <div class="card">
                    <img class="work-img" src="105.circle.png" />
                    <a href="https://Organization-105.github.io" target="_blank">
                      <!--Link to project-->
                      <div class="work-content">Organization-105</div>
                    </a>
                  </div>
              <div class="card" title="offical chatroom">
                <img class="work-img" src="105.circle.png" title="offical chatroom" />
                <a href="105/chatroom/index.html" target="_blank">
                  <!--Link to project-->
                  <div class="work-content">Chatroom</div>
                </a>
              </div>
              <div class="card">
                <img class="work-img" src="105.circle.png" />
                <a href="https://once-upon-a-slime.netlify.app" target="_blank">
                  <!--Link to project-->
                  <div class="work-content">Lucia's Slime website</div>
                </a>
              </div></div>
        <!--───────────────Sidenav───────────────-->
        <div class="hr"></div>

        <div class="sidenav">
          <div class="update" title="Whats New?">Version: <version onload="versionname()" id="currentverisonasdf">Loading. . .</version></div><br>
          <a onclick="settings()" title="Settings">Settings</a>
          <a onclick="downloadlink()">Download</a>
          <div class="dropdown-container2">
           </div>
          <a onclick="myFunctiongame()" target="_blank">Offical Games Site</a>
          <a onclick="Chatroom()" target="_blank">Offical Chatroom</a>
          <a onclick="blocked()" target="_blank" title="click this in advance">Blocked?</a>
          <a class="jQuerytest" onclick='aboutblank()' target="_blank">Open site in blank</a>
          <button class="dropdown-btn" title="all my forms">
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
            <div class="list">~</div>
            Extra links
          </button>
          <div class="dropdown-container">
            <a class="jQuerytest" href="https://github.com/Sebastian-105/Sebastian-105.github.io/blob/main/CODE_OF_CONDUCT.md" target="_blank" title="Code of conduct">CODE OF CONDUCT.md</a>
            <a class="jQuerytest" href="https://github.com/Sebastian-105/Sebastian-105.github.io/blob/main/CONTRIBUTING.md" target="_blank">CONTRIBUTING.md</a>
            <a class="jQuerytest" href="https://github.com/Sebastian-105/Sebastian-105.github.io/blob/main/CHANGELOG.md" title="Outdated">changelog.md</a>
            <a class="jQuerytest" href="https://github.com/Sebastian-105/Sebastian-105.github.io/blob/main/SECURITY.md">Security.md</a>
          </div>
          <button class="dropdown-btn" title="all my forms">
            <div class="list">~</div>
            Tutorials
          </button>
          <div class="dropdown-container">
            <a class="jQuerytest" href="105/tutorial/index.html" target="_blank" title="Tutorial">Tutorials</a>
            <a class="jQuerytest" href="105/tutorial/code/index.html" target="_blank" title="Tutorial">Download Locally</a>
          </div>
          <button class="dropdown-btn">
            <div class="list">~</div>
            Links
          </button>
          
          <div class="dropdown-container" style="margin-bottom: 25px">
            <a class="jQuerytest" href="https://open.spotify.com/playlist/1JewROQSvYYLHNBZ3HdiFt?si=-A3DXSEGSQKorEqxo2H7wQ" target="_blank" title="My main playlist">My Spotify playlist</a>
            <a class="jQuerytest" href="https://replit.com/@Sebastian105" target="_blank" title="https://repl.it/@Sebastian105">My Replit account</a>
            <a class="jQuerytest" href="https://sebastian-105.github.io/">Offical github.io URL</a>
            <a class="jQuerytest" href="https://ca676fa4-e6e7-492a-9ac3-69d958fceab7.id.repl.co" title="offical backup link">Repl Backup link</a>
            <a class="jQuerytest" href="105/terms/index.html" target="_blank">Terms</a>
            <a class="jQuerytest" href="https://replit.com/" target="_blank">My coding platform</a>
            <a class="jQuerytest" href="https://github.com/" target="_blank">My 2nd ary coding platform</a>
            <a class="jQuerytest" href="https://vscode.dev" target="_blank">3rd coding platform</a>
            <a class="jQuerytest" href="LICENSE" target="_blank" title="License">LICENSE</a>
            <a class="jQuerytest" href="assets/images/105/105.png" target="_blank" title="Offical icon">Icon</a>
            <a id="showcode">Source Code</a>
            <a href="https://github.com/Sebastian-105/Sebastian-105.github.io/blob/main/CHANGELOG.md" target="_blank" title="stopped updating">Changelog</a>
            <a href="#contact" title="Contact Info">Contact</a>
            <a href="#projects" title="projects. . . duh.">Projects</a>
            <a onclick="ack()" target="_blank" title="Credits">Acknowledgements</a>
          </div>
          <div id="closesidenav" title="close sidenav" style="position:absolute;" onclick="closesidenav()">×</div>
        </div><div class="Untitled"></div>
        <!--─────The sidenav end─────-->
        <!--───────────────Contact───────────────-->
          <!--───────────────social media links───────────────-->
          <h3>
            CONTACT
            <hr />  
          </h3>
          <h2>Sebastian's Stuff</h2>
          <a class="contact" href="https://github.com/Sebastian-105/" target="_blank">Github</a>
          <br />
          Discord: <br />
          <p onclick="copytoclipboard('Sebastian105#3143')" title="Copy username" style="cursor: pointer;">Sebastian105#3143</p>
          <copyalertcorner  style="  display:none;" class="alertcorner" id="copyalertcorner">aasdfasd</copyalertcorner>

          <br />
          <a class="contact" id="myemail" href="mailto:28stu216@lexingtonma.org">My email</a>
          <br />
          <hr />
          <h2>Danyang's Stuff</h2>
          <a class="contact" href="https://github.com/DanyangXu77/" target="_blank">Github</a><br />
          Discord: <br />
          <p onclick="copytoclipboard('dx#0500')" title="Copy username" style="cursor: pointer;">dx#0500</p>
          <br />
          Email:
          <a class="contact" href="mailto:danyangxu77@gmail.com">danyangxu77@gmail.com</a><br />
          Alternate Email:
          <a class="contact" href="mailto:danyangxu88@gmail.com">danyangxu88@gmail.com</a><br />
          <div class="social-media"></div>
        </div>
      </div>
  
    <footer id="copyright" class="footer">
      © 2023
      <a href="105/about-me/index.html" target="_blank">
        Sebastian-105</a>
      &
      <a href="https://replit.com/@potatostrangler/" target="_blank">DanyangXu77</a> ~ <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" style="width:25px; height:25px; margin-bottom:-6px; cursor:pointer;" onclick="window.open('https://github.com/Sebastian-105/Sebastian-105.github.io')"> <a href="https://github.com/Sebastian-105/Sebastian-105.github.io">Github</a> <img> ~ <img src="https://replit.com/public/icons/favicon-prompt-192.png" style="width:25px; height:25px; margin-bottom:-6px; cursor:pointer;" onclick='window.open("https://replit.com/@Sebastian105/Sebastian105")'> <a href="https://replit.com/@Sebastian105/Sebastian105">Replit</a> <img>
    </footer></div>  </main>
    <offline class="alertcorner offline" id="OfflineMode"></offline>
    <script src="https://unpkg.com/jquery@3.6.3/dist/jquery.js"></script>
    <script src="assets/js/jQuery.min.js"></script>
    <script src="assets/js/Sebastian-105.js"></script>
    <script src="assets/js/about-blank.js"></script>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="assets/js/react.js"></script>
    <script src="https://icon105.netlify.app/Sebastian105.js" defer></script>
    <script>
      
    </script>
    <script> //Keybinds ONLY!
      document.addEventListener("keydown", e => {
        e.preventDefault();
        if (e.key === "f" && e.ctrlKey) {
      document.requestFullscreen();}
        if (e.key === "g" && e.ctrlKey) {
        	console.log("game page opened");
          window.open("game/index.html");
        } else if (e.key === "s" && e.ctrlKey) {
          window.open("105/settings/index.html");
        	console.log("settings page opened");
        } else if (e.key === "h" && e.ctrlKey) {
          window.open("./index.html");
        	console.log("settings page opened");
        } else if (e.key === "c" && e.ctrlKey) {
          window.open("105/chatroom/index.html");
        } else if (e.key === "d" && e.ctrlKey) {
          window.open("docs/index.html"); }
          else if (e.key === "b" && e.ctrlKey) {
          aboutblank();
        }
      })
  
      
    </script>
  </body>

</html>
<!-- Original Template Made By @lilykhan (replit) -->`)}

function aboutblank_game()  {
  var aboutblank = window.open("", "Sebastian-105 | Game", `width=${width} height=${height}`);
  aboutblank.document.write(`
<!-- Edited by Sebastian-105 & DanyangXu77.  Made from scratch by Choobs. -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <script type='text/javascript'>
      window.smartlook||(function(d) {
        var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
        var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
        c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
        })(document);
        smartlook('init', 'fe72cf6eebf6ef82bb81b19703c7485f6a30e4af', { region: 'eu' });
    </script>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="The better unblocked games website." />
    <meta name="keywords" content="front-end web developer, unblocked, games, google sites, unblocked games mom, ublocked, code, coding, programmer, development, javascript, jquery, bootstrap, sass, less, git" />
    <meta name="author" content="Sebastian-105" />
    <meta content="Games | Sebastian-105" property="og:title" />
    <meta content="The better unblocked games website." property="og:description" />
    <meta content="105.png" property="og:image" />
    <link rel="icon"  href="105.png"/>
    <link href="https://sebastian-105.vercel.app/assets/css/style.css" rel="stylesheet"/>
    <link href="../assets/css/Sebastian-105.css" rel="stylesheet" />
<script>
  var tabiconabc = localStorage.getItem('tabicon105')
  var localStoragetitle = localStorage.getItem('tabname1234')
  document.title = localStoragetitle
  $("link[rel*='icon']").attr("href", tabiconabc);
</script>
  </head>

  <body id="game-page-body">
    <div class="navbar">
      <nav id="thenavbar">
        <div class="topnav" title="The Best Navigation Out There">
        <a onclick="myFunction105()">Light/Dark</a>
        <a onclick="myFunction77()">Randomize to GC Banners</a>
        <a onclick="myfunctionofflinegames()">Offline Games</a>
        <a onclick="dailygames()">Daily Games</a>
        <a id="showcode">Show Source code</a>
        <img class="pfp" src="./105.png" style="cursor:pointer;">
        </div>
    </div>
    <center>
      <div id="announcementBar" style="top: 6px;">
        <p class="announcement" style="font-size:18px;">Made a bunch of alt links <a href="../105/blocked">Heres the list of unblocked websites</a>!</p>
        <script>
          var visible = new Boolean(true); //Announcement Toggle
        </script> 
        
      </div>
      
</center><div id="games">
<div class="games">
  <!-- Games go here -->
</div>

</div>
    
    <div class="gamecontainer hidden">
      <div class="nav">
        <div class="item" id="back">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="white">
            <path d="M627 948 276 597q-5-5-7-10t-2-11q0-6 2-11t7-10l351-351q11-11 28-11t28 11q12 12 12 28.5T683 261L368 576l315 315q13 13 12 29t-12 27q-12 12-28.5 12T627 948Z" />
</svg>
        </div>

        <span>
          Loading...
        </span>

        <div class="item right" id="fullscreen">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="white">
            <path
              d="M230 856q-12.75 0-21.375-8.625T200 826V693q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T260 693v103h103q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T363 856H230Zm-.175-367Q217 489 208.5 480.375T200 459V326q0-12.75 8.625-21.375T230 296h133q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T363 356H260v103q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625ZM597 856q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T597 796h103V693q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T760 693v133q0 12.75-8.625 21.375T730 856H597Zm132.825-367Q717 489 708.5 480.375T700 459V356H597q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T597 296h133q12.75 0 21.375 8.625T760 326v133q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Z"
            />
          </svg>
        </div>
      </div>

      <div class="frame">
        <iframe frameborder="0" id="gameframe" class="gameframe"></iframe>
      </div>
    </div>

    <span class="spinner">
      <svg viewBox="22 22 44 44">
        <circle class="spinnerSvg" cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"></circle>
      </svg>
    </span>

    <div class="spacing"></div>
    <footer class="footer" style="text-align: center;"><img src="./105.png" style="width:35px; height:35px;border-radius: 50%;">  &copy; 2022 - 2023 Sebastian-105, DanyangXu77. <a style="padding-left: 50px;" href="https://github.com/Sebastian-105">@Sebastian-105</a> ~ <a href="https://github.com/DanyangXu77">@DanyangXu77</a> ~ <a href="https://sebastian-105.github.io/105/terms/index.html">Terms</a> ~ <a href="https://sebastian-105.github.io/105/settings/index.html">Settings</a> ~ <a href="https://sebastian-105.github.io/index.html">Homepage</a> ~ </footer>
    <copyalertcorner  style="  display:none;" class="alertcorner" id="copyalertcorner">aasdfasd</copyalertcorner>
    <script>
      if (document.location.href.includes("file:///")) {
        location.replace('./file.html');

      }
    </script>
    <script> //Keybinds ONLY!
      document.addEventListener("keydown", e => {
        e.preventDefault();
        if (e.key === "g" && e.ctrlKey) {
          window.open("index.html");
        }else if (e.key === "h" && e.ctrlKey) {
          window.open("../index.html")
        } else if (e.key === "s" && e.ctrlKey) {
          window.open("../105/settings/index.html")
        } else if (e.key === "c" && e.ctrlKey) {
          window.open("../105/chatroom/index.html");
        }
      })
    </script>
    <script src="../assets/js/min.js"></script>
    <script src="./js/index.js"></script>
    <script src="../assets/lib/jquery.min.js"></script>
    <script src="../assets/js/jQuery.min.js"></script>
    <script src="../assets/js/Sebastian-105.js"></script>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="./json.js"></script>
  </body>
</html>`)}
function aboutblank_game123()  {
  var aboutblank = window.open("", "Sebastian-105 | Game", `width=${width} height=${height}`);
  aboutblank.document.write(`
<!-- Edited by Sebastian-105 & DanyangXu77.  Made from scratch by Choobs. -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <script type='text/javascript'>
      window.smartlook||(function(d) {
        var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
        var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
        c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
        })(document);
        smartlook('init', 'fe72cf6eebf6ef82bb81b19703c7485f6a30e4af', { region: 'eu' });
    </script>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="The better unblocked games website." />
    <meta name="keywords" content="front-end web developer, unblocked, games, google sites, unblocked games mom, ublocked, code, coding, programmer, development, javascript, jquery, bootstrap, sass, less, git" />
    <meta name="author" content="Sebastian-105" />
    <meta content="Games | Sebastian-105" property="og:title" />
    <meta content="The better unblocked games website." property="og:description" />
    <meta content="105.png" property="og:image" />
    <link rel="icon"  href="105.png"/>
    <link href="https://sebastian-105.vercel.app/assets/css/style.css" rel="stylesheet"/>
    <link href="../assets/css/Sebastian-105.css" rel="stylesheet" />
<script>
  var tabiconabc = localStorage.getItem('tabicon105')
  var localStoragetitle = localStorage.getItem('tabname1234')
  document.title = localStoragetitle
  $("link[rel*='icon']").attr("href", tabiconabc);
</script>
  </head>

  <body id="game-page-body">
    <div class="navbar">
      <nav id="thenavbar">
        <div class="topnav" title="The Best Navigation Out There">
        <a onclick="myFunction105()">Light/Dark</a>
        <a onclick="myFunction77()">Randomize to GC Banners</a>
        <a onclick="myfunctionofflinegames()">Offline Games</a>
        <a onclick="dailygames()">Daily Games</a>
        <a id="showcode">Show Source code</a>
        <img class="pfp" src="./105.png" style="cursor:pointer;">
        </div>
    </div>
    <center>
      <div id="announcementBar" style="top: 6px;">
        <p class="announcement" style="font-size:18px;">Made a bunch of alt links <a href="../105/blocked">Heres the list of unblocked websites</a>!</p>
        <script>
          var visible = new Boolean(true); //Announcement Toggle
        </script> 
        
      </div>
      
</center><div id="games">
<div class="games">
  <!-- Games go here -->
</div>

</div>
    
    <div class="gamecontainer hidden">
      <div class="nav">
        <div class="item" id="back">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="white">
            <path d="M627 948 276 597q-5-5-7-10t-2-11q0-6 2-11t7-10l351-351q11-11 28-11t28 11q12 12 12 28.5T683 261L368 576l315 315q13 13 12 29t-12 27q-12 12-28.5 12T627 948Z" />
</svg>
        </div>

        <span>
          Loading...
        </span>

        <div class="item right" id="fullscreen">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="white">
            <path
              d="M230 856q-12.75 0-21.375-8.625T200 826V693q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T260 693v103h103q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T363 856H230Zm-.175-367Q217 489 208.5 480.375T200 459V326q0-12.75 8.625-21.375T230 296h133q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T363 356H260v103q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625ZM597 856q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T597 796h103V693q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T760 693v133q0 12.75-8.625 21.375T730 856H597Zm132.825-367Q717 489 708.5 480.375T700 459V356H597q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T597 296h133q12.75 0 21.375 8.625T760 326v133q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Z"
            />
          </svg>
        </div>
      </div>

      <div class="frame">
        <iframe frameborder="0" id="gameframe" class="gameframe"></iframe>
      </div>
    </div>

    <span class="spinner">
      <svg viewBox="22 22 44 44">
        <circle class="spinnerSvg" cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"></circle>
      </svg>
    </span>

    <div class="spacing"></div>
    <footer class="footer" style="text-align: center;"><img src="./105.png" style="width:35px; height:35px;border-radius: 50%;">  &copy; 2022 - 2023 Sebastian-105, DanyangXu77. <a style="padding-left: 50px;" href="https://github.com/Sebastian-105">@Sebastian-105</a> ~ <a href="https://github.com/DanyangXu77">@DanyangXu77</a> ~ <a href="https://sebastian-105.github.io/105/terms/index.html">Terms</a> ~ <a href="https://sebastian-105.github.io/105/settings/index.html">Settings</a> ~ <a href="https://sebastian-105.github.io/index.html">Homepage</a> ~ </footer>
    <copyalertcorner  style="  display:none;" class="alertcorner" id="copyalertcorner">aasdfasd</copyalertcorner>
    <script>
      if (document.location.href.includes("file:///")) {
        location.replace('./file.html');

      }
    </script>
    <script> //Keybinds ONLY!
      document.addEventListener("keydown", e => {
        e.preventDefault();
        if (e.key === "g" && e.ctrlKey) {
          window.open("index.html");
        }else if (e.key === "h" && e.ctrlKey) {
          window.open("../index.html")
        } else if (e.key === "s" && e.ctrlKey) {
          window.open("../105/settings/index.html")
        } else if (e.key === "c" && e.ctrlKey) {
          window.open("../105/chatroom/index.html");
        }
      })
    </script>
    <script src="../assets/js/min.js"></script>
    <script src="./js/index.js"></script>
    <script src="../assets/lib/jquery.min.js"></script>
    <script src="../assets/js/jQuery.min.js"></script>
    <script src="../assets/js/Sebastian-105.js"></script>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="./json.js"></script>
  </body>
</html>`)}