import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  
  @Input() usercompleted: any;

  constructor() { }

  ngOnInit(): void {
  }

}
