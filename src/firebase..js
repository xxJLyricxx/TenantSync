// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDvMakaeAaM2fog961PRr8QFQ6ASIXqEKI",
  authDomain: "tenantsync-6e6cc.firebaseapp.com",
  databaseURL: "https://tenantsync-6e6cc-default-rtdb.firebaseio.com",
  projectId: "tenantsync-6e6cc",
  storageBucket: "tenantsync-6e6cc.firebasestorage.app",
  messagingSenderId: "1092042722036",
  appId: "1:1092042722036:web:d070476a272e772f922ca1",
  measurementId: "G-LG56HVWD9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database }
const analytics = getAnalytics(app);