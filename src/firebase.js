
import firebase from "firebase";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD2STxF-LYgjS5hte7-grhYTIKVUamU0fY",
  authDomain: "classroom-79443.firebaseapp.com",
  projectId: "classroom-79443",
  storageBucket: "classroom-79443.appspot.com",
  messagingSenderId: "680684517040",
  appId: "1:680684517040:web:4d593fa043a003c4b3ad75"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();
const firestore= firebase.firestore();


const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle= async()=>{
     try {
         
        const response = await auth.signInWithPopup(googleAuthProvider);
        console.log(response.user);
        let user= response.user;
        console.log(`User ID - ${user.Uid}`);
        
        const querySnapshot= await firestore.collection("users").where("uid","==",user.Uid).get();

        if (querySnapshot.docs.length===0){
            await firestore.collection("users").add({
                uid:user.uid, 
                enrolledClassRooms: [],
            })
        }

     } catch (error) {
         
        alert(error.message);
     }

}

const signOut= auth.signOut();





export {app, auth, firestore,signOut,signInWithGoogle};