import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isLogin:boolean=false;
  constructor(private _AuthService:AuthService) {
    this._AuthService.currentUser.subscribe(()=>{
      if (this._AuthService.currentUser.getValue()!=null) {
        this.isLogin =true;
      }else{
        this.isLogin =false;
      }
    });
   }

  ngOnInit(): void {
  }

}
