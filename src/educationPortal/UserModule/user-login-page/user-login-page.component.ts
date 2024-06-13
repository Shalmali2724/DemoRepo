import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrl: './user-login-page.component.css'
})
export class UserLoginPageComponent {
 userForm:FormGroup;
 private fb=new FormBuilder();
 constructor(private router: Router){
  this.userForm=this.fb.group({
 emailId:['',[Validators.required,Validators.email ]],
 password:['',[Validators.required,Validators.minLength(3)]]

  })


 }

 onSubmit(){

axios.get(`http://localhost:9092/user/login?emailId=${this.userForm.value.emailId}&password=${this.userForm.value.password}`).then(response=>{
  sessionStorage.setItem("userId",response.data.id);
  sessionStorage.setItem("emailId",this.userForm.value.emailId);
  alert("Wlcome !! Login Succesfully !!")
  this.router.navigate(['user/home']);
}).catch(error=>{
  alert("Login Fail !! Try Again "+error);
});

 }


}
