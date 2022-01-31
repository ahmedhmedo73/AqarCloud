import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean = false;
  showNotf:boolean = true;
  notification = {
       Title:"Aqar Finder",
       Date:"24 mar 2021",
       Draft :true
  }
  constructor(private _AuthService:AuthService) {
    this._AuthService.currentUser.subscribe(()=>{
      if (this._AuthService.currentUser.getValue()!=null) {
        this.isLogin =true;
      }else{
        this.isLogin =false;
      }
    });
   }
  isLogout(){
    this._AuthService.logout();
  }
  ngOnInit(): void {
  }

  notfications(bool:boolean){
    this.showNotf = bool;
  }
}
