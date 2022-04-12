import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  showForm: Boolean = true;
  StatusButtom: string = 'Edit';

  formVisibility(){
    if(this.showForm){
      this.showForm= false;
      this.StatusButtom='Edit';
    }else{
      this.showForm= true;
      this.StatusButtom='Save';
    }
  }
}
