import { initializeApp } from "firebase/app";

import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from "firebase/firestore";
import { IResume } from "../../types/interfaces";

const firebaseConfig = {
  apiKey: "AIzaSyDinG-NirNegjyCEHqkv87wSglXa1DEtfo",
  authDomain: "resume-buildercv.firebaseapp.com",
  projectId: "resume-buildercv",
  storageBucket: "resume-buildercv.appspot.com",
  messagingSenderId: "104751925521",
  appId: "1:104751925521:web:07945513493fd19b98e4b0",
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>
//     signInWithRedirect(auth, googleProvider)
export const db = getFirestore();

export const createUserDoc = async (userAuth: any, additionalInfo = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "user", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (er: any) {
      console.log("error creating data", er.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  const user = await signInWithEmailAndPassword(auth, email, password);
  console.log(user, "user");
  return user;
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: any) =>
  onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async (
  collectionKey: any,
  objectsToAdd: any
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object: any) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};


export const getCategoriesAndDoc = async(info: string)=>{
const collectionRef = collection(db, info)
const q=query(collectionRef);
const querySnapshot = await getDocs(q)

type DocumentData = {
  title: string;
  info: string;
};
 
//поставила заглушку acc 
const infoMap: IResume= querySnapshot.docs
.reduce((acc :any, doc)=>{
  const {title, info}= doc.data() as DocumentData
  acc[title.toLowerCase()]  = info;
  return acc;
},{})
console.log(infoMap, "infoMap")
return infoMap
}