import { auth } from "./config";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function loginUser(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email + "@email.com", password);
    return true;
  } catch (error) {
    return false;
  }
}
