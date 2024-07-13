import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  @Input() useractive:any;
  userActive:any;
  constructor() { }

  ngOnInit(): void {    
    
    
     }
     
     
  }
  
  
 


