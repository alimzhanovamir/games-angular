import { Component, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
@Injectable()
export class ListComponent {

  list:any = '';
  s:any = '';

  constructor(private http: HttpClient) {
    
  }

  getData() {
    return this.http
    .jsonp('https://www.gbchip.com/api/v1/games', 'callback')
  }

  ngOnInit() {
    this.getData();
  }
}