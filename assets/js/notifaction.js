let permission = Notification.permission;

if(permission === "granted"){
   showNotification();
} else if(permission === "default"){
   requestAndShowPermission();
} else {
  alert("Use normal alert");
}

function requestAndShowPermission() {
    Notification.requestPermission(function (permission) {
        if (permission === "granted") {
            showNotification();
        }
    });
}
function showNotification() {
  //  if(document.visibilityState === "visible") {
  //      return;
  //  }
   let title = "";
   let icon = 'https://sebastian-105.netlify.app/105.png'; //this is a large image may take more time to show notifiction, replace with small size icon
   let body = "";

   let notification = new Notification(title, { body, icon });

   notification.onclick = () => {
          notification.close();
          window.parent.focus();
   }
   
}