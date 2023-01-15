import { db, auth } from "../firebase";
import {
  doc,
  setDoc,
  collection,
  serverTimestamp,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { Habit } from "../model/Habit";

const colletionRef = collection(db, "habitLists");

export const setHabits = async (habits: Habit[]) => {
  const newFirestoreHabit = {
    id: auth.currentUser!.uid,
    habits,
    createdAt: serverTimestamp(),
    lastUpdate: serverTimestamp(),
  };
  try {
    const habitsRef = doc(colletionRef, newFirestoreHabit.id);
    await setDoc(habitsRef, newFirestoreHabit);
  } catch (error) {
    console.error(error);
  }
};

export const fetchHabits = async () => {
  try {
    const q = query(colletionRef, where("id", "==", auth.currentUser?.uid));
    const response = await getDocs(q);

    if (response.docs[0]) return response.docs[0].data();

    return undefined;
  } catch (error) {
    console.error(error);
  }
};
