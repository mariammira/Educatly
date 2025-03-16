import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl= "https://dev.to/api/" 

  constructor(private httpClient: HttpClient) { }

  getArticles(){
   return  this.httpClient.get<any>(this.baseUrl+'articles')
    
  }
}
