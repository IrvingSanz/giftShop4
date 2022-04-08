import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

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
