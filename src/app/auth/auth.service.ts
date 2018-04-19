import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private _token: string;

  constructor(private _router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this._router.navigate(['/']);
          firebase.auth().currentUser.getToken().then((token: string) => this._token = token);
        }
      )
      .catch(error => console.log(error));
  }

  logout() {
    firebase.auth().signOut();
    this._token = null;
  }

  getToken() {
    firebase.auth().currentUser.getToken().then((token: string) => this._token = token);
    return this._token;
  }

  isAuthenticated() {
    return this._token != null;
  }
}
