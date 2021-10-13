import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ManagerService } from '../../services/managerService/manager.service'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: ManagerService,
    private snackBar: MatSnackBar) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],

      address: ['', [Validators.required]],
      company: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    });

  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  ngOnInit() {
  }

  registerUser() {
    console.log(this.registerForm.value);
    if (this.registerForm.invalid) {
      return;
    } else {
      this.service.registration(this.registerForm.value).subscribe((res) => {
        console.log(res);

      },err =>{
        console.log(err);
        
      })
    }

  }

}
