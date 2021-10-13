import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../services/managerService/manager.service';

@Component({
  selector: 'app-getemployee',
  templateUrl: './getemployee.component.html',
  styleUrls: ['./getemployee.component.scss']
})
export class GetemployeeComponent implements OnInit {

  constructor(private service: ManagerService) { }
EmployeeList=[]
  ngOnInit() {
    this.getEmployeeList()
  }

  getEmployeeList() {

    this.service.getUserList().subscribe((res: any) => {
      console.log(res);
      this.EmployeeList=res.data
    }, (err: any) => {
      console.log(err);

    })
  }
  dataRecieved(cl){
    console.log(cl);
    
    this.getEmployeeList()
  }

}
