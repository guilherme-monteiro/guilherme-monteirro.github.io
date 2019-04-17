importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
var config = {
    apiKey: "AIzaSyCo9yyXFzuZcGV-LSgSRD86pAPfbb3cVZ8",
    authDomain: "pinpointpushdemo.firebaseapp.com",
    databaseURL: "https://pinpointpushdemo.firebaseio.com",
    projectId: "pinpointpushdemo",
    storageBucket: "pinpointpushdemo.appspot.com",
    messagingSenderId: "1092029211721"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
