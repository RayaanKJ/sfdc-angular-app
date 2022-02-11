import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

labelName='Employee Name :';
labelName2='Password :';
UserName:string='';


  getUserName = (event: any) => {
    console.log(event.target.value);
    this.UserName = event.target.value;  
  }
  
  ngOnInit(): void {
  }

}
