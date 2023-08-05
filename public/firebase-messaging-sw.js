// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyAKS1uKR-Vdhg_poUn3Sz47h_R8HV84Z8w",
  authDomain: "fb-testing-4d315.firebaseapp.com",
  databaseURL: "https://fb-testing-4d315-default-rtdb.firebaseio.com",
  projectId: "fb-testing-4d315",
  storageBucket: "fb-testing-4d315.appspot.com",
  messagingSenderId: "523525819842",
  appId: "1:523525819842:web:6b827f49670b8e543c5a5b",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./icon.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
