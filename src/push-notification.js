import firebase from 'firebase';

navigator.serviceWorker
    .register('./firebase-messaging-sw.js')
    .then((registration) => {
      firebase.messaging().useServiceWorker(registration);
    });

export const initializeFirebase = () => {
    var config = {
        apiKey: "AIzaSyCo9yyXFzuZcGV-LSgSRD86pAPfbb3cVZ8",
        authDomain: "pinpointpushdemo.firebaseapp.com",
        databaseURL: "https://pinpointpushdemo.firebaseio.com",
        projectId: "pinpointpushdemo",
        storageBucket: "pinpointpushdemo.appspot.com",
        messagingSenderId: "1092029211721"
    };
    firebase.initializeApp(config);
}
export const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('user token:', token);
      
      return token;
    } catch (error) {
      console.error(error);
    }
}