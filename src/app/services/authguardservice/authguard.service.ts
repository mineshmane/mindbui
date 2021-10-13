import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor() { }
  gettoken(){  
    console.log("no clling");
    
    return !!localStorage.getItem("token");  
    } 
}
