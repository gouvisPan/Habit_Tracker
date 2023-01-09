import { auth, googleProvider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserCredential,
  GoogleAuthProvider,
} from "firebase/auth";

import SignUpCredentials from "../model/interfaces/SignupCredentials";
import SignInCredentials from "../model/interfaces/SignInCredentials";

export const createUser = (
  credentials: SignUpCredentials
): Promise<UserCredential> => {
  const response = createUserWithEmailAndPassword(
    auth,
    credentials.email,
    credentials.password
  );

  return response;
};
export const signInGoogleUser = async () => {
  signInWithPopup(auth, googleProvider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;

    const response = { token, user };
    return response;
  });
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
