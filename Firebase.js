import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDn_wi4HccwHcajmkgThLAogsLnTleQuVc',
  authDomain: 'reactnativedb-10ead.firebaseapp.com',
  databaseURL: 'https://reactnativedb-10ead-default-rtdb.firebaseio.com',
  projectId: 'reactnativedb-10ead',
  storageBucket: 'reactnativedb-10ead.appspot.com',
  messagingSenderId: '829392967538',
  appId: '1:829392967538:web:2476b1ff722b8db653efeb',
  measurementId: 'G-2V0FFM24LX',
};
// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebase;