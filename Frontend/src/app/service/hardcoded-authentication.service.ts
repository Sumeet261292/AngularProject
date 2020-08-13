import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password){
    if(username === 'ab@yopmail.com' && password ==='Password123'){
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
      return false;    
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user===null);
  }

  loggedOut() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
