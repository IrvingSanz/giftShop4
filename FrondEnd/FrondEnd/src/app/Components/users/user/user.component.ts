import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  form: FormGroup;
  suscription : Subscription;
  user: User ;
  idUser = 0;
  constructor(private formBuilder: FormBuilder, 
              private userService: UserService, 
              private toastr: ToastrService) {

    this.form = this.formBuilder.group({
      idUser:0,
      name: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]],
      birthDay:['', [Validators.required]]
    })
   }

  ngOnInit(): void {
    // this.suscription =  this.userService.getUser$().subscribe(data =>{
    //   console.log(data);
    //   this.user = data;
    //   this.form.patchValue({
    //     Name: this.user.Name,
    //     LastName: this.user.LastName,
    //     Email: this.user.Email,
    //     Password: this.user.Password,
    //     BirthDay: this.user.BirthDay        
    //   });
    // });
    this.suscription = this.userService.obtenerUsuarios$().subscribe(data =>{
      this.user = data;
      console.log("", this.user.name);
      this.form.controls['name'].setValue(data['name']);
      this.form.patchValue({
        name: this.user.name,
        lastName: this.user.lastName,
        email: this.user.email,
        password: this.user.password,
        birthDay: this.user.birthDay        
      });
      this.idUser = this.user.idUser;
    });
  }
  ngOnDestroy(){
    this.suscription.unsubscribe();      
  }
  // SaveUser(){
  //   if(this.idUser = 0){
  //     this.agregar();
  //   }else{
  //     this.editar();
  //   }
  // }
  SaveUser(){
    const user: User = {
      name: this.form.get('name')?.value,
      lastName: this.form.get('lastName')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
      birthDay: this.form.get('birthDay')?.value,
      birthDayString: this.form.get('birthDayString')?.value
    }
    this.userService.SaveUser(user).subscribe(data => {
      this.toastr.success('Successfull registration','user registred');
      console.log('seve successful');
      // /this.form.reset();
      this.userService.getUsers();

    })
  }

  agregar(){
    const user: User = {
      name: this.form.get('name')?.value,
      lastName: this.form.get('lastName')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
      birthDay: this.form.get('birthDay')?.value,
      birthDayString: this.form.get('birthDayString')?.value
    };
    this.userService.SaveUser(user).subscribe(data => {
      this.toastr.success('Successfull registration','user registred');
      console.log('seved successful');
      this.form.reset();
    });
  }

  editar(){
    const user: User = {
      idUser: this.user.idUser,
      name: this.form.get('name')?.value,
      lastName: this.form.get('lastName')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
      birthDay: this.form.get('birthDay')?.value,
      birthDayString: this.form.get('birthDayString')?.value
    };
    this.userService.actualizarUsuario(this.idUser, user).subscribe(data =>{
      this.toastr.info('actualizado registration','user was actualizada');
      console.log('seve successful');
      this.form.reset();
      this.idUser = 0;
    });
  }

}
