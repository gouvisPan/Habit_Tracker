import { UserCredential } from "firebase/auth";
import User from "../model/User";

export const normalizeAuthUser = (apiUser: UserCredential) => {
  const nUser: User = {
    uid: apiUser.user.uid,
    name: apiUser.user.displayName || "",
    email: apiUser.user.email || "X",
    motivation: "",
    avatar: 1,
  };

  return nUser;
};
