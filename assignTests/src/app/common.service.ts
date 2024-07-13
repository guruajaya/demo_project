import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  subscribe(arg0: (data: any) => any) {
    throw new Error('Method not implemented.');
  }
  api="https://jsonplaceholder.typicode.com/todos";
  // api="http://localhost:3000/Employee";
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.api)
  }
  postData(user:any){
    return this.http.post(this.api, user)
  }
}
