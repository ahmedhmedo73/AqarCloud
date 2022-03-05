import { Component, OnInit } from '@angular/core';
import 'charts.css';
import { DataService } from '../data.service';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  str: any = 'statistics';
  circumference: any;
  percent: number = 0;
  offset: any;
  items: any = 5;
  
  constructor(public _DataService:DataService) {
    _DataService.href.next(this.str);
  }

  setProgress(r: number, percent: number) {
    this.circumference = r * 2 * Math.PI;
    this.offset = this.circumference - (percent / 100) * this.circumference;
    return `strokeDasharray : ${this.circumference} ${this.circumference} ; strokeDashoffset : ${this.offset};`;
  }
  ngOnInit(): void {}
}
