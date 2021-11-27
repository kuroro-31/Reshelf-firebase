// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyB52K0YyvLSsM1C1G0PU-ueoSskdH5yfMI',
  authDomain: 'reshelf-nuxt-app.firebaseapp.com',
  databaseURL:
    'https://reshelf-nuxt-app-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'reshelf-nuxt-app',
  storageBucket: 'reshelf-nuxt-app.appspot.com',
  messagingSenderId: '447357487424',
  appId: '1:447357487424:web:c6d994b85095f1ae7192a5',
  measurementId: 'G-W9B3J3BJ4K',
}

const firebase = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebase)
