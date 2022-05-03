import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyAXUGj6kF7FLep3JTj43hjiVCwxf6lucQ4',
  authDomain: 'commerce-db-d9b18.firebaseapp.com',
  projectId: 'commerce-db-d9b18',
  storageBucket: 'commerce-db-d9b18.appspot.com',
  messagingSenderId: '360746220179',
  appId: '1:360746220179:web:e7b5194a79c09f827c2b66',
  measurementId: 'G-251T78QSSJ',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//This works fine
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

//This doesn't
export const activeDirectoryProvider = new firebase.auth.OAuthProvider('microsoft.com');
activeDirectoryProvider.addScope('openid')
activeDirectoryProvider.addScope('profile')
activeDirectoryProvider.setCustomParameters({
  prompt:'consent',
  tenant:'1bf885c4-8343-4949-8043-50449d9a6d34',
  code_challenge: 'YTFjNjI1OWYzMzA3MTI4ZDY2Njg5M2RkNmVjNDE5YmEyZGRhOGYyM2IzNjdmZWFhMTQ1ODg3NDcxY2Nl',
})

activeDirectoryProvider.addScope('openid');
activeDirectoryProvider.addScope('profile');
export const signInWithActiveDirectory = () => auth.signInWithPopup(activeDirectoryProvider).then((res) => {
  const credential = activeDirectoryProvider.credential(res);
  const accessToken = credential.accessToken;
});

export default firebase;
