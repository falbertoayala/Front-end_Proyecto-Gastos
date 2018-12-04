import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usercreate } from './model/usercreate';

@Injectable({
  providedIn: 'root'
})
export class UsercreateService {

  constructor(public http : HttpClient) {

    this.http = http;
   }

   createuser(user : Usercreate){
     return this.http.post(`http://localhost:8090/v1/expensecontrol/users/create`, user)
   }
}
