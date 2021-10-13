import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { ManagerService } from '../../services/managerService/manager.service'
import { ConfirmationboxComponent } from '../confirmationbox/confirmationbox.component';
@Component({
  selector: 'app-displayemp',
  templateUrl: './displayemp.component.html',
  styleUrls: ['./displayemp.component.scss']
})
export class DisplayempComponent implements OnInit {
  @Input() EmployeeArray;
  @Output() refreshEvent = new EventEmitter<any>();
  constructor(public dialog: MatDialog, private service: ManagerService) { }

  ngOnInit() {
  }



  update(emp): void {
    // const dialogRef = this.dialog.open(UpdateComponent, {
    //   width: '250px',
    //   data: {}
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });


    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.panelClass = 'empdialog';
    dialogConfig.data = emp
    const dialogRef = this.dialog.open(UpdateComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(response => {
      // if (response != null)
        // this.ngOnInit();
     
        this.refreshEvent.emit('refresh')
    });
  }


  delete(item) {



    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.panelClass = 'empdialog';
    dialogConfig.data = " Do you want to delete the employee ?"
    const dialogRef = this.dialog.open(ConfirmationboxComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(response => {
      console.log(response);
      
      if (response != null) {

        console.log(item);
        this.service.delete(item).subscribe((response) => {
          console.log(response);
          this.refreshEvent.emit('refresh')

    
        }, err => {
          console.log(err);
    
        })

      } else {

        console.log("else printed");
        

      }
    });


 
  }

}
