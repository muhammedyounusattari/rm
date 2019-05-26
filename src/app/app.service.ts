import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public http:HttpClient) { }

  loadData(){
    var data = this.http.get('https://reqres.in/api/users?page=2').toPromise().then(data=>{
      debugger;
      return data;
    })
    //.subscribe(data=>{

    //   console.log(data);
    // });
    // return data;
  }
}
