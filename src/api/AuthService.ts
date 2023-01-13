import { auth,  } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
  deleteUser,
  updatePassword,
  reauthenticateWithCredential
} from "firebase/auth";

import SignUpCredentials from "../model/interfaces/SignupCredentials";
import SignInCredentials from "../model/interfaces/SignInCredentials";
import { ChangeCredentials } from "../model/interfaces/ChangeCredentials";

export const signUpUser = (
  credentials: SignUpCredentials
): Promise<UserCredential> => {
  const response = createUserWithEmailAndPassword(
    auth,
    credentials.email,
    credentials.password
  );

  return response;
};

export const signInUser = (
  credentials: SignInCredentials
): Promise<UserCredential> => {
  const response = signInWithEmailAndPassword(
    auth,
    credentials.email,
    credentials.password
  );

  return response;
};

export const signOutUser = (): Promise<void> => {
  const response = signOut(auth);
  return response;
};


export const deleteUserAccount = async () =>{;
const user = auth.currentUser;
await deleteUser(user!)
}

