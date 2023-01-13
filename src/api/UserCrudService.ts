import { db } from "../firebase";
import {
  doc,
  onSnapshot,
  updateDoc,
  setDoc,
  getDoc,
  deleteDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import User from "../model/User";

const colletionRef = collection(db, "users");

export const createUser = async (user: User) => {
  const newFirestoreUser = {
    ...user,
    createdAt: serverTimestamp(),
    lastUpdate: serverTimestamp(),
  };
  try {
    const userRef = doc(colletionRef, newFirestoreUser.uid);
    await setDoc(userRef, newFirestoreUser);
    const response = await getDoc(userRef);

    return response.data();
  } catch (error) {
    console.error(error);
  }
};

export const fetchUser = async (uid: string) => {
  try {
    const userRef = doc(colletionRef, uid);
    const response = await getDoc(userRef);

    return response.data();
  } catch (error) {
    console.error(error);
  }
};
