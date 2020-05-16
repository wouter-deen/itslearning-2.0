//Initialise Firebase

import * as firebase from "firebase"

const DB_CONFIG = firebase.initializeApp ({
    apiKey: "AIzaSyAtpwzvtK7Jy9Hl0ebEIS2v-tnblIAQMdI",
    authDomain: "its-2-f3df0.firebaseapp.com",
    databaseURL: "https://its-2-f3df0.firebaseio.com",
    projectId: "its-2-f3df0",
    storageBucket: "its-2-f3df0.appspot.com",
    messagingSenderId: "226019090272",
    appId: "1:226019090272:web:3c67d80b34ca538adec805",
    measurementId: "G-RFB5D4VR21"
});

export default DB_CONFIG