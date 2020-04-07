import { Component, Injectable, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {log} from 'util';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
@Injectable()

export class ListComponent implements OnInit {

  games: any = [];
  total: any = 0;

  constructor(private http: HttpClient) {

  }

  private getData() {
    console.log('getData');
    return this.http
      .get('https://www.gbchip.com/api/v1/games')
      .subscribe( data => {
        this.games = data.games.slice(0, 40);
        this.total = this.games.length+'/'+data.games.length;
        console.log(data.games.slice(0, 40));
      });
  }

  ngOnInit() {
    console.log('on init');
    this.getData();
  }
}
