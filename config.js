import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCOg7Oju0JUr0EonynSIz0iFpfjam1JbzM",
    authDomain: "native-list-app.firebaseapp.com",
    projectId: "native-list-app",
    storageBucket: "native-list-app.appspot.com",
    messagingSenderId: "968935126833",
    appId: "1:968935126833:web:a6d630cea5c50a04aba210",
    measurementId: "G-CHEXTT1LYT"
};

firebase.initializeApp(firebaseConfig)

// if(!firebase.app.length){
//     firebase.initializeApp(firebaseConfig)
// }

export {firebase};