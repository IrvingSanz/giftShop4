import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private toastr: ToastrService) {
    this.form = this.formBuilder.group({
      IdUser:0,
      Name: ['', [Validators.required, Validators.minLength(1)]],
      LastName: ['', [Validators.required, Validators.minLength(1)]],
      Email:['', [Validators.required, Validators.email]],
      Password:['', [Validators.required, Validators.minLength(6)]],
      BirthDay:['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  SaveUser(){
    const user: User = {
      Name: this.form.get('Name')?.value,
      LastName: this.form.get('LastName')?.value,
      Email: this.form.get('Email')?.value,
      Password: this.form.get('Password')?.value,
      BirthDay: this.form.get('BirthDay')?.value
    }
    this.userService.SaveUser(user).subscribe(data => {
      this.toastr.success('Successfull registration','user registred');
      console.log('seve successful');
      this.form.reset();
    })
  }

}
