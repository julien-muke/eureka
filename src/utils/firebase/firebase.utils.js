import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

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

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup (auth, provider);
