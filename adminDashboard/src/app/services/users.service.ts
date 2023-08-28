import { Injectable } from '@angular/core';

type users = {
  id: number,
  first_name: string,
  last_name: string,
  status: "online" | "offline",

}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 


  constructor() { }

  getUser(): users[] {
    return this.members;
  }
  public members : users[] =[ 
  {
  id: 1,
  first_name: "james",
  last_name: "farooq",
  status: "online"
},
{
  id: 2,
  first_name: "ladzi",
  last_name: "ryan",
  status: "online"
}, 
{
  id: 3,
  first_name: "myGee",
  last_name: "kremlin",
  status: "online"
},
{
  id: 4,
  first_name: "mosh",
  last_name: "gosling",
  status: "online"
}];
}
