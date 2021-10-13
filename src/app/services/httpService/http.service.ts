import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postService(url = '', payload: any = null, token: boolean = false, httpAuthoptions) {
    console.log(payload);

    return this.http.post(url, payload, token && httpAuthoptions)

  }
  getService(url = '',  token: boolean = false, httpAuthoptions) {
 

    return this.http.get(url, token && httpAuthoptions)

  }

  putService(url = '', payload: any = null, token: boolean = false, httpAuthoptions) {
    console.log(payload);

    return this.http.put(url, payload, token && httpAuthoptions)

  }

  deleteService(url = '',  token: boolean = false, httpAuthoptions) {

    return this.http.delete(url, token && httpAuthoptions)

  }
}
