import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean = false;
  showNotf:boolean = false;
  showChat:boolean = true;
  showNew:boolean = false;
  showChatBar:boolean = false;
  friends = [{cat:'A', profile : [{name:"Ahmed Adel",online:true},
                                  {name:"Ahmed Rami",online:false},]},
             {cat:'B', profile : [{name:"Basem Adel",online:true},
                                  {name:"Basma Rami",online:false},]},
]
  notification = [{ Title:"Aqar Finder", Date:"24 mar 2021", Draft :true },
                  { Title:"Aqar Finder", Date:"20 april 2021", Draft :false },
                  { Title:"Aqar Finder", Date:"10 june 2021", Draft :true },
                  { Title:"Aqar Finder", Date:"3 septemper 2020", Draft :false }];
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
  new(bool:boolean){
    this.showNew = bool;
  }
  chatBar(bool:boolean){
    this.showChatBar = bool;
  }
  chat(bool:boolean){
    this.showChat = bool;
  }
}
