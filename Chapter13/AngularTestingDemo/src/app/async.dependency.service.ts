import { Injectable } from '@angular/core';

@Injectable()
export class AsyncDependencyService {

  constructor() { }

  getData(): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('async data');
      }, 3000);
    })
  }
}
