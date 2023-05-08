import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from ''

const url= environment.api
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
}
