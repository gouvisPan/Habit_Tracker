import { db, auth } from "../firebase";

import {
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  collection,
  serverTimestamp,
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

export const fetchUser = async () => {
  try {
    const userRef = doc(colletionRef, auth.currentUser?.uid);
    const response = await getDoc(userRef);

    return response.data();
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async () => {
  try {
    await deleteDoc(doc(db, "users", auth.currentUser!.uid));
  } catch (error) {
    console.error(error);
  }
};
