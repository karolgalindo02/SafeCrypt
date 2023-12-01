import { Injectable } from '@angular/core';
import { Auth, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth,) { }

  register({ email, password}: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password}: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  
  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  loginWithGithub() {
    return signInWithPopup(this.auth, new GithubAuthProvider());
  }

  logout() {
    return this.auth.signOut();
  }

  signOut() {
    return signOut(this.auth);
  }
}