import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/functions';

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDL7bq6jma_4zdx91LXI9-gMlDj-stcUAw',
  authDomain: 'do2me-2541f.firebaseapp.com',
  databaseURL: 'https://do2me-2541f.firebaseio.com',
  projectId: 'do2me-2541f',
  storageBucket: 'do2me-2541f.appspot.com',
  messagingSenderId: '318260196799',
  appId: '1:318260196799:web:e0dac247760a9a490f9d0a',
  measurementId: 'G-50WVP137Q3',
};

firebase.initializeApp(FIREBASE_CONFIG);

export const fireAuth = firebase.auth();
export const fireStore = firebase.firestore();
export const fireStorage = firebase.storage();
export const fireFunctions = firebase.functions();

export const fbProvider = firebase.auth.FacebookAuthProvider;
export const glugluProvider = firebase.auth.GoogleAuthProvider;
export const persistenceProvider = firebase.auth.Auth.Persistence;
export const phoneProvider = new firebase.auth.PhoneAuthProvider();
export const phoneAuthProvider = firebase.auth.PhoneAuthProvider;
export const fieldValueProvider = firebase.firestore.FieldValue;
