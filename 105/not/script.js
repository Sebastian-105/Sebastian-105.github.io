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

  function showNotification(type) {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    } else if (type === "game") {
      const game = {
        requireInteraction: 'true',
        tag: 'Sebastian-105',
        title: 'New Game',
        body: 'Theres a new game to play.',
        dir: 'ltr',
        icon: '/105.png'
      }; const notification = new Notification('Notification', game);
    } else if (type === "update") {
      const update = {
          requireInteraction: 'true',
          tag: 'Sebastian-105',
          title: 'New Update',
          body: 'Theres a new update available.',
          dir: 'ltr',
          icon: '/105.png'
      };
      const notification = new Notification('Notification', update);} else {
        const update = {
          requireInteraction: 'true',
          tag: 'Sebastian-105',
          title: 'Sebastian-105',
          body: 'empty',
          dir: 'ltr',
          icon: '/105.png'
      };       const notification = new Notification('Notification', update);}
      notification.onclick = function () {
        window.open('https://github.com/Sebastian-105/Sebastian-105.github.io/blob/Sebastian-105/CHANGELOG.md');
      };
    }
  } .$('#btn-show-notification').on('click', showNotification))