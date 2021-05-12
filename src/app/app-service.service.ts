import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http : HttpClient) { }

  getPic(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }

  listUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

}
