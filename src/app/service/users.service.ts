import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAllUsers(){
    return  [
      {id: 100, name:'Tom', salary: 45000, dob: new Date('09/11/1987')},
      {id: 101, name:'Harry', salary: 50000, dob: new Date('02/25/1993')},
      {id: 102, name:'Micheal', salary: 48000, dob: new Date('11/16/1991')},
      {id: 103, name:'Lucas', salary: 60000, dob: new Date('02/03/1993')}
    ]
  }

}
