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
      Name: ['', [Validators.required, Validators.minLength(1)]],
      LastName: ['', [Validators.required, Validators.minLength(1)]],
      Email:['', [Validators.required, Validators.email]],
      Password:['', [Validators.required, Validators.minLength(6)]],
      BirthDay:['', [Validators.required]]
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
      console.log(data);
      this.user = data;
      this.form.patchValue({
        Name: this.user.Name,
        LastName: this.user.LastName,
        Email: this.user.Email,
        Password: this.user.Password,
        BirthDay: this.user.BirthDay        
      });
      this.idUser = this.user.IdUser;
    });
  }
  ngOnDestroy(){
    this.suscription.unsubscribe();      
  }
  SaveUser(){
    if(this.idUser === 0){
      this.agregar();
    }else{
      this.editar();
    }

  }
  agregar(){
    const user: User = {
      Name: this.form.get('Name')?.value,
      LastName: this.form.get('LastName')?.value,
      Email: this.form.get('Email')?.value,
      Password: this.form.get('Password')?.value,
      BirthDay: this.form.get('BirthDay')?.value
    };
    this.userService.SaveUser(user).subscribe(data => {
      this.toastr.success('Successfull registration','user registred');
      console.log('seve successful');
      this.form.reset();
    });
  }

  editar(){
    const user: User = {
      IdUser: this.user.IdUser,
      Name: this.form.get('Name')?.value,
      LastName: this.form.get('LastName')?.value,
      Email: this.form.get('Email')?.value,
      Password: this.form.get('Password')?.value,
      BirthDay: this.form.get('BirthDay')?.value
    };
    this.userService.actualizarUsuario(this.idUser, user).subscribe(data =>{
      this.toastr.info('actualizado registration','user was actualizada');
      console.log('seve successful');
      this.form.reset();
      this.idUser = 0;
    });
  }

}
