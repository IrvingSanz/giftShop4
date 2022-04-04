import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  userList :any;
  // userList : User[] = [];

  constructor( public userService: UserService,
               public toast: ToastrService) { }


  ngOnInit(): void {
  this.userService.getUsers();
  console.log(this.userService.getUsers());
  }
  deleteUserMethod(IdUser:bigint){
    if(confirm('Are you sure you wanna delete this user?')){
      this.userService.deleteUser(IdUser).subscribe(data =>{
        this.toast.warning('deleted register','The user was deleted');
        this.userService.getUsers();
      });
    }
  }
  editUserMethod(user: User){
    this.userService.updateUser(user);
  }
}
