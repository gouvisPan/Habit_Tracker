import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Habit } from "../model/Habit";

export const createHabtis = async (hobies: Habit[]) => {
  const response = await setDoc(doc(db, "habits"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
  });
};
