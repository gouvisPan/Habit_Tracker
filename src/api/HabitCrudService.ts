import { db } from "../firebase";
import FSHabits from "../model/interfaces/FSHabits";
import {
  doc,
  onSnapshot,
  updateDoc,
  setDoc,
  deleteDoc,
  collection,
  serverTimestamp,
  getDoc,
  getDocs,
  where,
  orderBy,
  limit,
  query,
} from "firebase/firestore";

const colletionRef = collection(db, "habitLists");

export const createHabits = async (habits: FSHabits) => {
  const newFirestoreHabit = {
    id: habits.uid,
    habits: habits.habits,
    createdAt: serverTimestamp(),
    lastUpdate: serverTimestamp(),
  };

  try {
    const habitsRef = doc(colletionRef, habits.uid);
    await setDoc(habitsRef, newFirestoreHabit);
  } catch (error) {
    console.error(error);
  }
};

export const fetchHabits = async (uid: string) => {
  try {
    const q = query(colletionRef, where("id", "==", uid));
    const response = await getDocs(q);

    if (response.docs[0]) return response.docs[0].data();

    return undefined;
  } catch (error) {
    console.error(error);
  }
};
