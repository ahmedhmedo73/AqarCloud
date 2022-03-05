import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  href = new BehaviorSubject('');
  addNewProduct = new BehaviorSubject(false);
  i: any = 200;
  supAdmin:any = [
    {name:"Name Surname"},
    {name:"Name Surname"},
    {name:"Name Surname"},
    {name:"Name Surname"},
    {name:"Name Surname"},
    {name:"Name Surname"},
    {name:"Name Surname"},
    {name:"Name Surname"},
  ];
  data: any = [
    {
      month: 'Jan',
      line1: `--start:calc(${this.i}/1000); --size:0.5;`,
      line2: '--start:0; --size:0.2;',
    },
    {
      month: 'Feb',
      line1: '--start:0.5; --size:0.7;',
      line2: '--start:0.2; --size:0.4;',
    },
    {
      month: 'Mar',
      line1: '--start:0.7; --size:0.5;',
      line2: '--start:0.4; --size:0.2;',
    },
    {
      month: 'Apr',
      line1: '--start:0.5; --size:0.3;',
      line2: '--start:0.2; --size:0.4;',
    },
    {
      month: 'May',
      line1: '--start:0.3; --size:0.5;',
      line2: '--start:0.4; --size:0.6;',
    },
    {
      month: 'Jun',
      line1: '--start:0.5; --size:0.5;',
      line2: '--start:0.6; --size:0.8;',
    },
    {
      month: 'Jul',
      line1: '--start:0.5; --size:0.5;',
      line2: '--start:0.8; --size:0.6;',
    },
    {
      month: 'Aug',
      line1: '--start:0.5; --size:0.2;',
      line2: '--start:0.6; --size:0.8;',
    },
    {
      month: 'Sep',
      line1: '--start:0.2; --size:0.5;',
      line2: '--start:0.8; --size:0.8;',
    },
    {
      month: 'Oct',
      line1: '--start:0.5; --size:0.7;',
      line2: '--start:0.8; --size:0.5;',
    },
  ];
  data2: any = [
    {
      month: 'Nov',
      line1: '--start:0.7; --size:0.9;',
      line2: '--start:0.5; --size:0.9;',
    },
  ];
  dataBarchartS: any = [
    { title: 'Aqar Finder 3', heightF: '50%', heightS: '20%' },
    { title: 'Aqar Cloud', heightF: '40%', heightS: '90%' },
    { title: 'Aqar Finder', heightF: '90%', heightS: '60%' },
  ];
  revenue: any = [
    { month: 'Jan', progress: '60%' },
    { month: 'Fab', progress: '70%' },
    { month: 'Mar', progress: '90%' },
    { month: 'Apr', progress: '20%' },
    { month: 'May', progress: '30%' },
    { month: 'Jun', progress: '50%' },
    { month: 'Jul', progress: '90%' },
    { month: 'Aug', progress: '10%' },
    { month: 'Sep', progress: '40%' },
  ];
  dataBarchart: any = [
    { title: 'Jan', heightF: '90%', heightS: '60%' },
    { title: 'Feb', heightF: '40%', heightS: '90%' },
    { title: 'Mar', heightF: '50%', heightS: '30%' },
    { title: 'Apr', heightF: '90%', heightS: '60%' },
    { title: 'May', heightF: '40%', heightS: '90%' },
    { title: 'Jun', heightF: '50%', heightS: '30%' },
    { title: 'Jul', heightF: '30%', heightS: '50%' },
    { title: 'Aug', heightF: '60%', heightS: '30%' },
    { title: 'Sep', heightF: '60%', heightS: '90%' },
    { title: 'Oct', heightF: '90%', heightS: '60%' },
    { title: 'Nov', heightF: '40%', heightS: '90%' },
    { title: 'Dec', heightF: '50%', heightS: '30%' },
  ];
  constructor() {
    if (localStorage.getItem('add') == 'true') {
      this.addNewProduct.next(true);
    } else if (localStorage.getItem('add') == 'false') {
      this.addNewProduct.next(false);
    } else {
      localStorage.setItem('add', 'false');
    }
  }
  
}
