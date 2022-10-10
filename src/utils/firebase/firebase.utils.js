import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABy3sNv3u6w5ynJo-yqP59nMoY5PN09lw",
    authDomain: "eureka-db-f2385.firebaseapp.com",
    projectId: "eureka-db-f2385",
    storageBucket: "eureka-db-f2385.appspot.com",
    messagingSenderId: "433808287330",
    appId: "1:433808287330:web:a053900ad932f92418533b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => 
  signInWithPopup (auth, googleProvider);
  export const signInWithGoogleRedirect = () =>
   signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

 export const createUserDocumentFromAuth = async (
  userAuth, 
  additionalInformation = {} 
 ) => {
  if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);

    //if user data does not exists

    // create /set the document with the data from userAuth in my collection

   if(!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
   }

     // if user data exists

    // return userDocRef

    return userDocRef;

  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

   return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

   return await signInWithEmailAndPassword(auth, email, password);
  };

  export const signOutUser = async () => await signOut(auth);

  export const onAuthStateChangedListener = (callback) => 
    onAuthStateChanged(auth, callback);
