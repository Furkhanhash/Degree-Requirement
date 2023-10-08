import { AddcoursesComponent } from './../addcourses/addcourses.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  
 constructor (private router:Router){}
 username:any='';
 password:any='';
 login(){
 if (this.username === 'ppant@gmu.edu' && this.password === 'abcd')
 {
this.router.navigate(['./addcourses']);
 }
 else{
  alert('Invalid credentials')
 }

}
}

