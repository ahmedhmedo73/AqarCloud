import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  str: string = 'users';
  constructor(public _DataService: DataService) {
    _DataService.href.next(this.str);
  }


  ngOnInit(): void {}
}
