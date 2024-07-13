import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.css']
})
export class RegistraionComponent implements OnInit {
  selectedValue:any;
  selectedCar:any;


  constructor(
    public dialogRef: MatDialogRef<RegistraionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
  
  completed = [
    {value: 'true', viewValue: 'true'},
    {value: 'false', viewValue: 'false'},
    
  ];

}
