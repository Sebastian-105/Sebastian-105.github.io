$(document).ready(function () {
  $(document).on('DOMContentLoaded', function () {
    // Request desktop notifications permission on page load

    if (!Notification) {
      console.log('Desktop notifications are not available in your browser.');
      return;
    }

    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  });

  function showNotification() {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    } else {
      const options = {
        body: 'New Update',
        dir: 'ltr',
        image: '/105.png'
      };
      const notification = new Notification('Notification', options);

      notification.onclick = function () {
        window.open('https://github.com/Sebastian-105/Sebastian-105.github.io/blob/Sebastian-105/CHANGELOG.md');
      };
    }
  }

  $('#btn-show-notification').on('click', showNotification);
});