import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { environment } from '../../../environments/environment'
import { HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  baseUrl = environment.BaseUrl
  token: any
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')

  }

  registration(data) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authrization': ''

      })
    }
    return this.httpService.postService(this.baseUrl + 'manager/signup', data, true, options)

  }
  login(data) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': ''

      })
    }
    return this.httpService.postService(this.baseUrl + 'manager/login', data, false, options)

  }

  getUserList() {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token


      })
    }
    return this.httpService.getService(this.baseUrl + 'emp/getEmpList', true, options)


  }

  updateEmployee(data) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token

      })
    }
    return this.httpService.putService(this.baseUrl + 'emp/update', data, true, options)

  }
  addEmployee(data) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token

      })
    }
    return this.httpService.postService(this.baseUrl + 'emp/addemp', data, true, options)

  }

  delete(data) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token

      })
    }
    return this.httpService.deleteService(this.baseUrl + 'emp/delete/' + data._id, true, options)


  }
  PaymentsService(data){
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': this.token

      })
    }
    return this.httpService.postService(this.baseUrl + 'emp/payment', data, true, options)

  }

}
