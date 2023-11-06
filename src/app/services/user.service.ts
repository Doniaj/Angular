import { Injectable } from '@angular/core';
import { User } from '../core/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl=environment.BaseUrl+"users/";
  List :User[]=[
      {
        id: 1,
        firstName: 'Mila',
        lastName: ' Kunis',
        birthDate: '1999-06-30',
        accountCategory: 'Admin',
        email: 'mila@kunis.com',
        password: 'test',
        picture: 'https://bootdey.com/img/Content/avatar/avatar3.png',
        profession: 'Software Engineer',
      },
      {
        id: 2,
        firstName: 'George',
        lastName: 'Clooney',
        birthDate: '1999-06-30',
        accountCategory: 'Customer',
        email: 'marlon@brando.com',
        password: 'test',
        picture: 'https://bootdey.com/img/Content/avatar/avatar2.png',
        profession: 'Software Engineer',
      },
      {
        id: 3,
        firstName: 'George',
        lastName: 'Clooney',
        birthDate: '1999-06-30',
        accountCategory: 'Customer',
        email: 'marlon@brando.com',
        password: 'test',
        picture: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        profession: 'Software Engineer',
      },
      {
        id: 4,
        firstName: 'Ryan',
        lastName: 'Gossling',
        birthDate: '1999-06-30',
        accountCategory: 'Golden',
        email: 'Ryan@nicholson.com',
        password: 'test',
        picture: 'https://bootdey.com/img/Content/avatar/avatar4.png',
        profession: 'Software Engineer',
      },
      {
        id: 5,
        firstName: 'Robert',
        lastName: 'Downey',
        birthDate: '1999-06-30',
        accountCategory: 'Blocked Account',
        email: 'robert@nicholson.com',
        password: 'test',
        picture: 'https://bootdey.com/img/Content/avatar/avatar5.png',
        profession: 'Software Engineer',
      },
      ]
  constructor(private _http:HttpClient) { }
  getAllUsers(){
    return new Observable ((o)=> {
     o.next(this.List);
      o.error('error');
      o.complete();
  })
}
  fetchNbInList(list: any, attribute:string, attributeVal: string){
    return list.filter((e: any)=>e[attribute]==attributeVal).length;
  }
  fetchAllUsers (){
    return this._http.get(this.apiUrl);
  }
    addUser(body:User){
      return this._http.post(this.apiUrl,body); 
    }
    updateUser(id:number,body :User){
      return this._http.put(this.apiUrl+id,body);
    }
    deleteUser(id:number){
      return this._http.delete(this.apiUrl+id);
    }
  }

