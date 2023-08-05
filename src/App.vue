<script setup>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKS1uKR-Vdhg_poUn3Sz47h_R8HV84Z8w",
  authDomain: "fb-testing-4d315.firebaseapp.com",
  databaseURL: "https://fb-testing-4d315-default-rtdb.firebaseio.com",
  projectId: "fb-testing-4d315",
  storageBucket: "fb-testing-4d315.appspot.com",
  messagingSenderId: "523525819842",
  appId: "1:523525819842:web:6b827f49670b8e543c5a5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});
getToken(messaging, {
  vapidKey:
    "BCpZoxTOlwkDGD782ROsyp55Lx_yZjeNTwSjCbdimH1yaGc1IEhWdngYSSFBTXroi4CJuEDIAyMTo5y3eYiIKF4",
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      console.log("you token is : " + currentToken);
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });
</script>

<template>
  <div></div>
</template>
