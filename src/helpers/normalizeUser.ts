import { DocumentData } from "firebase/firestore";
import User from "../model/User";

export const normalizeUser = (apiUser: DocumentData | undefined) => {
  let nUser: User;

  apiUser
    ? (nUser = {
        uid: apiUser.uid,
        name: apiUser.name,
        email: apiUser.email,
        motivation: apiUser.motivation,
        avatar: apiUser.avatar,
      })
    : (nUser = {
        uid: "",
        name: "",
        email: "",
        motivation: "",
        avatar: 1,
      });

  return nUser;
};
