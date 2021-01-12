/* eslint-disable no-console */
/* eslint-disable consistent-return */
import firebase from 'firebase';
import { useCallback } from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyCeTRaI2QDZi8LLWL7vJeSYRW9k4XeYeDs',
  authDomain: 'login-form-d84d3.firebaseapp.com',
  projectId: 'login-form-d84d3',
  storageBucket: 'login-form-d84d3.appspot.com',
  messagingSenderId: '504336108453',
  appId: '1:504336108453:web:2cc0a76aec387ed4b1f64c',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const EmailProvider = new firebase.auth.EmailAuthProvider();

export {
  auth,
  googleProvider,
  facebookProvider,
  EmailProvider,
};

export const useFirebaseAuth = () => {
  const launchAuth = useCallback(async (provider, email, password) => {
    console.log('provider', provider);
    console.error('Error');
    switch (provider) {
      case 'google': {
        try {
          const { additionalUserInfo } = await auth.signInWithPopup(googleProvider);
          return additionalUserInfo.profile;
        } catch (error) {
          console.error('errorGoogle>>>>', error.message);
          break;
        }
      }
      case 'facebook': {
        try {
          const { additionalUserInfo } = await auth.signInWithPopup(facebookProvider);
          return additionalUserInfo.profile;
        } catch (error) {
          throw console.error(new Error(error.message));
        }
      }
      case 'email': {
        try {
          const resp = await auth.createUserWithEmailAndPassword(email, password);
          return resp;
        } catch (error) {
          console.error('errorEmail', error.message);
          break;
        }
      }
      default:
        break;
    }
  }, []);

  return {
    launchAuth,
  };
};
