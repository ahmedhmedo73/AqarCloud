import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
AuthService
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _AuthService : AuthService , private _Router: Router) { }
  error:string ="";
  loginForm = new FormGroup ({
    email:new FormControl(null, [Validators.required,Validators.email]),
    password:new FormControl(null, [Validators.required,Validators.pattern('^[A-Z][a-z0-9]{3,8}')])
  })

  ngOnInit(): void {
  }

  submitLoginForm(loginform:FormGroup){
    this._AuthService.login(loginform.value).subscribe((response)=>{
      if (response.message == "success") {
        localStorage.setItem('userToken', response.token);
        this._AuthService.saveCurrentUser();
        this._AuthService.isLogin=true;
        this._Router.navigate(['/home']);
      }else{
        this.error = response.message;
      }
    }) 
  }
}
