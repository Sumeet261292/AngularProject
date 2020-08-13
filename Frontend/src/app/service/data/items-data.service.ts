import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from 'src/app/showcase/showcase.component';

@Injectable({
  providedIn: 'root'
})
export class ItemsDataService {

  constructor(private http:HttpClient) { }

  retrieveAllItems(){
    return this.http.get<Item[]>(`http://localhost:8080/showcase`);   
  }
}
