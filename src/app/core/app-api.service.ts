import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Emails } from '../interfaces/emails';
import {  Products } from '../interfaces/products';
import { Username } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AppApiService {
  

  constructor(
    private http: HttpClient,
  ) { 
   
  }

  getAllProducts(): Observable<Products[]>{
    return this.http.get<Products[]>('http://localhost:8080/api/produto')
  }
  postProduct(product:Products){
    return this.http.post<Products>('http://localhost:8080/api/produto', product).pipe(take(1))
  }
  getAllEmails(): Observable<Emails[]>{

    return this.http.get<Emails[]>('http://localhost:7070/v1/enviado', {headers: { 'username': 'aluno', 'password': 'fiapsecurity'}})
  }

  logar(username: string, password: string){
    return this.http.post<Emails[]>('http://localhost:7070/v1/enviado', {username, password})
    .pipe(take(1))
  }
  }
