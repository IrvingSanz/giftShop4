import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  userList : User[] = [];

  constructor( public userService: UserService) { }

  ngOnInit(): void {
    
  this.userList = this.userService.getUsers();
  console.log(this.userService.getUsers());
  }

}
