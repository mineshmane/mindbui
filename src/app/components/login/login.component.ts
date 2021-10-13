import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ManagerService } from '../../services/managerService/manager.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private router: Router, private service: ManagerService,
    private snackBar: MatSnackBar) {
  }


  ngOnInit() {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }
  login() {
    if (this.loginForm.invalid) {
      return
    } else {
      this.service.login(this.loginForm.value).subscribe((res:any) => {
        console.log(res);
        localStorage.setItem('token',res.token)

        this.router.navigateByUrl('/dashboard')

      }, err => {
        console.log(err);

      })



    }
  }

}
