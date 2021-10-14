import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ManagerService } from '../../services/managerService/manager.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  employeeDetails: FormGroup
  maxDate = new Date();

  constructor(private formBuilder: FormBuilder, private service: ManagerService,private snackbar:MatSnackBar,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
  }

  onClose(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.employeeDetails = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],

      city: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      empId: ['', [Validators.required]]

    });

    if (this.data != null) {
      this.employeeDetails.patchValue({
        firstName: this.data.firstName,
        lastName: this.data.lastName,
        email: this.data.email,
        dob: new Date(this.data.dob),
        phone: this.data.phone,
        city: this.data.city,
        empId: this.data.empId,


        managerId: this.data.managerId,
        _id: this.data._id

      })
      console.log(this.employeeDetails);


    }

  }


  public hasError = (controlName: string, errorName: string) => {
    return this.employeeDetails.controls[controlName].hasError(errorName);
  }


  addEmployee(param) {
    console.log(this.employeeDetails.value);
  


    if (this.data != null) {
      let reqPayload = {
        firstName: this.employeeDetails.value.firstName,
        lastName: this.employeeDetails.value.lastName,
        email: this.employeeDetails.value.email,
        dob: new Date(this.employeeDetails.value.dob),
        phone: this.employeeDetails.value.phone,
        city: this.employeeDetails.value.city,
        empId: this.employeeDetails.value.empId,
  
  
        managerId: this.data.managerId,
        _id: this.data._id
      }
      console.log(reqPayload);
      this.service.updateEmployee(reqPayload).subscribe((res: any) => {
        console.log(res);
        this.snackbar.open("Employee updated successfully", ";", {
          duration: 2000,
        });
        this.dialogRef.close();

      }, err => {
        console.log(err);

      })
    } else {

      let reqPayload = {
        firstName: this.employeeDetails.value.firstName,
        lastName: this.employeeDetails.value.lastName,
        email: this.employeeDetails.value.email,
        dob: new Date(this.employeeDetails.value.dob),
        phone: this.employeeDetails.value.phone,
        city: this.employeeDetails.value.city,
        empId: this.employeeDetails.value.empId,
      }

      this.service.addEmployee(reqPayload).subscribe((response: any) => {
        console.log(response);
        this.snackbar.open("Employee updated successfully", "", {
          duration: 2000,
        });
        this.dialogRef.close(response);

      }, err => {
        console.log(err);
        this.snackbar.open("failed", "", {
          duration: 2000,
        });

      })

    }




  }


}
