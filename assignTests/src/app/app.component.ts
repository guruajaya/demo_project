import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonService } from './common.service';
import { MatDialog } from '@angular/material/dialog';
import { RegistraionComponent } from './registraion/registraion.component';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  
  title = 'assignTests';
  userData:any;
  activeData:any;
  user:any;
  users = [
    {
      qty: 10,
  
      price: 100,
  
      success: true,
    },
  
    {
      qty: 20,
  
      price: 200,
  
      success: false,
    },
  
    {
      qty: 30,
  
      price: 300,
  
      success: false,
    },
  
    {
      qty: 40,
  
      price: 400,
  
      success: true,
    },
  ];

  userForm=new FormGroup({
    title:new FormControl('')
  })

  isSelected:string="option1";
  selectedValue: any;

  constructor(private commonService:CommonService, public dialog: MatDialog){} 
  

  ngOnInit() {
    this.commonService.getData().subscribe((data)=>{    
      this.userData=data
      //this.userData=
    })
    this.onSubmit()

    // let res=this.users.reduce((a:number, b:number)=>{
    //   if(a.success==true){
    //     return a.price + b.price;
    //   }
    // })
    // console.log(res)
    
  }
  selectComponents(event:any){
    this.isSelected=event.value;
    console.log(event.target.value)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegistraionComponent, {
      data:{}
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });

}
onSubmit(){
  // this.commonService.postData(this.userForm.value).subscribe((data)=>{
  //   JSON.stringify(this.userData=data);
  //   // console.log(data)    
  // })
}

ngOnChanges(changes: SimpleChanges): void {

  
}


}
