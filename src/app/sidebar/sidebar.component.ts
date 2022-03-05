import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  downP: boolean = true;
  downU: boolean = true;
  isLogin: boolean = false;
  dotTop: string = '19px';
  style: string = `color:#1a3965a1; top:${this.dotTop};`;
  href: any = '';
  constructor(
    private _DataService: DataService,
    private _AuthService: AuthService,
    private _Router: Router
  ) {
    this._DataService.href.subscribe(() => {
      this.href = _DataService.href.value;
    });
    this._AuthService.currentUser.subscribe(() => {
      if (this._AuthService.currentUser.getValue() != null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
    if (_DataService.addNewProduct.value) {
      this.dotTop = `54px`;
    }
  }
  addNewProduct(flag: boolean, index: number) {
    this._DataService.addNewProduct.next(flag);
    localStorage.setItem('add', `${flag}`);
    index = 19 + 35 * index;
    this.dotTop = `${index}px`;
    this.style = `color:#1A3965; top:${this.dotTop};`;
  }
  toggleP() {
    this.downP = !this.downP;
  }

  toggleU() {
    this.downU = !this.downU;
  }
  redirect(page: string) {
    this._Router.navigate([`/${page}`]);
  }

  ngOnInit(): void {}
}
