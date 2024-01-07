import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  constructor(private httpClient: HttpClient) {}
  display() {
    return this.httpClient.get('http://localhost:9002/expenses/addexpense');
  }

  // display(){
  //   return this.httpClient.get("http://localhost:4200/../assets/dummy.json")
  // }
}
