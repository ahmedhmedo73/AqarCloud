import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  str: any = 'products';
  circumference: any;
  percent: number = 0;
  offset: any;
  showEdit: boolean = false;
  img: string = '';
  selectedFile: any;
  addNewProduct: boolean = false;
  response:any = '';
  constructor(public _DataService: DataService, private http: HttpClient) {
    _DataService.href.next(this.str);
    _DataService.addNewProduct.subscribe(() => {
      this.addNewProduct = _DataService.addNewProduct.value;
      if (this.addNewProduct) {
        this.showEdit = false;
      }
    });
  }

  uploadImg(event: any) {
    console.log('hi');

    this.selectedFile = <File>event.target.files[0];
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('https://v2.convertapi.com/upload', fd).subscribe((res) => {
      this.response = res;
      this.img = `url('https://v2.convertapi.com/d/${this.response.FileId}')`;
    });
  }
  delete(){
    this.img = ``;
  }
  toggleEdit() {
    this.showEdit = !this.showEdit;
  }
  setProgress(r: number, percent: number) {
    this.circumference = r * 2 * Math.PI;
    this.offset = this.circumference - (percent / 100) * this.circumference;
    return `strokeDasharray : ${this.circumference} ${this.circumference} ; strokeDashoffset : ${this.offset};`;
  }
  ngOnInit(): void {}
}
