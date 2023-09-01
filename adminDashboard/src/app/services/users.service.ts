import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError} from 'rxjs';

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
 
//TODO: implement a filtering option... filter by offline users or online users..


public fakeDataUrl : string =  '/assets/FakeData.json';

  constructor( private _http: HttpClient) { }

  getUsers() {
   return this._http.get(this.fakeDataUrl).pipe(catchError(this.errorHandler));
  }
 errorHandler(error : HttpErrorResponse){
   console.log("something went wrong!");
  return throwError( () => new Error(error.message));
 }
}

/*
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
}]; */
