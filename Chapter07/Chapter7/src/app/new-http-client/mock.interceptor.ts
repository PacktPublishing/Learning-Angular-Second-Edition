import { Injectable } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpEvent } from "@angular/common/http";

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith('/starwars') && request.method === 'GET') {
      let url = request.url;
      let newUrl = `data${url.substring('/starwars'.length)}.json`;
      let req = new HttpRequest('GET', newUrl);
      return next.handle(req);
    } else {
      return next.handle(request);
    }
  }
}