import { Injectable } from '@angular/core';

@Injectable()
export class DependencyService {

  constructor() { }

  getData() {
    return 'data from service';
  }
}
