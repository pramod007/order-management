import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  public userDetails: any = {}

  public dummnyUser: any = {
    username: 'hello',
    password: '12345'
  }

  getUser() {
    let user:any = localStorage.getItem('user')
    user = JSON.parse(user)
    console.log(user)
    if (user) {
      this.userDetails = user
      return this.userDetails
    } else {
      return this.userDetails
    }
  }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  removeUser() {
    localStorage.removeItem('user')
  }
}
