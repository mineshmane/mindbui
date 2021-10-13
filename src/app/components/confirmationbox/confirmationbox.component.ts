import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmationbox',
  templateUrl: './confirmationbox.component.html',
  styleUrls: ['./confirmationbox.component.scss']
})
export class ConfirmationboxComponent implements OnInit {

  constructor( 
    public dialogRef: MatDialogRef<ConfirmationboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
  }

  ngOnInit() {
  }

  delete(yes){
    this.dialogRef.close(yes);

  }
  close(vl){
    this.dialogRef.close(vl)

  }

}
