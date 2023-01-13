import { DocumentData } from "firebase/firestore";
import User from "../model/User";

export const normalizeUser = (apiUser: DocumentData | undefined) => {
  let nUser: User | undefined;
 
  apiUser
    ? (nUser = {
        uid: apiUser.uid,
        name: apiUser.name,
        email: apiUser.email,
        motivation: apiUser.motivation,
        avatar: apiUser.avatar,
      })
    : (nUser = undefined);

  return nUser;
};
