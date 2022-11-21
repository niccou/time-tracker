import { auth } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";

const authentication = auth;

export const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(authentication, email, password);
}