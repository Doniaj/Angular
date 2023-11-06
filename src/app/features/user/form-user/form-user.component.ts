import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {
  user:User=new User();
  constructor (private userService:UserService, private router:Router){}
  add(f:NgForm){
    console.log(f);
    console.log(this.user);
    this.user.accountCategory="Customer";
    this.userService.addUser(this.user).subscribe({
      next:() => this.router.navigate(['user/listUsers']),
    });
  }

}
