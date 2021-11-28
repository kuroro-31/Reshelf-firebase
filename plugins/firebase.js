// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  // apiKey: 'AIzaSyB52K0YyvLSsM1C1G0PU-ueoSskdH5yfMI',
  // authDomain: 'reshelf-nuxt-app.firebaseapp.com',
  // databaseURL:
  //   'https://reshelf-nuxt-app-default-rtdb.asia-southeast1.firebasedatabase.app',
  // projectId: 'reshelf-nuxt-app',
  // storageBucket: 'reshelf-nuxt-app.appspot.com',
  // messagingSenderId: '447357487424',
  // appId: '1:447357487424:web:c6d994b85095f1ae7192a5',
  // measurementId: 'G-W9B3J3BJ4K',
}

const firebase = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebase)
