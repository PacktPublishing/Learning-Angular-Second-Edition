import { Component } from '@angular/core';
import { DataService } from './new-http-client/DataService';
import { } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";

import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";

import { HttpHeaders } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(srv: DataService, private http: HttpClient) {
    srv.getData().subscribe(data => {
      console.log('data', data.name);
    });

    //srv.getOtherData().subscribe(data => console.log('other', data));
  }

  requestUsingTheLongWayOfDoingIt() {
    let headers = new HttpHeaders();
    headers.append('CUSTOM-HEADER', 'my secret');

    let request = new HttpRequest('GET', 'jedis.json', {
      headers: headers
    });

    const options = {};
    this.http.get('message.json', { ...options, responseType: 'text' })
      .catch(err => Observable.of(err))
      .subscribe(x => console.log(x))
      ;

    //this.http.get('/test', options);


    //let requestOptions = new RequestOptions({
    //  method: RequestMethod.Get,
    //  url: '/my-api/my-data-store.json'
    //});

    //let request = new Request(requestOptions);
    //let myHttpRequest: Observable<Response> = http.request(request);
  }
}
