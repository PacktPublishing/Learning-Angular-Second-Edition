import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {

  constructor(private srv: HttpClient) { }

  getData(): Observable<Jedi> {
    return this.srv.get<Jedi>('/starwars/jedi');
  }

  getOtherData() {
    return this.srv.get('/other');
  }
}

class Jedi {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
}